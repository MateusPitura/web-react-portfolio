import SocialGithubLogo from '../assets/images/social-github-logo.png'
import SocialLinkedinLogo from '../assets/images/social-linkedin-logo.png'

export default function Contact() {
    return (
        <div className='p-10 flex bg-[#EEE2BC] w-full h-[250px] justify-center flex-wrap' >
            <div className='flex-1 min-w-full'>
                <span className='text-[#211B04] text-[16px]'>Meu trabalho por ser encontrado em...</span>
            </div>
            <div className='flex flex-1 min-w-full items-center justify-center gap-x-10'>
                <div className='p-2 flex items-center justify-center max-w-[200px] hover:opacity-50'>
                    <a href="https://github.com/MateusPitura" target='_blank'>
                        <img src={SocialGithubLogo} />
                    </a>
                </div>
                <div className='p-2 flex items-center justify-center max-w-[200px] hover:opacity-50'>
                    <a href="https://www.linkedin.com/in/mateuspitura" target='_blank'>
                        <img src={SocialLinkedinLogo} />
                    </a>
                </div>
            </div>
        </div>
    )
}