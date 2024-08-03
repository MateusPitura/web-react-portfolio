import '../App.css'
import Introduction from '../components/Introduction'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Project from '../components/Project'
import Stacks from '../components/Stacks'
import { useRef } from 'react'
import Slider from 'react-slick'

function Home() {

  const sliderRef = useRef<Slider>(null)

  return (
    <>
      <main className='flex flex-wrap pt-20 bg-surface-light dark:bg-surface-dark'>
        <Introduction />
        <Experience />
        <Education />
        <Project sliderRef={sliderRef} />
        <Contact />
        <Stacks sliderRef={sliderRef} />
      </main>
    </>
  )
}

export default Home