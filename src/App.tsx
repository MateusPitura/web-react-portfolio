import './App.css'
import Introduction from './components/Introduction'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className='flex flex-wrap pt-20'>
        <Introduction />
        <Contact />
      </div>
    </>
  )
}

export default App
