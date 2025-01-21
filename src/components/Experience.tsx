import { useTranslation } from "react-i18next";
import JobCard from "../components/JobCard";
import { badgesSkills } from "../constants/badgesSkills";
import Year from "./Year";
import VerticalLine from "./VerticalLine";

function Experience() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-secondary-light justify-center block sm:grid sm:grid-cols-[4fr_30px_5fr] pb-20 sm:pb-0">
      <Year year="2022" />
      <VerticalLine />
      <JobCard
        company="HURCG"
        position={t("EXPERIENCE.HURCG")}
        activities={[
          t("HURCG.ACTIVITY1"),
          t("HURCG.ACTIVITY2"),
          t("HURCG.ACTIVITY3"),
        ]}
        badges={[badgesSkills.Oracle]}
      />
      <Year year="2023" />
      <VerticalLine />
      <JobCard
        company="Continental"
        position={t("EXPERIENCE.CONTINENTAL")}
        activities={[
          t("CONTINENTAL.ACTIVITY1"),
          t("CONTINENTAL.ACTIVITY2"),
          t("CONTINENTAL.ACTIVITY3"),
        ]}
        badges={[badgesSkills.HTML, badgesSkills.CSS, badgesSkills.Figma]}
      />
      <Year year="2024" />
      <VerticalLine gradient />
      <JobCard
        company="Medcloud"
        position={t("EXPERIENCE.MEDCLOUD")}
        activities={[
          t("MEDCLOUD.ACTIVITY1"),
          t("MEDCLOUD.ACTIVITY2"),
          t("MEDCLOUD.ACTIVITY3"),
        ]}
        badges={[
          badgesSkills.React,
          badgesSkills.TypeScript,
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
          badgesSkills.Node,
          badgesSkills.DYNAMODB,
          badgesSkills.RDS,
        ]}
      />
    </section>
  );
}

export default Experience;
