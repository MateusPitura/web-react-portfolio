import SocialGithubLogo from '../assets/images/social-github-small.webp'
import SocialLinkedinLogo from '../assets/images/social-linkedin-small.webp'

export default function Contact() {
    return (
        <section className='p-10 flex bg-secondary-light w-full min-h-[15.625rem] justify-center flex-wrap' >
            <div className='flex flex-1 flex-wrap max-w-[40rem] items-center justify-center gap-10'>
                <div className='flex-1 p-2 flex items-center justify-center min-w-60 w-fit'>
                    <a className=" hover:opacity-50" href="https://github.com/MateusPitura" target='_blank' aria-label="Link to Github">
                        <img
                            src={SocialGithubLogo} alt="Github logo" width={234} height={78} loading='lazy'
                        />
                    </a>
                </div>
                <div className='flex-1 p-2 flex items-center justify-center min-w-60 w-fit'>
                    <a className=" hover:opacity-50" href="https://www.linkedin.com/in/mateuspitura" target='_blank' aria-label="Link to Linkedin">
                        <img
                            src={SocialLinkedinLogo} alt="Linkedin logo" width={234} height={78} loading='lazy'
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}