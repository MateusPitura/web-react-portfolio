import { useTranslation } from 'react-i18next';
import JobCard from '../components/JobCard'
import { badgesSkills } from '../constants/badgesSkills'

function Experience() {
    const { t } = useTranslation();

    return (
        <section className='flex w-full bg-secondary-light min-h-[31.25rem] justify-center'>
            <div className='justify-center'>
                <JobCard
                    company='HURCG'
                    position={t('EXPERIENCE.HURCG')}
                    activities={[
                        t('HURCG.ACTIVITY1'),
                        t('HURCG.ACTIVITY2'),
                        t('HURCG.ACTIVITY3'),
                    ]}
                    yearFrom={2022}
                    badges={[
                        badgesSkills.Oracle,
                    ]}
                />
                <JobCard
                    company='Continental'
                    position={t('EXPERIENCE.CONTINENTAL')}
                    activities={[
                        t('CONTINENTAL.ACTIVITY1'),
                        t('CONTINENTAL.ACTIVITY2'),
                        t('CONTINENTAL.ACTIVITY3'),
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
                    position={t('EXPERIENCE.MEDCLOUD')}
                    activities={[
                        t('MEDCLOUD.ACTIVITY1'),
                        t('MEDCLOUD.ACTIVITY2'),
                        t('MEDCLOUD.ACTIVITY3'),
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
        </section>
    )
}

export default Experience;