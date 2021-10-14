import { Card, Text } from "@mantine/core";
import { CarouselCardProps } from "types/signin/carouselCard";
const SignInCarouselCard: React.FC<CarouselCardProps> = ({
  description,
  title,
  icon,
}) => {
  return (
    <Card className="w-[400px] xs:w-full xxs:w-full h-[500px] shadow-lg dark:bg-manLightDark m-2">
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

export default SignInCarouselCard;
