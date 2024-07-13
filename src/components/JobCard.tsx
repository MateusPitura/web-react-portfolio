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
                <div className='my-5 text-[32px] text-[#969080] min-w-[75px]'>{yearFrom}</div>
            </div>
            <div className='min-w-[20px] flex justify-center'>
                <div className='bg-[#fff9ee] min-heigth-[100px] w-[4px]'>
                </div>
            </div>
            <div className="m-2 my-20 space-y-3">
                <div className='flex items-start' >
                    <span className='text-[32px] text-[#dbc66e]'>{company}</span>
                </div>
                <div className='flex items-start'>
                    <span className='text-[16px] text-[#e8e2d4]'>{position}</span>
                </div>
                <div className='flex flex-wrap text-left bg-[#fff9ee] p-4 rounded-lg space-y-1'>
                    {
                        activities.map((item, index) => (
                            <span key={index} className='text-[#1e1b13] text-[14px]'>{item}</span>
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