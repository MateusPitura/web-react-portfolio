import React, { useRef } from "react";
import Slider from "react-slick";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Stacks from "../components/Stacks";

const ProjectLazy = React.lazy(() => import("../components/Project"));

function Home() {
  const sliderRef = useRef<Slider>(null);

  return (
    <>
      <main className="flex flex-wrap pt-20 bg-surface-light dark:bg-surface-dark">
        <Introduction />
        <Experience />
        <Education />
        <ProjectLazy sliderRef={sliderRef} />
        <Contact />
        <Stacks sliderRef={sliderRef} />
      </main>
    </>
  );
}

export default Home;
