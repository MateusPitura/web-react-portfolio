import { useTranslation } from "react-i18next";
import EducationCard from "./EducationCard";

function Education() {
  const { t } = useTranslation();

  return (
    <>
      <EducationCard
        school="UEPG"
        fromTo="2022 - 2026"
        course={t("EDUCATION.UEPG")}
        activities={[
          t("UEPG.ACTIVITY1"),
          t("UEPG.ACTIVITY2"),
          t("UEPG.ACTIVITY3"),
        ]}
        isLarge
      />
      <section className="w-full mb-10 flex items-center justify-center">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          <EducationCard
            school="OneBitCode"
            fromTo="2024"
            course="Full Stack JavaScript"
          />
          <EducationCard school="Harvard" fromTo="2024" course="CS50" />
          <EducationCard
            school="iFood + Ada"
            fromTo="2023 - 2024"
            course="Vem Ser Tech"
          />
          <EducationCard
            school="Oracle"
            fromTo="2023"
            course={
              <a
                href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=624E43496DE7A92D339650BEB80BCEFBC9D6B87F214C9C1BA51039E5254F97D5"
                target="_blank"
                className="hover:opacity-50 hover:text-onSecondary-light underline text-onSecondary-light"
              >
                OCI Foundations Associate
              </a>
            }
          />
          <EducationCard
            school="Oracle + Alura"
            fromTo="2022 - 2023"
            course="ONE"
          />
          <EducationCard
            school="SENAI"
            fromTo="2019 - 2021"
            course={t("EDUCATION.SENAI")}
          />
        </div>
      </section>
    </>
  );
}

export default Education;
