import { Divider } from "@mui/material";
import React, { ReactNode, RefObject, Suspense } from "react";
import Slider from "react-slick";
import { Badge } from "../types/Badge";
import BadgeLoading from "./BadgeLoading";
import Tooltip from "./Tooltip";

interface CardStackProperties {
  title: string | ReactNode;
  badges?: Badge[];
  sliderRef: RefObject<Slider>;
  isTooltipOpen?: boolean;
  setIsTooltipOpen: (state: boolean) => void;
}

const BadgeLazy = React.lazy(() => import("./Badges"));

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = window.innerHeight / 2 - element.offsetHeight / 2;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    try {
      element.classList.remove("blink");
    } catch (error) {
      return;
    }
    setTimeout(() => {
      element.classList.add("blink");
    }, 1000);
  }
};

function CardStack({
  title,
  badges,
  sliderRef,
  isTooltipOpen,
  setIsTooltipOpen,
}: CardStackProperties) {
  const stacksLastIndex = Number(badges?.length) - 1;

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="flex-1 flex-wrap min-w-[12.5rem] p-2 m-2">
      <div className="pb-5">
        <span className="text-[1.75rem] text-onSurface-light dark:text-onSurface-dark font-customUbuntu">
          {title}
        </span>
      </div>
      <div className="space-y-3">
        {badges?.map((item, index) => (
          <div key={item.id}>
            <div className="flex justify-center flex-wrap pb-2">
              <button
                className="hover:opacity-50"
                name={`Stack ${item.reference}`}
                onClick={() => {
                  setIsTooltipOpen(false);
                  if (typeof item?.sliderIndex === "number") {
                    goToSlide(item.sliderIndex);
                  }
                  scrollToElement(item.reference);
                }}
              >
                <div className="w-full flex flex-wrap gap-1">
                  {index == stacksLastIndex && isTooltipOpen ? (
                    <Tooltip open={isTooltipOpen}>
                      <Suspense fallback={<BadgeLoading key={item.id} />}>
                        <BadgeLazy badge={item} />
                      </Suspense>
                    </Tooltip>
                  ) : (
                    <Suspense fallback={<BadgeLoading key={item.id} />}>
                      <BadgeLazy badge={item} />
                    </Suspense>
                  )}
                </div>
              </button>
            </div>
            {index != stacksLastIndex && (
              <Divider className="bg-surface-light dark:bg-outline-light" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardStack;
