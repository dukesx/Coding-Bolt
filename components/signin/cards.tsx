import { Card, Text } from "@mantine/core";
import { CarouselCardProps } from "types/signin/carouselCard";

/**
 * The Card used inside Carousel, seen on Sign in Page
 * @param {string} title  - Title of Card
 * @param {ReactNode} icon - Icon used for Card
 * @param {string} description - Description of Card
 */
export const SignInCarouselCard: React.FC<CarouselCardProps> = ({
  description,
  title,
  icon,
}) => {
  return (
    <Card className="dark:bg-manLightDark">
      <Card.Section className="h-[300px]">
        <div className="card-1" />
      </Card.Section>
      <div className="relative -top-36">
        <div>{icon}</div>
        <div className="text-center mt-2">
          <Text className="font-semibold text-lg">{title}</Text>
          <Text className="mt-3 text-sm">{description}</Text>
        </div>
      </div>
    </Card>
  );
};
