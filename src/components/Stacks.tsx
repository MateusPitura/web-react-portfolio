import { RefObject, useState } from 'react';
import Slider from 'react-slick';
import CardStack from '../components/CardStack';
import { badgesSkills } from '../constants/badgesSkills';

interface ProjectProperties {
    sliderRef: RefObject<Slider>;
}

function Stacks({ sliderRef }: ProjectProperties) {
    const [isTooltipOpen, setIsTooltipOpen] = useState(true);

    return (
        <section className='min-h-[25rem] w-full p-2 py-20'>
            <div className='sm:grid md:grid-cols-2 lg:grid-cols-4 w-[80%] gap-5 m-auto'>
                <CardStack
                    title='Front-End'
                    badges={[
                        badgesSkills.React,
                        badgesSkills.TypeScript,
                        badgesSkills.Storybook,
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
                        badgesSkills.GraphQL,
                        badgesSkills.Node,
                        badgesSkills.RESTfulAPI,
                        badgesSkills.SpringBoot,
                    ]}
                    sliderRef={sliderRef}
                    setIsTooltipOpen={setIsTooltipOpen}
                />
                <CardStack
                    title='Database'
                    badges={[
                        badgesSkills.MySQL,
                        badgesSkills.RDS,
                        badgesSkills.DYNAMODB,
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
                    ]}
                    sliderRef={sliderRef}
                    setIsTooltipOpen={setIsTooltipOpen}
                />
                <CardStack
                    title='Mobile'
                    badges={[
                        badgesSkills.ReactNative,
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