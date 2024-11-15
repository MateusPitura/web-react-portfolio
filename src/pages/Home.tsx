import { useRef } from "react";
import Slider from "react-slick";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Introduction from "../components/Introduction";
import Stacks from "../components/Stacks";

function Home() {
  const sliderRef = useRef<Slider>(null);

  return (
    <>
      <main className="flex flex-wrap pt-20 bg-surface-light dark:bg-surface-dark">
        <Introduction />
        <Experience />
        <Education />
        <Project sliderRef={sliderRef} />
        <Contact />
        <Stacks sliderRef={sliderRef} />
      </main>
    </>
  );
}

export default Home;
