import Slider from "react-slick";
import React, { RefObject } from "react";

interface ProjectProperties {
  sliderRef: RefObject<Slider>;
}

const CustomSliderLazy = React.lazy(() => import("./CustomSlider"));

function Project({ sliderRef }: ProjectProperties) {
  return (
    <section className="flex min-h-[50rem] bg-primary-light p-2 w-full justify-center items-center">
      <div className="w-full sm:w-[80%]">
        <CustomSliderLazy sliderRef={sliderRef} />
      </div>
    </section>
  );
}

export default Project;
