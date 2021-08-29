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
      className={className ? className + " object-cover" : "object-cover"}
      transitionTime="4s"
      lazyLoad
      src={
        `https://${process.env.NEXT_PUBLIC_IMAGE_CDN_PATH}/tr:n-` +
        width +
        "x" +
        "/" +
        name
      }
      width={width ? width : 400}
      height={height ? height : 250}
      style={style ? style : null}
      renderLoader={({ hasLoaded, hasFailed }) => (
        <BlurhashCanvas
          className="transition-all ease-in-out duration-500"
          hash="UVKAf.?vbbs9~p-pM{RjI;NGjFt7aKs9ofS5"
          width={400}
          height={250}
          punch={1}
        />
      )}
      alt={alt ? alt : "An Image"}
    />
  );
};

export default Imager;
