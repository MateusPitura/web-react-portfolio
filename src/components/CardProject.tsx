import Badges from "./Badges";
import { Badge } from "../types/Badge";

interface CardProjectProperties {
    title: string;
    releaseYear: number;
    description: string;
    link: string;
    image: string;
    badges: Badge[];
}

function CardProject({ description, image, link, releaseYear, title, badges }: CardProjectProperties) {
    return (
        <div className="flex justify-center">
            <div className='flex bg-[#FFF9EE] w-[900px] rounded-lg justify-center shadow-lg'>
                <a className='hover:opacity-50 font-normal p-5' href={link} target='_blank'>
                    <div>
                        <div className='w-full'>
                            <img className='rounded-lg' src={image} />
                        </div>
                        <div className='flex p-2 mt-2'>
                            <div className='flex-1 flex justify-start'>
                                <span className='text-[24px] text-[#1e1b13]'>{title}</span>
                            </div>
                            <div className='flex-1 flex justify-end'>
                                <span className='text-[24px] text-[#7c7767]'>{releaseYear}</span>
                            </div>
                        </div>
                        <div className='flex text-left p-2'>
                            <span className='text-[#1e1b13] text-[16px]'>
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