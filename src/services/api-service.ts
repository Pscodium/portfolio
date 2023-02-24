

interface GithubRepository {
    title: string,
    description: string | null,
    language: string | null,
    url: string,
    live: string | null,
    stargazers_count: number | null,
    forks_count: number | null
}


class ServiceApi {

    getHeaders(contentType?: string) {
        const headers = new Headers();

        if (contentType) {
            headers.set("Content-Type", contentType);
        }

        return headers;
    }


    async getRepositories(): Promise<GithubRepository[]> {
        const res = await fetch("https://api.github.com/users/Pscodium/repos", {
            method: "GET",
            headers: this.getHeaders("application/json")
        });

        const response = await res.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return response.map((repo: any) => {
            return {
                title: repo.name,
                description: repo.description,
                language: repo.language,
                url: repo.html_url,
                live: repo.homepage,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count
            };
        });
    }

}

export const serviceApi = new ServiceApi();
export type { GithubRepository };