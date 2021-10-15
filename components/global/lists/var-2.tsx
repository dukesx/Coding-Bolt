import { Card, Text, Avatar, Divider } from "@mantine/core";
import { CB_ListProps } from "types/global/defaults";
import Image2 from "../image";

const ListVar2: React.FC<CB_ListProps> = ({
  title,
  description,
  image: { name },
  reactions,
  bookmarked,
}) => {
  return (
    <Card className="w-full bg-transparent mt-2 xs:mt-0 xxs:mt-0 sm:mt-0">
      <div className="flex">
        <div className="mr-4 min-w-[80px] max-w-[80px] xs:min-w-[60px] xxs:min-w-[60px]">
          <Image2
            height={120}
            width={120}
            alt="something"
            name={name}
            className="rounded-md"
            hash=""
          />
        </div>
        <div className="max-w-[80%]">
          <div className="flex mb-1 items-center">
            <Text className="text-sm ml-1">In</Text>
            <Text className="mx-1.5" color="blue">
              <i className="devicon-react-plain text-lg" />
            </Text>
            <Text className="text-sm">For</Text>
            <Text
              className="mx-1 text-sm font-semibold underline"
              component="a"
              href="/"
            >
              React Dev Team
            </Text>
          </div>
          <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm md:text-sm">
            {title}
          </Text>
          <Text className="text-sm clamp-1 mt-2 xs:text-xs xs:hidden xxs:hidden">
            {description}
          </Text>
          <div className="flex mt-2">
            <Text className="text-gray-500 dark:text-gray-400 text-xl">
              <BookmarkSimple />
            </Text>
            <Divider className="mx-2" orientation="vertical" />
            <Text className=" text-yellow-400">
              <Lightning size={21} />
            </Text>
            <Divider orientation="vertical" className="mx-2" />
            <div className="">
              <Avatar size={25} radius="xl">
                <Image2
                  height={60}
                  width={60}
                  alt="something"
                  name="ZzfNjwjAxJ.jpg"
                  className="rounded-md"
                  hash=""
                />
              </Avatar>
            </div>
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
        </div>
      </div>
    </Card>
  );
};
export default ListVar2;
