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
  withPlaceholder?: boolean;
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
  withPlaceholder,
}) => {
  return (
    <ProgressiveImage
      src={"https://ik.imagekit.io/codingbolt/tr:n-" + width + "x" + "/" + path}
      placeholder={
        selfLoader
          ? null
          : "https://ik.imagekit.io/codingbolt/tr:n-placeholder/" + path
      }
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
