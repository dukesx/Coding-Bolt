import { Lightning, Heart, HandWaving, BookmarkSimple } from "phosphor-react";

export const Reactions = () => {
  return (
    <div className="left-0 xs:bg-gray-100 xxs:bg-gray-100 dark:bg-[#25262b] sm:items-center sm:bottom-0 sm:left-0 xxs:items-center xxs:bottom-0 xxs:left-0 xxs:flex-row xs:items-center xs:fixed xs:bottom-0 xs:left-0 sticky xxs:fixed xs:flex-row md:z-[1000] xxs:z-[1000] xxs:w-full xxs:h-[70px] xxs:top-[unset] xs:w-full xs:z-[1000] xs:h-[70px] flex flex-col ml-auto top-[30%] xs:top-[unset]">
      {/* <Text className="uppercase font-semibold text-center xs:hidden xxs:hidden"> */}
      <b>Express</b> Yourself!
      {/* </Text> */}
      <div className="rounded-lg p-1 mt-0 text-center xs:w-full xxs:w-full xxs:flex xxs:justify-between xs:flex xs:justify-between xs:pb-4 xs:px-8 xxs:px-5">
        {/* <Text className="text-2xl mt-4 lg:my-10 xxs:mt-2 xl:my-10 sm:my-10 xxl:my-8 xs:shadow-sm rounded-full cursor-pointer "> */}
        <Lightning
          className=" mx-auto hover:scale-[1.3] xs:hover:scale-[1] xxs:hover:scale-[1] xs:active:scale-[1.3] xxs:active:scale-[1.3] transition-all ease-in-out bg-yellow-400 bg-opacity-25 rounded-full p-1.5"
          weight="duotone"
          color="#FAB005"
          size={40}
        />
        <span>
          {/* <Text className="mt-1 xs:hidden xxs:hidden text-sm">Bolt It!</Text> */}
        </span>
        {/* <Badge
            color="yellow"
            className="absolute mt-[-80px] xs:mt-[-55px] xxs:mt-[-60px]"
          >
            500
          </Badge> */}
        {/* </Text> */}

        {/* <Text className="text-2xl mt-4 lg:my-10 xl:my-10 sm:my-10 xxs:mt-2 xxl:my-8 rounded-full cursor-pointer"> */}
        <Heart
          // onClick={() => setReact(!react)}
          // className={
          //   (react ? "" : "border-none ") +
          //   "mx-auto hover:scale-[1.3] xs:hover:scale-[1] xxs:hover:scale-[1] xs:active:scale-[1.3] xxs:active:scale-[1.3] transition-all ease-in-out bg-red-400 border border-red-600 border-[2px] bg-opacity-25 rounded-full p-1"
          // }
          weight="duotone"
          color="#FA5252"
          size={40}
        />
        <span>
          {/* <Text
              className={
                (react ? "font-semibold" : "") +
                " mt-1 xs:hidden xxs:hidden text-sm capitalize"
              }
            >
              {!react ? "Love it" : "lovin' it!"}
            </Text> */}
        </span>

        {/* <Badge
            color="red"
            className="absolute mt-[-80px] xs:mt-[-55px] xxs:mt-[-60px]"
          >
            {!react ? 500 : 500 + 1}
          </Badge> */}
        {/* </Text> */}

        {/* <Text className="text-2xl mt-4 xxs:mt-2 lg:my-10 sm:my-10 xl:my-10 xxl:my-8 rounded-full cursor-pointer"> */}
        <HandWaving
          className="mx-auto hover:scale-[1.3] xs:hover:scale-[1] xxs:hover:scale-[1] xs:active:scale-[1.3] xxs:active:scale-[1.3] transition-all ease-in-out bg-pink-400 bg-opacity-25 rounded-full p-1"
          weight="duotone"
          color="#E64980"
          size={40}
        />
        <span>
          {/* <Text className="mt-1 xs:hidden text-sm xxs:hidden">Noice</Text> */}
        </span>
        {/* <Badge
            color="pink"
            className="absolute mt-[-80px] xs:mt-[-50px] xxs:mt-[-60px]"
          >
            500
          </Badge> */}
        {/* </Text> */}
        {/* <Text className="text-2xl mt-4 xxs:mt-2 lg:my-10 sm:my-10 xl:my-10 xxl:my-8 rounded-full"> */}
        <BookmarkSimple
          className="mx-auto hover:scale-[1.3] xs:hover:scale-[1] xxs:hover:scale-[1] xs:active:scale-[1.3] xxs:active:scale-[1.3] transition-all ease-in-out cursor-pointer border-2 border-blue-600 bg-blue-400 rounded-full bg-opacity-25 p-1"
          weight="duotone"
          color="#228BE6"
          size={40}
        />
        <span>
          {/* <Text className="mt-1 xs:hidden xxs:hidden text-sm font-semibold"> */}
          Saved
          {/* </Text> */}
        </span>
        {/* <Badge
            color="blue"
            className="absolute mt-[-80px] xs:mt-[-50px] xxs:mt-[-60px] xxs:right-[0px]"
          >
            500
          </Badge>
        </Text> */}
      </div>
    </div>
  );
};
