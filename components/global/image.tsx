/* eslint-disable @next/next/no-img-element */
import { BlurhashCanvas, Blurhash } from "react-blurhash";
import { ImageProps } from "types/defaults";
import { Image } from "react-image-and-background-image-fade";

const Imager: React.FC<ImageProps> = ({
  name,
  alt,
  className,
  height,
  width,
  style,
}) => {
  return (
    <Image
      transitionTime="3s"
      className={className ? className + " object-cover" : "object-cover"}
      lazyLoad
      src={
        `https://${process.env.NEXT_PUBLIC_IMAGE_CDN_PATH}/tr:n-` +
        width +
        "x" +
        "/" +
        name
      }
      width={width ? width + "px" : 400}
      height={height ? height + "px" : 250}
      style={style ? style : null}
      renderLoader={({ hasLoaded, hasFailed }) =>
        !hasLoaded ? (
          <BlurhashCanvas
            hash="UUE{U]Im0f^+~WI:Io%2xVW@ngRkWUWYnhWr"
            width={400}
            height={250}
            punch={1}
          />
        ) : null
      }
      alt={alt ? alt : "An Image"}
    />
  );
};

export default Imager;
