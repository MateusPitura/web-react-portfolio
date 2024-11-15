import { Badge } from "../types/Badge";

interface BadgesProperties {
  badge: Badge;
}

function Badges({ badge }: BadgesProperties) {
  return (
    <div className="flex justify-center items-center">
      <img
        id={badge.reference}
        className="rounded-lg h-[1.75rem] w-full"
        src={badge.imageUrl}
        alt={`Stack ${badge.reference}`}
      />
    </div>
  );
}

export default Badges;
