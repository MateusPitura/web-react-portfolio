import './App.css'
import Introduction from './components/Introduction'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Education from './components/Education'
import Project from './components/Project'

function App() {
  return (
    <>
      <div className='flex flex-wrap pt-20'>
        <Introduction />
        <Contact />
        <Experience />
        <Project/>
        <Education />
      </div>
    </>
  )
}

export default App