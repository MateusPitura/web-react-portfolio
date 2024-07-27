import '../App.css'
import Introduction from '../components/Introduction'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Project from '../components/Project'
import Stacks from '../components/Stacks'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRef } from 'react'
import Slider from 'react-slick'

function Home() {

  const sliderRef = useRef<Slider>(null)

  return (
    <>
      <Header />
      <div className='flex flex-wrap pt-20 bg-surface-light dark:bg-surface-dark'>
        <Introduction />
        <Experience />
        <Education />
        <Project sliderRef={sliderRef}/>
        <Contact />
        <Stacks sliderRef={sliderRef}/>
        <Footer />
      </div>
    </>
  )
}

export default Home