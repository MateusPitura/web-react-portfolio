import cn from "classnames";

interface ImageLoadingProperties {
  className?: string;
}

export default function ImageLoading({ className }: ImageLoadingProperties) {
  return (
    <div
      className={cn(
        "animate-pulse bg-slate-300 rounded-lg shadow-md",
        className
      )}
    />
  );
}
