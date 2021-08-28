/* eslint-disable @next/next/no-img-element */
import ProgressiveImage from "react-progressive-graceful-image";
// import { Loader, Center } from "@mantine/core";
import { BlurhashCanvas } from "react-blurhash";
import LazyLoad from "react-lazyload";
import { ImageProps } from "types/defaults";

const Image: React.FC<ImageProps> = ({
  name,
  selfLoader,
  alt,
  className,
  height,
  width,
  style,
}) => {
  return (
    <LazyLoad
      offset={-100}
      unmountIfInvisible
      placeholder={
        <div className="dark:bg-[#111111] bg-[#f4f4f4] h-[250px]"></div>
      }
    >
      <ProgressiveImage
        src={`${process.env.IMAGE_CDN_PATH}/tr:n-` + width + "x" + "/" + name}
        placeholder={
          selfLoader
            ? null
            : `${process.env.IMAGE_CDN_PATH}/tr:n-placeholder/` + name
        }
      >
        {(src, loading) =>
          selfLoader ? (
            loading ? (
              <BlurhashCanvas
                hash="LQE2Xd?HxvkX~V?G%Mo#Oaxu-oxt"
                width={400}
                height={250}
                punch={1}
              />
            ) : (
              <img
                className={className ? className : null}
                style={style ? style : {}}
                alt={alt ? alt : "An Image"}
                src={src}
                width={width ? width : 400}
                height={height ? height : "auto"}
              />
            )
          ) : (
            <img
              className={className ? className : null}
              style={style ? style : {}}
              alt={alt ? alt : "An Image"}
              src={src}
              width={width ? width : 400}
              height={height ? height : "auto"}
            />
          )
        }
      </ProgressiveImage>
    </LazyLoad>
  );
};

export default Image;
