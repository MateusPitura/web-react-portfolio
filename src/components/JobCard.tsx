import Badges from "./Badges";
import { Badge } from "../types/Badge";

interface JobCardProperties {
    company: string;
    position: string;
    activities: string[];
    yearFrom: number;
    badges: Badge[];
}

function JobCard({ company, position, activities, yearFrom, badges }: JobCardProperties) {
    return (
        <div className='flex max-w-[28.125rem]'>
            <div className="p-4">
                <div className='my-5 text-[2rem] text-outline-light min-w-[4.6875rem]'>{yearFrom}</div>
            </div>
            <div className='min-w-[1.25rem] flex justify-center'>
                <div className='bg-surface-light dark:bg-surface-dark min-heigth-[6.25rem] w-[0.25rem]'>
                </div>
            </div>
            <div className="m-2 my-20 space-y-3">
                <div className='flex items-start' >
                    <span className='text-[2rem] text-surface-light font-customUbuntu'>{company}</span>
                </div>
                <div className='flex items-start'>
                    <span className='text-[1rem] text-surface-light'>{position}</span>
                </div>
                <div className='flex flex-wrap text-left bg-surface-light dark:bg-surface-dark p-4 rounded-lg space-y-1'>
                    {
                        activities.map((item, index) => (
                            <span key={index} className='text-onSurface-light dark:text-onSurface-dark text-[0.875rem]'>{item}</span>
                        ))
                    }
                    <Badges
                        badges={badges}
                    />
                </div>
            </div>
        </div>
    )
}

export default JobCard;