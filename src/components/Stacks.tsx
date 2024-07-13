import CardStack from '../components/CardStack'
import { badgesSkills } from '../constants/badgesSkills';

function Stacks() {
    return (
        <div className='flex min-h-[800px] w-full justify-center p-2 py-10'>
            <div className='flex w-[60%] flex-wrap'>
                <CardStack
                    title='Front-End'
                    badges={[
                        badgesSkills.React,
                        badgesSkills.TypeScript,
                        badgesSkills.JavaScript,
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
                        badgesSkills.JWT,
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
                        badgesSkills.Git,
                        badgesSkills.Linux,
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
                    title='Design'
                    badges={[
                        badgesSkills.Figma,
                        badgesSkills.Tailwind,
                        badgesSkills.CSS,
                    ]}
                />
                <CardStack
                    title='Games'
                    badges={[
                        badgesSkills.Unity,
                    ]}
                />
                <CardStack
                    title='Others'
                    badges={[
                        badgesSkills.C,
                        badgesSkills.Python,
                        badgesSkills.Storybook,
                    ]}
                />
            </div>
        </div>
    )
}

export default Stacks;