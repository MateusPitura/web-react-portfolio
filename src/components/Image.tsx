interface ImageProperties {
  imgSmall?: string;
  imgLarge?: string;
  alt: string;
  width: number;
  height: number;
}

export default function Image({
  imgSmall,
  imgLarge,
  alt,
  width,
  height,
}: ImageProperties) {
  return (
    <picture>
      <source srcSet={imgLarge} media="(min-width: 425px)" />
      <img
        src={imgSmall}
        alt={alt}
        className="flex rounded-lg shadow-md"
        height={height}
        width={width}
      />
    </picture>
  );
}
