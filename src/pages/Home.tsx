import Introduction from "../components/Introduction";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Stacks from "../components/Stacks";
import React, { useRef } from "react";
import Slider from "react-slick";

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