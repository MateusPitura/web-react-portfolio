import Badges from "./Badges";
import { Badge } from "../types/Badge";

interface JobCardProperties {
  company: string;
  position: string;
  activities: string[];
  badges: Badge[];
}

function JobCard({ company, position, activities, badges }: JobCardProperties) {
  return (
    <div className="sm:max-w-[28.125rem] m-2 sm:my-20 space-y-3">
      <div className="flex items-start">
        <span className="text-[2rem] text-surface-light font-customUbuntu">
          {company}
        </span>
      </div>
      <div className="flex items-start">
        <span className="text-[1rem] text-surface-light">{position}</span>
      </div>
      <div className="flex flex-wrap text-left bg-surface-light dark:bg-surface-dark p-4 rounded-lg space-y-1">
        {activities.map((item, index) => (
          <span
            key={index}
            className="text-onSurface-light dark:text-onSurface-dark text-[0.875rem]"
          >
            {item}
          </span>
        ))}
        <Badges badges={badges} />
      </div>
    </div>
  );
}

export default JobCard;
