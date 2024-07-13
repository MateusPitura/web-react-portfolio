import JobCard from '../components/JobCard'

function Experience() {
    return (
        <div className='flex w-full bg-[#0a0a0a] min-h-[500px] justify-center'>
            <div className='justify-center'>
                <JobCard
                    company='HURCG'
                    position='Estágio Desenvolvimento'
                    activities={[
                        'Geração de relatórios com SQL a partir de banco de dados Oracle',
                        'Suporte ao usuário para o sistema Tasy',
                        'Criação de planilhas automatizadas para análise de dados',
                    ]}
                    yearFrom={2022}
                    badgesLinks={[
                        'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white', //Oracle
                    ]}
                />
                <JobCard
                    company='Continental'
                    position='Estágio TI'
                    activities={[
                        'Criação de intranets para setores da empresa',
                        'Gerenciamento e auditoria de computadores via PowerShell',
                        'Manutenção de infraestrutura de redes',
                    ]}
                    yearFrom={2023}
                    badgesLinks={[
                        'https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white', //HTML
                        'https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', //CSS
                        'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white', //Figma
                    ]}
                />
                <JobCard
                    company='Medcloud'
                    position='Estágio FullStack'
                    activities={[
                        'Documentação de biblioteca de componentes com Storybook',
                        'Criação e manutenção de front-end com React',
                        'Programação de back-end com Node, AWS e GraphQL',
                    ]}
                    yearFrom={2024}
                    badgesLinks={[
                        'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', //React
                        'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white', //Typescript
                        'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',  //Javascript
                        'https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white', //Tailwind
                        'https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', //CSS
                        'https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white', //HTML
                        'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white', //AWS
                        'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white', //GIT
                        'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black', //LINUX
                        'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white', //MySQL
                        'https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white', //GraphQL
                    ]}
                />
                <div className='flex max-w-[450px] mb-5'>
                    <div className="p-4">
                        <div className='my-10 min-w-[75px]'/>
                    </div>
                    <div className='min-w-[20px] flex justify-center'>
                        <div className='bg-gradient-to-b from-[#ffeeee] to-[#0a0a0a] min-heigth-[100px] w-[4px]'></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;