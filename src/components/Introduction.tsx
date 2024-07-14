import PhotoPerfilMe from '../assets/images/photo-perfil-me.jpg'

function Introduction() {
    return (
        <div className='flex flex-wrap p-5 pb-20 justify-center w-full'>
            <div className='flex-1 p-2 max-w-[500px] min-w-[300px]'>
                <div className='border-primary-light border-2 max-w-[100px] relative right-5 top-5'></div>
                <img src={PhotoPerfilMe} className='max-w-full rounded-lg shadow-sm' />
            </div>
            <div className='flex-1 p-2 justify-start text-left max-w-[500px] min-w-[300px]'>
                <span className='text-[45px] text-primary-light'>Full Stack.</span>
                <div className='mb-10 relative right-0 md:right-16'>
                    <div className='mb-2'>
                        <span className='p-2 bg-secondary-light tracking-widest text-[57px] text-surface-light shadow-lg'>MATEUS</span>
                    </div>
                    <div className='mt-2'>
                        <span className='p-2 bg-secondary-light tracking-widest text-[57px] text-surface-light shadow-lg'>PITURA</span>
                    </div>
                </div>
                <div>
                    <div className='mb-2'>
                        <span className='text-onSurface-light text-[16px]'>Eu sou apaixado em criar soluções e resolver problemas de forma eficiente usando meu conhecimento em Engenharia de Software</span>
                    </div>
                    <div className='mt-2'>
                        <span className='text-onSurface-light text-[16px]'>Nos últimos anos, venho desenvolvendo programas para <strong>web</strong> e para <strong>dispositivos móveis</strong>, além de atuar na elaboração do back-end, do banco de dados e da infraestrutura</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction