<div style="display: inline-flex; align-items: center">
    <img src="https://cdn.midjourney.com/cda590d8-eeb4-4997-a111-3c443c2c07ee/grid_0.png" style="width:250px; height: 250px; border-radius: 50%"/>
    <div style="margin-left: 30px">
        <p style="font-size: 40px; font-weight: 600;">Peterson Larson</p>
        <p>Typescript Developer</p>
    </div>
</div>

-----
<h1>About me</h1>

Hello, my name is Peterson, I'm 22 years old and I live in Brazil.

I have a great admiration for software development and I like to create applications that somehow increase my technical knowledge.

Now I'm looking for new job opportunities.

<h1>Skills</h1>

<div style="flex-direction: column; display: flex">
    <div style="flex-direction:row; display: inline-flex; align-items: center; height: 50px; margin-top: 10px">
        <p style="font-size: 18px; height: 10px; font-weight: 500;">Languages: </p>
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" />
    </div>
    <div style="flex-direction:row; display: inline-flex; align-items: center; height: 50px;">
        <p style="font-size: 18px; height: 10px; font-weight: 500;">Frameworks: </p>
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/styled--components-4ecc8b?style=for-the-badge&logo=styled-components&logoColor=white" />
    <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
    </div>
    <div style="flex-direction:row; display: inline-flex; align-items: center; height: 50px;">
        <p style="font-size: 18px; height: 10px; font-weight: 500;">Markup Languages: </p>
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/HTML-ff8f17?style=for-the-badge&logo=html5&logoColor=white" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/CSS-7200fc?&style=for-the-badge&logo=css3&logoColor=white" />
    </div>
    <div style="flex-direction:row; display: inline-flex; align-items: center; height: 50px;">
        <p style="font-size: 18px; height: 10px; font-weight: 500;">Unit Tests: </p>
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red" />
    </div>
    <div style="flex-direction:row; display: inline-flex; align-items: center; height: 50px;">
        <p style="font-size: 18px; height: 10px; font-weight: 500;">Databases: </p>
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
        <img style="margin-left: 10px; border-radius: 5px" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
    </div>
</div>

<h1>Work History</h1>

```javascript
interface WorkProps {
    company: String;
    role: String;
    start_date: Date;
    end_date: Date;
    work_description: String;
    current: Boolean; 
}

class Work {
    public experiences: Array<WorkProps>;

    constructor(props) {
        super(props)
        this.experiences = [];
    }

    setWork() {
        this.experiences = [
            {
                company: "Imobo",
                role: "Backend Developer",
                start_date: "2021-12-20",
                end_date: "2022-04-20",
                current: false,
                work_description: "Code creation and maintenance."
            },
            {
                company: "Camerite",
                role: "Frontend Developer",
                start_date: "2022-02-14",
                end_date: "current",
                current: true,
                work_description: "Creating a mobile pwa application."
            }
        ]
    }
}
```