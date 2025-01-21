import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppReactnativeVestibularLarge from "../assets/images/app-vestibular-large.webp";
import AppReactnativeVestibularSmall from "../assets/images/app-vestibular-small.webp";
import AppReactNativeCombustivelLarge from "../assets/images/app-combustivel-large.webp";
import AppReactNativeCombustivelSmall from "../assets/images/app-combustivel-small.webp";
import CardProject from "./CardProject";
import { badgesSkills } from "../constants/badgesSkills";
import { RefObject } from "react";
import Arrow from "./Arrow";
import { useTranslation } from "react-i18next";

interface CustomSliderProperties {
  sliderRef: RefObject<Slider>;
}

export default function CustomSlider({ sliderRef }: CustomSliderProperties) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow next />,
    useTransform: false,
  };

  const { t } = useTranslation();

  return (
    <Slider ref={sliderRef} {...settings}>
      <CardProject
        title="app-reactnative-vestibular"
        imageLarge={AppReactnativeVestibularLarge}
        imageSmall={AppReactnativeVestibularSmall}
        releaseYear={2024}
        link="https://github.com/MateusPitura/app-reactnative-vestibular"
        description={t("PROJECT.VESTIBULAR")}
        badges={[
          badgesSkills.ReactNative,
          badgesSkills.CSS,
          badgesSkills.Git,
          badgesSkills.Figma,
        ]}
      />
      <CardProject
        title="app-reactnative-combustivel"
        releaseYear={2023}
        description={t("PROJECT.COMBUSTIVEL")}
        link="https://github.com/MateusPitura/app-reactnative-combustivel"
        imageLarge={AppReactNativeCombustivelLarge}
        imageSmall={AppReactNativeCombustivelSmall}
        badges={[
          badgesSkills.ReactNative,
          badgesSkills.CSS,
          badgesSkills.Git,
          badgesSkills.Figma,
        ]}
      />
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
      />
    </Slider>
  );
}
