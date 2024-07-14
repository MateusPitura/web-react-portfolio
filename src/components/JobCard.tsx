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
        <div className='flex max-w-[450px]'>
            <div className="p-4">
                <div className='my-5 text-[32px] text-outline-light min-w-[75px]'>{yearFrom}</div>
            </div>
            <div className='min-w-[20px] flex justify-center'>
                <div className='bg-surface-light min-heigth-[100px] w-[4px]'>
                </div>
            </div>
            <div className="m-2 my-20 space-y-3">
                <div className='flex items-start' >
                    <span className='text-[32px] text-primary-light font-bold '>{company}</span>
                </div>
                <div className='flex items-start'>
                    <span className='text-[16px] text-surface-light'>{position}</span>
                </div>
                <div className='flex flex-wrap text-left bg-surface-light p-4 rounded-lg space-y-1'>
                    {
                        activities.map((item, index) => (
                            <span key={index} className='text-onSurface-light text-[14px]'>{item}</span>
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