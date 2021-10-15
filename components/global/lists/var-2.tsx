import { Card, Text, Avatar, Divider } from "@mantine/core";
import { CB_ListProps } from "types/global/lists";
import Image2 from "../image";

const ListVar2: React.FC<CB_ListProps> = ({
  title,
  description,
  image: { name },
  footer,
  header,
}) => {
  return (
    <Card className="w-full bg-transparent mt-2 xs:mt-0 xxs:mt-0 sm:mt-0">
      <div className="flex">
        <div className="mr-4 min-w-[80px] max-w-[80px] xs:min-w-[60px] xxs:min-w-[60px]">
          <Image2
            height={120}
            width={120}
            alt="something"
            name={name}
            className="rounded-md"
            hash=""
          />
        </div>
        <div className="max-w-[80%]">
          {header}
          <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm md:text-sm">
            {title}
          </Text>
          <Text className="text-sm clamp-1 mt-2 xs:text-xs xs:hidden xxs:hidden">
            {description}
          </Text>
          {footer}
        </div>
      </div>
    </Card>
  );
};
export default ListVar2;
