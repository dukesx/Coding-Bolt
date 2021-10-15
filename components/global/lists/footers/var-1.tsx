import { Text, Avatar, Divider, Tooltip } from "@mantine/core";
import {
  BookmarkSimple,
  Lightning,
  HandsClapping,
  Heart,
} from "phosphor-react";
import Image2 from "../../image";
import { ReactionsHorizontal, Reaction } from "../../reactions";
import { ReactionLayout } from "../../../../types/global/defaults";
import { ListFooterProps } from "types/global/lists";

const ListFooterVar1: React.FC<ListFooterProps> = ({
  bookmarked,
  bolted,
  author,
}) => {
  return (
    <div className="flex mt-2">
      <Tooltip label={bookmarked ? "Remove from read later" : "Read later"}>
        <Text className="text-gray-500 dark:text-gray-400 text-xl cursor-pointer">
          <BookmarkSimple weight={bookmarked ? "fill" : "regular"} />
        </Text>
      </Tooltip>
      <Divider className="mx-2" orientation="vertical" />
      <Tooltip label={bolted ? "Remove from Bolted articles" : "Bolt it!"}>
        <Text className=" text-yellow-400 cursor-pointer">
          <Lightning weight={bolted ? "fill" : "regular"} size={21} />
        </Text>
      </Tooltip>
      <Divider orientation="vertical" className="mx-2" />
      <Tooltip label={`Visit ${author.name}'s profile`}>
        <Text component="a" href={author.image} className="block">
          <Avatar size={25} radius="xl">
            <Image2
              height={60}
              width={60}
              alt="something"
              name={author.image}
              className="rounded-md"
            />
          </Avatar>
        </Text>
      </Tooltip>
      <Divider orientation="vertical" className="mx-2" />
      <ReactionsHorizontal reacts={100}>
        <Reaction
          layout={ReactionLayout.Custom}
          icon={<Heart size={22} weight="duotone" />}
          iconColor="red"
        />

        <Reaction
          layout={ReactionLayout.Custom}
          icon={<HandsClapping size={22} weight="duotone" />}
          iconColor="yellow"
        />
      </ReactionsHorizontal>
    </div>
  );
};

export default ListFooterVar1;
