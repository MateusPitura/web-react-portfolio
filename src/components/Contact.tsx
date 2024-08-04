import SocialGithubLogo from '../assets/images/social-github-small.webp'
import SocialLinkedinLogo from '../assets/images/social-linkedin-small.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function Contact() {
    return (
        <section className='p-10 flex bg-secondary-light w-full min-h-[15.625rem] justify-center flex-wrap' >
            <div className='flex flex-1 flex-wrap min-w-full items-center justify-center gap-10'>
                <div className='flex-1 p-2 flex items-center justify-center max-w-[15.625rem] min-w-[10rem]'>
                    <a className=" hover:opacity-50" href="https://github.com/MateusPitura" target='_blank' aria-label="Link to Github">
                        <LazyLoadImage
                            src={SocialGithubLogo} alt="Github logo" width={234} height={78}
                            effect='opacity'
                        />
                    </a>
                </div>
                <div className='flex-1 p-2 flex items-center justify-center max-w-[15.625rem] min-w-[10rem]'>
                    <a className=" hover:opacity-50" href="https://www.linkedin.com/in/mateuspitura" target='_blank' aria-label="Link to Linkedin">
                        <LazyLoadImage
                            src={SocialLinkedinLogo} alt="Linkedin logo" width={234} height={78}
                            effect='opacity'
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}