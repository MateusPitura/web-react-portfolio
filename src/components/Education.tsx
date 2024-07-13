import EducationCard from "./EducationCard"

function Education() {
    return (
        <>
            <EducationCard
                school='UEPG'
                fromTo='2022 - 2026'
                course='Bacharelado em Engenharia de Software'
                activities={[
                    'Como acadêmico extensionista, palestrei para a comunidade sobre segurança digital, o que incluiu temas como phishing e proteção de dados',
                    'Além disso, desenvolvi projetos usando Realidade Aumentada com foco na comunidade escolar',
                    'Também colaborei na tesouraria do centro acadêmico do curso',
                ]}
                isLarge
                badgesLinks={[
                    'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white',  //C
                    'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54', //Python
                    'https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white', //Unity
                    'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white',  //Java
                ]}
            />
            <div className='flex w-full justify-center mb-10'>
                <div className='flex flex-wrap max-w-[1000px] justify-center'>
                    <EducationCard
                        school='OneBitCode'
                        fromTo='2024'
                        course='Full Stack'
                        badgesLinks={[
                            'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', //React
                            'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white', //Typescript
                            'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',  //Javascript
                            'https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white', //Tailwind
                            'https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', //CSS
                            'https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white', //HTML
                        ]}
                    />
                    <EducationCard
                        school='Harvard'
                        fromTo='2024'
                        course='Cs50'
                        badgesLinks={[
                            'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white',  //C
                        ]}
                    />
                    <EducationCard
                        school='iFood + Ada'
                        fromTo='2023 - 2024'
                        course='Vem Ser Tech'
                        badgesLinks={[
                            'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', //React
                            'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',  //Javascript
                            'https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', //CSS
                            'https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white', //HTML
                        ]}
                    />
                    <EducationCard
                        school='Oracle'
                        fromTo='2023'
                        course={
                            <a
                                href='https://catalog-education.oracle.com/pls/certview/sharebadge?id=624E43496DE7A92D339650BEB80BCEFBC9D6B87F214C9C1BA51039E5254F97D5'
                                target='_blank'
                                className='hover:opacity-50 hover:text-[#363016] underline text-[#363016] font-normal'
                            >
                                OCI Foundations Associate
                            </a>
                        }
                        badgesLinks={[
                            'https://img.shields.io/badge/OCI-F80000?style=for-the-badge&logo=oracle&logoColor=white', //OCI

                        ]}
                    />
                    <EducationCard
                        school='Oracle + Alura'
                        fromTo='2022 - 2023'
                        course='ONE'
                        badgesLinks={[
                            'https://img.shields.io/badge/spring boot-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white', //Spring Boot
                            'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white',  //Java
                            'https://img.shields.io/badge/RESTful API-2F3134?style=for-the-badge', //RESTFUL API
                        ]}
                    />
                    <EducationCard
                        school='SENAI'
                        fromTo='2019 - 2021'
                        course='Técnico em Automação Industrial'
                        badgesLinks={[
                            'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white',  //C
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default Education