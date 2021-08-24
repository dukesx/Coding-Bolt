/* eslint-disable @next/next/no-img-element */
import ProgressiveImage from "react-progressive-graceful-image";
import { Loader, Center } from "@mantine/core";

interface ImageProps {
  path: string;
  placeholder?: string;
  selfLoader?: boolean;
  alt?: string;
  style?: object;
  width?: string | number;
  height?: string | number;
  className?: string;
}
const Image: React.FC<ImageProps> = ({
  path,
  placeholder,
  selfLoader,
  alt,
  className,
  height,
  width,
  style,
}) => {
  return (
    <ProgressiveImage
      src={path}
      placeholder={selfLoader ? null : placeholder ? placeholder : null}
    >
      {(src, loading) =>
        selfLoader ? (
          loading ? (
            <div className="p-6">
              <Center>
                <Loader size="sm" />
              </Center>
            </div>
          ) : (
            <img
              className={className ? className : ""}
              style={style ? style : {}}
              alt={alt ? alt : ""}
              src={src}
              width={width ? width : 400}
              height={height ? height : "auto"}
            />
          )
        ) : (
          <img
            className={className ? className : ""}
            style={style ? style : {}}
            alt={alt ? alt : ""}
            src={src}
            width={width ? width : 400}
            height={height ? height : "auto"}
          />
        )
      }
    </ProgressiveImage>
  );
};

export default Image;
