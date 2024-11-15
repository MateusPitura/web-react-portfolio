import { ReactNode } from "react";
import Badges from "./Badges";
import { Badge } from "../types/Badge";

interface EducationCardProperties {
  school: string;
  fromTo: string;
  course: string | ReactNode;
  activities?: string[];
  isLarge?: boolean;
  badges?: Badge[];
}

function EducationCard({
  activities,
  course,
  fromTo,
  school,
  isLarge,
  badges,
}: EducationCardProperties) {
  return isLarge ? (
    <div className="flex w-full mx-2 min-h-[25rem] justify-center">
      <div className="bg-secondary-light max-w-[37.5rem] min-w-72 my-10 rounded-lg shadow-md">
        <div className="p-5 space-y-5">
          <div className="flex w-full">
            <span className="flex flex-1 justify-start text-[1.5rem] text-outline-light">
              {school}
            </span>
            <span className="flex flex-1 justify-end text-[1.5rem] text-outline-light">
              {fromTo}
            </span>
          </div>
          <div>
            <span className="flex flex-1 justify-center text-[1.75rem] text-onSecondary-light">
              {course}
            </span>
          </div>
          <div className="flex flex-wrap space-y-2 text-start">
            {activities?.map((item, index) => (
              <span key={index} className="text-[1rem] text-onSecondary-light">
                {item}
              </span>
            ))}
            <Badges badges={badges} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex min-h-[12.5rem] justify-center">
      <div className="bg-secondary-light w-[18.75rem] m-2 rounded-lg shadow-sm">
        <div className="p-3 space-y-5">
          <div className="flex w-full">
            <span className="flex flex-1 justify-start text-[1rem] text-outline-light">
              {school}
            </span>
            <span className="flex flex-1 justify-end text-[1rem] text-outline-light">
              {fromTo}
            </span>
          </div>
          <div>
            <span className="flex flex-1 justify-center text-[1.5rem] text-onSecondary-light min-h-[4.6875rem]">
              {course}
            </span>
          </div>
          <div className="flex flex-wrap space-y-2 text-start">
            {activities?.map((item, index) => (
              <span
                key={index}
                className="text-[0.875rem] text-onSecondary-light"
              >
                {item}
              </span>
            ))}
            <Badges badges={badges} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
