import { RefObject, useState } from 'react';
import CardStack from '../components/CardStack'
import { badgesSkills } from '../constants/badgesSkills';
import Slider from 'react-slick';

interface ProjectProperties {
    sliderRef: RefObject<Slider>;
}

function Stacks({ sliderRef }: ProjectProperties) {
    const [isTooltipOpen, setIsTooltipOpen] = useState(true);

    return (
        <section className='min-h-[25rem] w-full p-2 py-20'>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] w-[60%] gap-5 m-auto'>
                <CardStack
                    title='Front-End'
                    badges={[
                        badgesSkills.React,
                        badgesSkills.Storybook,
                        badgesSkills.JavaScript,
                        badgesSkills.TypeScript,
                        badgesSkills.HTML,
                    ]}
                    sliderRef={sliderRef}
                    setIsTooltipOpen={setIsTooltipOpen}
                    isTooltipOpen={isTooltipOpen}
                />
                <CardStack
                    title='Design'
                    badges={[
                        badgesSkills.Figma,
                        badgesSkills.Tailwind,
                        badgesSkills.CSS,
                    ]}
                    sliderRef={sliderRef}
                    setIsTooltipOpen={setIsTooltipOpen}
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
                    sliderRef={sliderRef}
                    setIsTooltipOpen={setIsTooltipOpen}
                />
                <CardStack
                    title='Database'
                    badges={[
                        badgesSkills.MySQL,
                        badgesSkills.Oracle,
                    ]}
                    sliderRef={sliderRef}
                    setIsTooltipOpen={setIsTooltipOpen}
                />
                <CardStack
                    title='DevOps'
                    badges={[
                        badgesSkills.OCI,
                        badgesSkills.AWS,
                        badgesSkills.Terraform,
                        badgesSkills.Docker
                    ]}
                    sliderRef={sliderRef}
                    setIsTooltipOpen={setIsTooltipOpen}
                />
                <CardStack
                    title='Mobile'
                    badges={[
                        badgesSkills.ReactNative,
                        badgesSkills.Android,
                    ]}
                    sliderRef={sliderRef}
                    setIsTooltipOpen={setIsTooltipOpen}
                />
                <CardStack
                    title='Others'
                    badges={[
                        badgesSkills.Git,
                        badgesSkills.Linux,
                    ]}
                    sliderRef={sliderRef}
                    setIsTooltipOpen={setIsTooltipOpen}
                />
            </div>
        </section>
    )
}

export default Stacks;