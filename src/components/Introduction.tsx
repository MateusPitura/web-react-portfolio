import PhotoPerfilMe from '../assets/images/photo-perfil-me.jpg'

function Introduction() {
    return (
        <div className='flex flex-wrap p-5 pb-20 justify-center w-full'>
            <div className='flex-1 p-2 max-w-[500px] min-w-[300px]'>
                <div className='border-[#FF5449] border-2 max-w-[100px] relative right-5 top-5'></div>
                <img src={PhotoPerfilMe} className='max-w-full rounded-lg shadow-sm' />
            </div>
            <div className='flex-1 p-2 justify-start text-left max-w-[500px] min-w-[300px]'>
                <span className='text-[45px] text-[#FF5449]'>Full Stack.</span>
                <div className='mb-10 relative right-0 md:right-16'>
                    <div className='mb-2'>
                        <span className='p-2 bg-[#15130B] tracking-widest text-[57px] text-[#E8E2D4] shadow-lg'>MATEUS</span>
                    </div>
                    <div className='mt-2'>
                        <span className='p-2 bg-[#15130B] tracking-widest text-[57px] text-[#E8E2D4] shadow-lg'>PITURA</span>
                    </div>
                </div>
                <div>
                    <div className='mb-2'>
                        <span className='text-[#1E1B13] text-[16px]'>Eu sou apaixado em criar soluções e resolver problemas de forma eficiente usando meu conhecimento em Engenharia de Software</span>
                    </div>
                    <div className='mt-2'>
                        <span className='text-[#1E1B13] text-[16px]'>Nos últimos anos, venho desenvolvendo programas para <strong>web</strong> e para <strong>dispositivos móveis</strong>, além de atuar na elaboração do back-end, do banco de dados e da infraestrutura</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction