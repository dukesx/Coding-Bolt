/* eslint-disable @next/next/no-img-element */
import { ImageProps } from "types/defaults";
import Image from "next/image";
import { useState } from "react";

const Imager: React.FC<ImageProps> = ({
  name,
  alt,
  className,
  hash,
  height,
  width,
  priority,
  style,
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <Image
      className={
        className
          ? className + " object-cover max-w-[600px]"
          : "object-cover max-w-[600px]"
      }
      alt={alt ? alt : "An Image"}
      placeholder="blur"
      lazyBoundary="0px"
      priority={priority ? true : false}
      blurDataURL={hash ? hash : "UUE{U]Im0f^+~WI:Io%2xVW@ngRkWUWYnhWr"}
      src={name}
      width={width ? width : 400}
      height={height ? height : 250}
      loader={({ src, width, quality }) => {
        return `https://${
          process.env.NEXT_PUBLIC_IMAGE_CDN_PATH
        }/tr:w-${width},h-${height},q-${quality || 75}/${src}`;
      }}
      onLoad={() => {
        setLoading(false);
        console.log(loading);
      }}
    />
  );
};

export default Imager;
