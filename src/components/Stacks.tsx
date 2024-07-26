import CardStack from '../components/CardStack'
import { badgesSkills } from '../constants/badgesSkills';

function Stacks() {
    return (
        <div className='min-h-[50rem] w-full p-2 py-10'>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] w-[60%] gap-5 m-auto'>
                <CardStack
                    title='Front-End'
                    badges={[
                        badgesSkills.React,
                        badgesSkills.Storybook,
                        badgesSkills.JavaScript,
                        badgesSkills.TypeScript,
                    ]}
                    hasTooltip
                />
                <CardStack
                    title='Design'
                    badges={[
                        badgesSkills.Figma,
                        badgesSkills.Tailwind,
                        badgesSkills.CSS,
                    ]}
                />
                <CardStack
                    title='Back-End'
                    badges={[
                        badgesSkills.SpringBoot,
                        badgesSkills.Java,
                        badgesSkills.RESTfulAPI,
                        badgesSkills.GraphQL,
                        badgesSkills.Postman,
                    ]}
                />
                <CardStack
                    title='Database'
                    badges={[
                        badgesSkills.MySQL,
                        badgesSkills.Oracle,
                    ]}
                />
                <CardStack
                    title='DevOps'
                    badges={[
                        badgesSkills.OCI,
                        badgesSkills.AWS,
                        badgesSkills.Terraform,
                        badgesSkills.Docker
                    ]}
                />
                <CardStack
                    title='Mobile'
                    badges={[
                        badgesSkills.ReactNative,
                        badgesSkills.Android,
                    ]}
                />
                <CardStack
                    title='Others'
                    badges={[
                        badgesSkills.Git,
                        badgesSkills.Linux,
                    ]}
                />
            </div>
        </div>
    )
}

export default Stacks;