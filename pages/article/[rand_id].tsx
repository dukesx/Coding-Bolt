import { SingleArticle } from "types/global/defaults";
import { Text } from "@mantine/core";
const SingleArticle: React.FC<SingleArticle> = ({
  title,
  content,
  created_at,
  updated_at,
  author,
}) => {
  return <Text>Hello</Text>;
};

export default SingleArticle;
