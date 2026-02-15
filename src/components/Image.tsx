import classNames from "classnames";
import { useState } from "react";

interface ImageProperties {
  src?: string;
  alt: string;
  width: number;
  aspectRatio: string;
  loading?: "lazy" | "eager";
  className?: string;
}

export default function Image({
  src,
  alt,
  width,
  aspectRatio,
  loading = "lazy",
  className,
}: ImageProperties) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative" style={{ maxWidth: width, aspectRatio }}>
      {!loaded && (
        <div
          className={classNames(
            "absolute inset-0 bg-neutral-200 dark:bg-neutral-600 animate-pulse rounded-md",
            className,
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={classNames(
          "rounded-md shadow-md w-full h-full object-cover transition-opacity duration-500",
          className,
          {
            "opacity-0": !loaded,
            "opacity-100": loaded,
          },
        )}
        width={width}
        loading={loading}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
