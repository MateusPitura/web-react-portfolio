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
            />
            <div className='flex w-full justify-center mb-10'>
                <div className='flex flex-wrap max-w-[1000px] justify-center'>
                    <EducationCard
                        school='OneBitCode'
                        fromTo='2024'
                        course='Full Stack'
                    />
                    <EducationCard
                        school='Harvard'
                        fromTo='2024'
                        course='Cs50'
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
                                className='hover:opacity-50 hover:text-[#363016] underline text-[#363016] font-normal'
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