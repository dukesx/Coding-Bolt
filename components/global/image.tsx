/* eslint-disable @next/next/no-img-element */
import { BlurhashCanvas, Blurhash } from "react-blurhash";
import { ImageProps } from "types/defaults";
// import { Image } from "react-image-and-background-image-fade";
import Image from "next/image";

const Imager: React.FC<ImageProps> = ({
  name,
  alt,
  className,
  hash,
  height,
  width,
  style,
}) => {
  return (
    <Image
      // transitionTime="1s"
      className={
        className
          ? className + " object-cover max-w-[600px]"
          : "object-cover max-w-[600px]"
      }
      // lazyLoad
      // src={
      //   `https://${process.env.NEXT_PUBLIC_IMAGE_CDN_PATH}/tr:n-` +
      //   width +
      //   "x" +
      //   "/" +
      //   name
      // }
      // width={width ? width + "px" : "400px"}
      // height={height ? height + "px" : "250px"}
      // style={style ? style : null}
      // renderLoader={({ hasLoaded, hasFailed }) => (
      //   <BlurhashCanvas
      //     hash={hash ? hash : "UUE{U]Im0f^+~WI:Io%2xVW@ngRkWUWYnhWr"}
      //     width={width ? width : 400}
      //     height={height ? height : 250}
      //     punch={1}
      //   />
      // )}
      alt={alt ? alt : "An Image"}
      placeholder="blur"
      // priority
      blurDataURL={hash ? hash : "UUE{U]Im0f^+~WI:Io%2xVW@ngRkWUWYnhWr"}
      src={
        // `https://${process.env.NEXT_PUBLIC_IMAGE_CDN_PATH}/tr:n-` +
        // width +
        // "x" +
        // "/" +
        name
      }
      width={width ? width : 400}
      height={height ? height : 250}
      // priority
      loader={({ src, width, quality }) => {
        return `https://${
          process.env.NEXT_PUBLIC_IMAGE_CDN_PATH
        }/tr:w-${width},h-${height},q-${quality || 75}/${src}`;
      }}
    />
  );
};

export default Imager;
