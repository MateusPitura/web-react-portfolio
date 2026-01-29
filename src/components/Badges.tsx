import { useState } from "react";
import { Badge } from "../types/Badge";
import classNames from "classnames";

interface BadgesProperties {
  badge: Badge;
}

function Badges({ badge }: BadgesProperties) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={classNames("relative h-[1.75rem]", loaded || "w-20")}>
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-600 animate-pulse rounded-md" />
      )}
      <img
        id={badge.reference}
        src={badge.imageUrl}
        alt={`Stack ${badge.reference}`}
        className={classNames(
          "rounded-md shadow-md w-full h-full object-cover transition-opacity duration-500",
          {
            "opacity-0": !loaded,
            "opacity-100": loaded,
          },
        )}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default Badges;
