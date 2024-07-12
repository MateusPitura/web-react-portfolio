import JobCard from '../components/JobCard'

function Experience() {
    return (
        <div className='flex w-full bg-[#100e07] min-h-[500px] justify-center'>
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
                />
            </div>
        </div>
    )
}

export default Experience;