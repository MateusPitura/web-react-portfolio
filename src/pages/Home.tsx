import '../App.css'
import Introduction from '../components/Introduction'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Project from '../components/Project'
import Stacks from '../components/Stacks'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className='flex flex-wrap pt-20'>
        <Introduction />
        <Experience />
        <Education />
        <Project />
        <Contact />
        <Stacks />
        <Footer />
      </div>
    </>
  )
}

export default Home