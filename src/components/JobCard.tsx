import React, { Suspense, useEffect } from "react";
import { Badge } from "../types/Badge";
import BadgeLoading from "./BadgeLoading";
import AOS from "aos";
import "aos/dist/aos.css";

interface JobCardProperties {
  company: string;
  position: string;
  activities: string[];
  badges: Badge[];
}

const BadgeLazy = React.lazy(() => import("./Badges"));

function JobCard({ company, position, activities, badges }: JobCardProperties) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="sm:max-w-[28.125rem] m-2 sm:my-20 space-y-3"
      data-aos="fade-up"
    >
      <div className="flex items-start">
        <span className="text-[2rem] text-surface-light font-bold tracking-wide">
          {company}
        </span>
      </div>
      <div className="flex items-start">
        <span className="text-[1rem] font-semibold text-primary-light tracking-wide">{position}</span>
      </div>
      <div className="flex flex-wrap text-left bg-surface-light dark:bg-surface-dark p-4 rounded-lg space-y-1">
        {activities.map((item, index) => (
          <span
            key={index}
            className="text-onSurface-light dark:text-onSurface-dark text-[1rem]"
          >
            {item}
          </span>
        ))}
        <div className="w-full pt-5 flex flex-wrap gap-1">
          <Suspense fallback={<BadgeLoading />}>
            {badges?.map((badge) => (
              <BadgeLazy badge={badge} key={badge.id} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
