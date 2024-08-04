import PhotoPerfilLarge from '../assets/images/photo-perfil-large.webp'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css';

function Introduction() {
    const { t } = useTranslation();

    return (
        <section className='flex flex-wrap px-5 pb-20 justify-center w-full'>
            <div className='flex-1 p-2 max-w-[31.25rem] sm:min-w-[25rem] min-w-[18.75rem]'>
                <div className='border-primary-light border-2 max-w-[6.25rem] relative right-5 top-5 z-10'></div>
                <div className='max-w-[450px] max-h-[600px]'>
                    <LazyLoadImage
                        src={PhotoPerfilLarge}
                        alt="Perfil picture"
                        className='flex rounded-lg shadow-m'
                        width={450} height={600}
                        effect='opacity'
                        // fetchPriority='high'
                    />
                </div>
            </div>
            <div className='flex-1 p-2 justify-start text-left max-w-[31.25rem] min-w-[18.75rem]'>
                <span className='text-[2.8125rem] text-primary-light'>Full Stack.</span>
                <div className='mb-10 relative right-0 md:right-16'>
                    <div className='mb-2'>
                        <span className='p-2 bg-secondary-light tracking-widest text-[3.5625rem] text-surface-light shadow-lg'>MATEUS</span>
                    </div>
                    <div className='mt-2'>
                        <span className='p-2 bg-secondary-light tracking-widest text-[3.5625rem] text-surface-light shadow-lg'>PITURA</span>
                    </div>
                </div>
                <div>
                    <div className='mb-2'>
                        <span className='text-onSurface-light dark:text-surface-light text-[1rem]'>
                            {t('INTRODUCTION.P1')}
                        </span>
                    </div>
                    <div className='mt-2'>
                        <span className='text-onSurface-light dark:text-surface-light text-[1rem]'>
                            {t('INTRODUCTION.P2')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction