import { Text, Tooltip } from "@mantine/core";
import { ListHeaderProps } from "types/global/lists";

const ListHeaderVar1: React.FC<ListHeaderProps> = ({ team, category }) => {
  return (
    <div className="flex mb-1 items-center">
      <Text className="text-sm ml-1">In</Text>
      <Tooltip label={category.title}>
        <Text
          component="a"
          href={category.url}
          className="mx-1.5"
          color={category.icon.color}
        >
          {category.icon.component}
        </Text>
      </Tooltip>
      <Text className="text-sm">For</Text>
      <Text
        className="mx-1 text-sm font-semibold underline"
        component="a"
        href={team.url}
      >
        {team.title}
      </Text>
    </div>
  );
};

export default ListHeaderVar1;
