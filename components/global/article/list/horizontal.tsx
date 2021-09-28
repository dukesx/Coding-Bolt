import { Card, Text, CardSection, CardProps, Group } from "@mantine/core";
import Image from "../../image";
import { ArticleCardProps } from "types/defaults";
import Link from "next/link";

const HorizontalArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  cover,
}) => {
  return (
    <Card
      className={
        (cover ? "mb-6 " : "mb-3 ") +
        "max-w-full bg-transparent pl-8 xs:pl-2 xxs:pl-2 py-2"
      }
    >
      <Group>
        {cover ? (
          <Image
            hash={cover.hash}
            width={cover.width}
            name={cover.name}
            height={cover.height}
            alt={cover.alt}
          />
        ) : null}

        <Group
          className="ml-4 block xxs:max-w-[70%] xs:max-w-[70%] max-w-[80%]"
          direction="column"
        >
          <Link passHref href={`/article/${title.replace(/ /g, "-")}`}>
            <Text
              component="a"
              lineClamp={2}
              className="my-1 font-medium focus:shadow-none block clamp-2"
            >
              {title}
            </Text>
          </Link>
          <Text className="clamp-2">{description ? description : null}</Text>
        </Group>
      </Group>
    </Card>
  );
};

export default HorizontalArticleCard;
