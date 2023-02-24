import React, { useEffect, useState } from "react";
import { serviceApi, GithubRepository } from "../services/api-service";
import RepositoryCard from "../components/RepositoryCard";
import { useMediaQuery, Container, Stack, Text, Button, useColorMode } from '@chakra-ui/react';
import StackGrid from 'react-stack-grid';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


export default function Repositories() {
    const [repositories, setRepositories] = useState<GithubRepository[]>([]);
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
    const [isLargerThan982] = useMediaQuery('(min-width: 982px)');
    const [viewHeight, setViewHeight] = React.useState(0);
    const { colorMode, toggleColorMode } = useColorMode();

    let columnWidth = 390;
    if (isLargerThan982) {
        columnWidth = 390;
    } else {
        if (isLargerThan720) {
            columnWidth = 300;
        }
    }

    async function getRepositories() {
        const response = await serviceApi.getRepositories();

        setRepositories(response);
    }

    useEffect(() => {
        getRepositories();

        setViewHeight(window.innerHeight - 60);

        function handleResize() {
            setViewHeight(window.innerHeight - 60);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return (
        <>
            <Stack display="flex" alignItems="center" justifyContent="center" bg="chakra-body-bg" top="0px" h="60px" zIndex="10" w="100%" position="fixed">
                <a style={{ cursor: "pointer" }} onClick={() => window.location.href = '/'}>
                    <Text 
                        align="center"
                        fontSize="25px"
                        className="header-title"
                        zIndex="20"
                    >Pscodium.dev</Text>
                </a>
                <Button zIndex="30" position="fixed" top="2px" right="15px" onClick={() => toggleColorMode()}>
                    {colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}
                </Button>
            </Stack>
            
            <div style={{ height: viewHeight, width: "100%"}}>
                <Container marginTop="30px" maxW="7xl" h={viewHeight} p={{ base: 5, md: 12 }}>
                    <StackGrid columnWidth={!isLargerThan982 && !isLargerThan720 ? '100%' : columnWidth}>
                        {repositories.map((repo, index) => (
                            <RepositoryCard
                                key={index}
                                title={repo.title}
                                description={repo.description}
                                language={repo.language}
                                url={repo.url}
                                stargazers_count={repo.stargazers_count}
                                forks_count={repo.forks_count}
                            />
                        ))}
                    </StackGrid>
                </Container>
            </div>
        </>
    );
}