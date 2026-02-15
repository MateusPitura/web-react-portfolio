import { useTranslation } from "react-i18next";
import PhotoPerfil450w from "../assets/images/photo-perfil-450w.webp";
import Image from "./Image";

function Introduction() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-wrap px-5 pb-20 justify-center w-full">
      <div className="flex-1 p-2 max-w-[31.25rem] sm:min-w-[25rem] min-w-[18.75rem]">
        <div className="border-primary-light border-2 max-w-[6.25rem] relative right-5 top-5 z-10"></div>
        <Image
          src={PhotoPerfil450w}
          alt="Photo Perfil"
          width={450}
          aspectRatio="3/4"
          loading="eager"
        />
      </div>
      <div className="flex-1 p-2 justify-start text-left max-w-[31.25rem] min-w-[18.75rem]">
        <span className="text-[2.8125rem] text-primary-light">Full Stack.</span>
        <div className="mb-10 relative right-0 md:right-16">
          <div className="mb-2">
            <strong className="p-2 bg-secondary-light tracking-widest text-[3.5625rem] text-surface-light shadow-lg font-medium">
              MATEUS
            </strong>
          </div>
          <div className="mt-2">
            <strong className="p-2 bg-secondary-light tracking-widest text-[3.5625rem] text-surface-light shadow-lg font-medium">
              PITURA
            </strong>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-onSurface-light dark:text-surface-light text-[1rem]">
              {t("INTRODUCTION.P1")}
            </span>
          </div>
          <div>
            <span className="text-onSurface-light dark:text-surface-light text-[1rem]">
              {t("INTRODUCTION.P2")}
            </span>
          </div>
          <div>
            <span className="text-onSurface-light dark:text-surface-light text-[1rem]">
              {t("INTRODUCTION.P3")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
