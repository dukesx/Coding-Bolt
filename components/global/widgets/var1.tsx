import { Text, Divider } from "@mantine/core";
import ListVar1 from "../lists/var-1";
import { ArrowSquareOut, ThumbsUp } from "phosphor-react";
import { CB_WidgetProps } from "types/global/widgets";
const WidgetVar1: React.FC<CB_WidgetProps> = ({
  title,
  comments,
  withComments,
  withArticles,
}) => {
  return (
    <div>
      <div>
        <Text className="font-semibold">{title}</Text>

        <ListVar1
          title={title}
          footer={
            <div className="flex">
              <div className="flex items-center">
                <Text
                  variant="link"
                  component="a"
                  href="#"
                  className="flex items-center"
                >
                  <ArrowSquareOut className="hover:underline" size={17} />
                  <div className="ml-1 text-xs clamp-2 font-semibold cursor-pointer">
                    View article
                  </div>
                </Text>
                <Divider orientation="vertical" className="mx-2" />
                <div className="flex items-center">
                  <Text className="flex mr-2" color="blue">
                    <ThumbsUp weight="bold" />
                  </Text>
                  <Text className="text-sm">44 Votes</Text>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default WidgetVar1;
