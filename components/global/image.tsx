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
  avatar,
  preload,
  style,
}) => {
  return (
    <Image
      className={
        (className || null) +
        " max-w-[600px] transition-all ease-in-out duration-1000"
      }
      alt={alt || "An Image"}
      placeholder="blur"
      objectFit="cover"
      lazyBoundary="0px"
      priority={preload || false}
      blurDataURL={hash || "UUE{U]Im0f^+~WI:Io%2xVW@ngRkWUWYnhWr"}
      src={name}
      width={width || 400}
      height={height || 250}
      loader={({ src, width, quality }) => {
        return `https://${
          process.env.NEXT_PUBLIC_IMAGE_CDN_PATH
        }/tr:w-${width},h-${height},q-${quality || 75},${
          avatar ? ",fo-auto" : ""
        }/${src}`;
      }}
    />
  );
};

export default Imager;
