import { RefObject } from "react";
import Slider from "react-slick";
import CardStack from "../components/CardStack";
import { badgesSkills } from "../constants/badgesSkills";
import { useGlobalStore } from "../store/globalStore";

interface ProjectProperties {
  sliderRef: RefObject<Slider>;
}

function Stacks({ sliderRef }: ProjectProperties) {
  const { showTooltip, toggleShowTooltip } = useGlobalStore();

  return (
    <section className="min-h-[25rem] w-full p-2 py-20">
      <div className="sm:grid md:grid-cols-2 lg:grid-cols-4 w-[80%] gap-5 m-auto">
        <CardStack
          title="Front-End"
          badges={[
            badgesSkills.React,
            badgesSkills.TypeScript,
            badgesSkills.Storybook,
            badgesSkills.HTML,
          ]}
          sliderRef={sliderRef}
          setIsTooltipOpen={toggleShowTooltip}
          isTooltipOpen={showTooltip}
        />
        <CardStack
          title="Design"
          badges={[badgesSkills.Figma, badgesSkills.Tailwind, badgesSkills.CSS]}
          sliderRef={sliderRef}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="Back-End"
          badges={[
            badgesSkills.GraphQL,
            badgesSkills.Node,
            badgesSkills.RESTfulAPI,
            badgesSkills.SpringBoot,
          ]}
          sliderRef={sliderRef}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="Database"
          badges={[
            badgesSkills.MySQL,
            badgesSkills.RDS,
            badgesSkills.DYNAMODB,
            badgesSkills.Oracle,
          ]}
          sliderRef={sliderRef}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="DevOps"
          badges={[badgesSkills.OCI, badgesSkills.AWS, badgesSkills.Terraform]}
          sliderRef={sliderRef}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="Mobile"
          badges={[badgesSkills.ReactNative]}
          sliderRef={sliderRef}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="Others"
          badges={[badgesSkills.Git, badgesSkills.Linux]}
          sliderRef={sliderRef}
          setIsTooltipOpen={toggleShowTooltip}
        />
      </div>
    </section>
  );
}

export default Stacks;
