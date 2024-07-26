import EducationCard from "./EducationCard"

function Education() {
    return (
        <>
            <EducationCard
                school='UEPG'
                fromTo='2022 - 2026'
                course='Bacharelado em Engenharia de Software'
                activities={[
                    'Como acadêmico extensionista, desenvolvi um software usando Realidade Aumentada voltado para a comunidade escolar',
                    'Além disso, palestrei para a comunidade sobre segurança digital, o que incluiu temas como phishing e proteção de dados',
                ]}
                isLarge
            />
            <div className='w-full mb-10'>
                <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] w-[60%] gap-2 m-auto max-w-[62.5rem]'>
                    <EducationCard
                        school='Onebitcode'
                        fromTo='2024'
                        course='Full Stack JavaScript'
                    />
                    <EducationCard
                        school='Harvard'
                        fromTo='2024'
                        course='CS50'
                    />
                    <EducationCard
                        school='iFood + Ada'
                        fromTo='2023 - 2024'
                        course='Vem Ser Tech'
                    />
                    <EducationCard
                        school='Oracle'
                        fromTo='2023'
                        course={
                            <a
                                href='https://catalog-education.oracle.com/pls/certview/sharebadge?id=624E43496DE7A92D339650BEB80BCEFBC9D6B87F214C9C1BA51039E5254F97D5'
                                target='_blank'
                                className='hover:opacity-50 hover:text-onSecondary-light underline text-onSecondary-light font-normal'
                            >
                                OCI Foundations Associate
                            </a>
                        }
                    />
                    <EducationCard
                        school='Oracle + Alura'
                        fromTo='2022 - 2023'
                        course='ONE'
                    />
                    <EducationCard
                        school='SENAI'
                        fromTo='2019 - 2021'
                        course='Técnico em Automação Industrial'
                    />
                </div>
            </div>
        </>
    )
}

export default Education