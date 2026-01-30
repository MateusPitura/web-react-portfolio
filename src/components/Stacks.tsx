import CardStack from "../components/CardStack";
import { badgesSkills } from "../constants/badgesSkills";
import { useGlobalStore } from "../store/globalStore";

function Stacks() {
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
            badgesSkills.Tailwind,
            badgesSkills.CSS,
          ]}
          setIsTooltipOpen={toggleShowTooltip}
          isTooltipOpen={showTooltip}
        />
        <CardStack
          title="Back-End"
          badges={[
            badgesSkills.GraphQL,
            badgesSkills.Node,
            badgesSkills.RESTfulAPI,
            badgesSkills.SpringBoot,
            badgesSkills.NestJS,
          ]}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="Database"
          badges={[
            badgesSkills.MySQL,
            badgesSkills.RDS,
            badgesSkills.DynamoDB,
            badgesSkills.Postgres,
            badgesSkills.AmazonS3,
          ]}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="DevOps"
          badges={[badgesSkills.OCI, badgesSkills.AWS, badgesSkills.Terraform]}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="Mobile"
          badges={[badgesSkills.ReactNative, badgesSkills.Android]}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="Test"
          badges={[badgesSkills.Jest, badgesSkills.Cypress]}
          setIsTooltipOpen={toggleShowTooltip}
        />
        <CardStack
          title="Others"
          badges={[badgesSkills.Git, badgesSkills.Linux, badgesSkills.Docker]}
          setIsTooltipOpen={toggleShowTooltip}
        />
      </div>
    </section>
  );
}

export default Stacks;
