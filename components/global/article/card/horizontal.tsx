import { Card, Text, CardSection, CardProps, Group } from "@mantine/core";
import Image from "../../image";
import { ArticleCardProps } from "types/defaults";

const HorizontalArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  cover: { hash, height, width, alt, name, preload },
}) => {
  return (
    <Card className="max-w-full bg-transparent mb-6 pl-8 xs:pl-2 xxs:pl-2 py-2">
      <Group>
        <Image
          hash={hash}
          width={width}
          name={name}
          height={height}
          alt={alt}
        />
        <Group
          className="ml-4 max-w-[600px] xxs:max-w-[240px] sm:max-w-[70%] xs:max-w-[290px] lg:max-w-[70%] md:max-w-[70%] xl:max-w-[80%] xxl:max-w-[80%]"
          direction="column"
        >
          <Text lineClamp={2} className="mt-4 mb-2 font-semibold">
            {title}
          </Text>
          <Text>{description}</Text>
        </Group>
      </Group>
    </Card>
  );
};

export default HorizontalArticleCard;
