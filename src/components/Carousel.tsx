import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import classNames from "classnames";
import { ReactNode } from "react";
import { useGlobalStore } from "../store/globalStore";

interface CarouselProperties {
  items: ReactNode[];
}

export default function Carousel({ items }: CarouselProperties) {
  const { carouselIndex, setCarouselIndex } = useGlobalStore();

  const before = () => {
    setCarouselIndex(
      carouselIndex === 0 ? items.length - 1 : carouselIndex - 1,
    );
  };

  const next = () => {
    setCarouselIndex(
      carouselIndex === items.length - 1 ? 0 : carouselIndex + 1,
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <button
          onClick={before}
          className="text-onPrimary-light hover:opacity-50 h-fit p-1 hidden sm:block"
        >
          <NavigateBeforeIcon color="inherit" />
        </button>

        <div className="relative w-full overflow-hidden m-4">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
          >
            {items.map((item, i) => (
              <div key={i} className="w-full shrink-0">
                {item}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={next}
          className="text-onPrimary-light hover:opacity-50 h-fit p-1 hidden sm:block"
        >
          <NavigateNextIcon color="inherit" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <div
            onClick={() => {
              setCarouselIndex(i);
            }}
            key={i}
            className="p-1 cursor-pointer"
          >
            <div
              className={classNames(
                "bg-onPrimary-light h-1.5 w-1.5 rounded-full opacity-50",
                {
                  "!opacity-100": i === carouselIndex,
                },
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
