/* eslint-disable @next/next/no-img-element */
import { ImageProps } from "types/global/defaults";
import Image from "next/image";
import { useState } from "react";

const Imager: React.FC<ImageProps> = ({
  name,
  alt,
  className,
  hash,
  height,
  width,
  cover,
  avatar,
  caption,
  preload,
  fill,
  style,
  crop,
}) => {
  return (
    <div className="flex justify-items-stretch flex-col">
      <Image
        className={
          (className || null) + " transition-all ease-in-out duration-1000"
        }
        alt={alt || "An Image"}
        placeholder="blur"
        objectFit="cover"
        lazyBoundary="0px"
        priority={preload || false}
        blurDataURL={hash || "UUE{U]Im0f^+~WI:Io%2xVW@ngRkWUWYnhWr"}
        src={name}
        layout={fill ? "fill" : "intrinsic"}
        width={width ? width : null}
        height={height ? height : null}
        onDrag={(e) => console.log(e)}
        loader={({ src, width, quality }) => {
          return `https://${
            process.env.NEXT_PUBLIC_IMAGE_CDN_PATH
          }/tr:w-${width},h-${height},q-${quality || 75},${
            avatar ? "fo-auto" : cover ? "fo-center" : ""
          }/${src}`;
        }}
      />
      {caption ? (
        <div className="font-medium text-sm mt-3 text-center italic font-semibold">
          {caption}
        </div>
      ) : null}
    </div>
  );
};

export default Imager;
