import './App.css'
import PhotoPerfilMe from './assets/images/photo-perfil-me.jpg'

function App() {
  return (
    <>
      <div className='flex w-full items-center'>
        <div className='flex-1 p-5'>
          <img src={PhotoPerfilMe} className='max-h-[650px] rounded-lg'/>
        </div>
        <div className='flex-1 p-5 max-w-[400px]'>
          <div>OLÁ.</div>
          <div>Mateus</div>
          <div>Pitura</div>
          <div>Eu sou apaixado em resolver problemas e criar soluções usando meu conhecimento em engenharia de software</div>
          <div>Nos últimos anos, venho desenvolvendo programas para web e para dispositivos móveis, além de atuar na elaboração do backend e na base de dados</div>
        </div>
      </div>
    </>
  )
}

export default App
