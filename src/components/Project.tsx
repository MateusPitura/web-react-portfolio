import { useTranslation } from "react-i18next";
import AppReactNativeCombustivel860w from "../assets/images/app-combustivel-860w.webp";
import AppReactnativeVestibular860w from "../assets/images/app-vestibular-860w.webp";
import { badgesSkills } from "../constants/badgesSkills";
import CardProject from "./CardProject";
import Carousel from "./Carousel";

function Project() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[50rem] bg-primary-light p-2 w-full justify-center items-center">
      <div className="w-full sm:w-[80%]">
        <Carousel
          items={[
            <CardProject
              title="app-reactnative-vestibular"
              src={AppReactnativeVestibular860w}
              releaseYear={2024}
              link="https://github.com/MateusPitura/app-reactnative-vestibular"
              description={t("PROJECT.VESTIBULAR")}
              badges={[
                badgesSkills.ReactNative,
                badgesSkills.Android,
                badgesSkills.CSS,
                badgesSkills.Git,
              ]}
            />,
            <CardProject
              title="app-reactnative-combustivel"
              releaseYear={2023}
              description={t("PROJECT.COMBUSTIVEL")}
              link="https://github.com/MateusPitura/app-reactnative-combustivel"
              src={AppReactNativeCombustivel860w}
              badges={[
                badgesSkills.ReactNative,
                badgesSkills.Android,
                badgesSkills.CSS,
                badgesSkills.Git,
              ]}
            />,
            <CardProject
              title="api-spring-vestibular"
              releaseYear={2024}
              description={t("PROJECT.API")}
              link="https://github.com/MateusPitura/api-spring-vestibular"
              badges={[
                badgesSkills.SpringBoot,
                badgesSkills.RESTfulAPI,
                badgesSkills.Git,
                badgesSkills.OCI,
                badgesSkills.Linux,
                badgesSkills.MySQL,
              ]}
            />,
          ]}
        />
      </div>
    </section>
  );
}

export default Project;
