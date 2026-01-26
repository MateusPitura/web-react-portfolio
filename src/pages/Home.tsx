import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Project from "../components/Project";
import Stacks from "../components/Stacks";

function Home() {
  return (
    <main className="flex flex-wrap pt-20 bg-surface-light dark:bg-surface-dark">
      <Introduction />
      <Experience />
      <Education />
      <Project />
      <Contact />
      <Stacks />
    </main>
  );
}

export default Home;
