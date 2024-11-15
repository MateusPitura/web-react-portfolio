interface ImageProperties {
  imgSmall?: string;
  imgLarge?: string;
  alt: string;
  width: number;
  height: number;
  lazy?: boolean;
}

export default function Image({
  imgSmall,
  imgLarge,
  alt,
  width,
  height,
  lazy = false,
}: ImageProperties) {
  return imgSmall ? (
    <picture>
      <source srcSet={imgLarge} media="(min-width: 425px)" />
      <img
        src={imgSmall}
        alt={alt}
        className="flex rounded-lg shadow-md"
        height={height}
        width={width}
        loading={lazy ? "lazy" : undefined}
      />
    </picture>
  ) : (
    <img
      src={imgLarge}
      alt={alt}
      className="flex rounded-lg shadow-md"
      height={height}
      width={width}
      loading={lazy ? "lazy" : undefined}
    />
  );
}
