import Badges from "./Badges";
import { Badge } from "../types/Badge";

interface CardProjectProperties {
    title: string;
    releaseYear: number;
    description: string;
    link: string;
    image?: string;
    badges: Badge[];
}

function CardProject({ description, image, link, releaseYear, title, badges }: CardProjectProperties) {
    return (
        <div className="flex justify-center">
            <div className='flex bg-surface-light dark:bg-surface-dark w-[56.25rem] rounded-lg justify-center shadow-lg mx-2'>
                <a className='hover:opacity-50 p-5' href={link} target='_blank'>
                    <div>
                        <div className='w-full'>
                            {image &&
                                <img className='rounded-lg' src={image} alt={`Project ${title}`} width={860} height={430} />
                            }
                        </div>
                        <div className='flex p-2 mt-2'>
                            <div className='flex-1 flex justify-start'>
                                <span className='text-[1.5rem] text-onSurface-light dark:text-onSurface-dark'>{title}</span>
                            </div>
                            <div className='flex-1 flex justify-end'>
                                <span className='text-[1.5rem] text-outline-light'>{releaseYear}</span>
                            </div>
                        </div>
                        <div className='flex text-left p-2'>
                            <span className='text-onSurface-light dark:text-onSurface-dark text-[1rem]'>
                                {description}
                            </span>
                        </div>
                        <Badges
                            badges={badges}
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CardProject;