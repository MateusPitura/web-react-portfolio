import { Badge } from "../types/Badge";
import Badges from "./Badges";
import Image from "./Image";

interface CardProjectProperties {
  title: string;
  releaseYear: number;
  description: string;
  link: string;
  imageLarge?: string;
  imageSmall?: string;
  badges: Badge[];
}

function CardProject({
  description,
  imageLarge,
  imageSmall,
  link,
  releaseYear,
  title,
  badges,
}: CardProjectProperties) {
  return (
    <div className="flex justify-center">
      <div className="flex bg-surface-light dark:bg-surface-dark w-[56.25rem] rounded-lg justify-center shadow-lg mx-2">
        <a className="hover:opacity-50 p-3 sm:p-5" href={link} target="_blank">
          <div>
            <div className="w-full">
              {imageLarge && (
                <Image
                  imgSmall={imageSmall}
                  src={imageLarge}
                  alt={`Photo ${title} Project`}
                  width={860}
                  aspectRatio="2/1"
                  loading="lazy"
                  className="!shadow-none"
                />
              )}
            </div>
            <div className="block sm:flex p-2 mt-2">
              <div className="flex-2 flex justify-start">
                <span className="text-[1.5rem] text-onSurface-light dark:text-onSurface-dark">
                  {title}
                </span>
              </div>
              <div className="flex-1 flex sm:justify-end">
                <span className="text-[1.5rem] text-outline-light">
                  {releaseYear}
                </span>
              </div>
            </div>
            <div className="flex text-left p-2">
              <span className="text-onSurface-light dark:text-onSurface-dark text-[1rem]">
                {description}
              </span>
            </div>
            <div className="w-full pt-5 flex flex-wrap gap-1">
              {badges?.map((badge) => (
                <Badges badge={badge} key={badge.id} />
              ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CardProject;
