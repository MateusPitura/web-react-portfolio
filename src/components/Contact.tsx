import SocialGithub from "../assets/images/social-github.svg";
import SocialLinkedin from "../assets/images/social-linkedin.svg";
import Image from "./Image";

export default function Contact() {
  return (
    <section className="p-10 flex bg-secondary-light w-full min-h-[15.625rem] justify-center flex-wrap">
      <div className="flex flex-1 flex-wrap max-w-[40rem] items-center justify-center gap-10">
        <div className="flex-1 p-2 flex items-center justify-center min-w-60 w-fit">
          <a
            className=" hover:opacity-50"
            href="https://github.com/MateusPitura"
            target="_blank"
            aria-label="Link to Github"
          >
            <Image
              src={SocialGithub}
              alt="GitHub logo"
              width={234}
              aspectRatio="416/95"
              className="!shadow-none !rounded-none"
            />
          </a>
        </div>
        <div className="flex-1 p-2 flex items-center justify-center min-w-60 w-fit">
          <a
            className=" hover:opacity-50"
            href="https://www.linkedin.com/in/mateuspitura"
            target="_blank"
            aria-label="Link to Linkedin"
          >
            <Image
              src={SocialLinkedin}
              alt="Linkedin logo"
              width={234}
              aspectRatio="78/19"
              className="!shadow-none !rounded-none"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
