import { Card, Text, CardSection } from "@mantine/core";
import Image from "../../image";
import { ArticleCardProps } from "types/defaults";
import Link from "next/link";
const VerticalArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  cover,
}) => {
  return (
    <Card padding="lg" className="bg-transparent">
      <CardSection>
        {cover ? (
          <Image
            hash={cover.hash}
            width={cover.width}
            name={cover.name}
            height={cover.height}
            alt={cover.alt}
          />
        ) : null}
      </CardSection>
      <Link passHref href={`/article/${title.replace(/ /g, "-")}`}>
        <Text
          component="a"
          className="font-semibold block focus:shadow-none my-2 clamp-2"
        >
          {title}
        </Text>
      </Link>
      <Text className="clamp-2">{description}</Text>
    </Card>
  );
};

export default VerticalArticleCard;
