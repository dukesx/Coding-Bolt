import { Card, Text, CardSection } from "@mantine/core";
import Image from "../../image";
import { ArticleCardProps } from "types/defaults";

const VerticalArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  cover: {
    hash,
    height,
    width,
    alt,
    name,
    preload
  }
}) => {
  return (
    <Card padding="lg" className="bg-transparent">
      <CardSection>
        <Image
          hash={hash}
          width={width}
          name={name}
          height={height}
          alt={alt}
          preload={preload}
        />
      </CardSection>
      <Text className="mt-4 mb-2 font-semibold">
        {title}
      </Text>
      <Text>{description}</Text>
    </Card>
  );
};

export default VerticalArticleCard;
