import './App.css'
import PhotoPerfilMe from './assets/images/photo-perfil-me.jpg'

function App() {
  return (
    <>
      <div className='flex w-full flex-wrap justify-center '>
        <div className='flex-1 p-2 max-w-[500px] min-w-[300px]'>
          <img src={PhotoPerfilMe} className='max-w-full rounded-lg' />
        </div>
        <div className='flex-1 p-5 justify-start text-left max-w-[500px] min-w-[300px]'>
          <span className='text-[45px] text-[#FF5449]'>OLÁ.</span>
          <div className='mb-10 relative right-0 md:right-16'>
            <div className='mb-2'>
              <span className='p-2 bg-[#15130B] text-[57px] text-[#E8E2D4]'>MATEUS</span>
            </div>
            <div className='mt-2'>
              <span className='p-2 bg-[#15130B] text-[57px] text-[#E8E2D4]'>PITURA</span>
            </div>
          </div>
          <div>
            <div className='mb-2'>
              <span className='text-[#1E1B13]'>Eu sou apaixado em resolver problemas e criar soluções usando meu conhecimento em Engenharia de Software</span>
            </div>
            <div className='mt-2'>
              <span className='text-[#1E1B13]'>Nos últimos anos, venho desenvolvendo programas para web e para dispositivos móveis, além de atuar na elaboração de backend e com banco de dados</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
