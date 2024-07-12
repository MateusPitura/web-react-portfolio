import './App.css'
import Introduction from './components/Introduction'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <div className='flex flex-wrap pt-20'>
        <Introduction />
        <Contact />
        <Experience/>
      </div>
    </>
  )
}

export default App
