import SocialGithubLogo from '../assets/images/social-github-logo.png'
import SocialLinkedinLogo from '../assets/images/social-linkedin-logo.png'

export default function Contact() {
    return (
        <div className='p-10 flex bg-secondary-light w-full min-h-[15.625rem] justify-center flex-wrap' >
            <div className='flex flex-1 flex-wrap min-w-full items-center justify-center gap-10'>
                <div className='flex-1 p-2 flex items-center justify-center max-w-[15.625rem] min-w-[10rem] hover:opacity-50'>
                    <a href="https://github.com/MateusPitura" target='_blank'>
                        <img src={SocialGithubLogo} />
                    </a>
                </div>
                <div className='flex-1 p-2 flex items-center justify-center max-w-[15.625rem] min-w-[10rem] hover:opacity-50'>
                    <a href="https://www.linkedin.com/in/mateuspitura" target='_blank'>
                        <img src={SocialLinkedinLogo} />
                    </a>
                </div>
            </div>
        </div>
    )
}