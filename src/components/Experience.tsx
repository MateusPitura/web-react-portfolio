import JobCard from '../components/JobCard'
import { badgesSkills } from '../constants/badgesSkills'

function Experience() {
    return (
        <div className='flex w-full bg-secondary-light min-h-[31.25rem] justify-center'>
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
                    badges={[
                        badgesSkills.Oracle,
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
                    badges={[
                        badgesSkills.HTML,
                        badgesSkills.CSS,
                        badgesSkills.Figma,
                    ]}
                />
                <JobCard
                    company='Medcloud'
                    position='Estágio FullStack'
                    activities={[
                        'Documentação e aperfeiçoamento de biblioteca de componentes interna',
                        'Criação e manutenção de front-end',
                        'Modelagem de banco de dados, desenvolvimento de back-end e deploy em nuvem',
                    ]}
                    yearFrom={2024}
                    badges={[
                        badgesSkills.React,
                        badgesSkills.TypeScript,
                        badgesSkills.JavaScript,
                        badgesSkills.Tailwind,
                        badgesSkills.CSS,
                        badgesSkills.HTML,
                        badgesSkills.AWS,
                        badgesSkills.Git,
                        badgesSkills.Linux,
                        badgesSkills.MySQL,
                        badgesSkills.GraphQL,
                        badgesSkills.Storybook,
                        badgesSkills.Terraform,
                        badgesSkills.Docker
                    ]}
                />
                <div className='flex max-w-[28.125rem] mb-5'>
                    <div className="p-4">
                        <div className='my-10 min-w-[4.6875rem]' />
                    </div>
                    <div className='min-w-[1.25rem] flex justify-center'>
                        <div className='bg-gradient-to-b from-surface-light to-secondary-light min-heigth-[6.25rem] w-[0.25rem]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;