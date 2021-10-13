import {
  Grid,
  Col,
  useMantineColorScheme,
  Text,
  Avatar,
  Drawer,
  Modal,
} from "@mantine/core";
import { Lightning, Sun, MoonStars, List, SmileyWink } from "phosphor-react";
import { useState } from "react";
import { NavProps } from "../../types/defaults";
import Image2 from "./image";
import Image from "next/image";
import CoverPlaceholder from "../../public/assets/images/asset-placeholder-cover.jpg";
import PlaceholderAvatar from "../../public/assets/images/asset-placeholder-avatar.jpg";

const Nav: React.FC<NavProps> = ({ session }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [drawer, setDrawer] = useState(false);
  const [signIn, setSignIn] = useState(false);
  return (
    <header>
      <nav data-testid="nav">
        <Grid
          align="center"
          justify="center"
          className="shadow-sm py-0 my-0 dark:border-b border-manLightDark"
        >
          <Col span={2}>
            <Avatar
              className="ml-auto xs:mr-auto xxs:mr-auto xs:ml-4 xxs:ml-4 cursor-pointer"
              radius="xl"
              onClick={() => setDrawer(true)}
              color={colorScheme == "dark" ? "yellow" : "blue"}
            >
              {session ? (
                //@ts-ignore

                session.user.user_metadata.full_name.split(" ").length > 2 ? (
                  session.user.user_metadata.full_name.split(" ")[1].charAt(0) +
                  session.user.user_metadata.full_name.split(" ")[2].charAt(0)
                ) : (
                  session.user.user_metadata.full_name.split(" ")[0].charAt(0) +
                  session.user.user_metadata.full_name.split(" ")[1].charAt(0)
                )
              ) : (
                <SmileyWink
                  size={24}
                  // className="mx-0.5"
                  color={colorScheme == "dark" ? "#FAB005" : "#228BE6"}
                  weight="duotone"
                />
              )}
            </Avatar>
          </Col>
          <Col className="min-w-[200px]" span={8}>
            <Text className="flex justify-center font-black text-lg uppercase items-center">
              Coding
              <Lightning
                size={24}
                className="mx-0.5"
                color={colorScheme == "dark" ? "#FAB005" : "#228BE6"}
                weight="duotone"
              />
              Bolt
            </Text>
          </Col>
          <Col span={2}>
            {colorScheme == "dark" ? (
              <Sun
                className="cursor-pointer mr-auto xs:ml-auto xxs:ml-auto xs:mr-4 xxs:mr-4"
                color="#FAB005"
                weight="duotone"
                size={24}
                onClick={() => toggleColorScheme()}
              />
            ) : (
              <MoonStars
                className="cursor-pointer mr-auto xs:ml-auto xxs:ml-auto xs:mr-4 xxs:mr-4"
                color="#228BE6"
                weight="duotone"
                size={24}
                onClick={() => toggleColorScheme()}
              />
            )}
          </Col>
        </Grid>
      </nav>
      <Drawer
        opened={drawer}
        noFocusTrap={signIn ? true : false}
        onClose={() => setDrawer(false)}
        noCloseOnClickOutside={signIn ? true : false}
        hideCloseButton
        className="p-0 hover:shadow focus:shadow"
        padding="xs"
      >
        <div className="h-[159px] flex flex-col items-center justify-center mt-0 w-full relative bg-black bg-opacity-25 z-50">
          <div className="flex">
            <Avatar radius="xl" className="rounded-full" size={90}>
              <Image
                height={120}
                width={120}
                className="object-cover"
                src={PlaceholderAvatar}
                alt="avatar"
                // placeholder="blur"
              />
            </Avatar>
            <div className="flex flex-col ml-4 mt-3 font-semibold">
              <Text className="text-sm text-white">Muhammad Afzaal Afridi</Text>
              <Text className="text-sm text-white">Administrator</Text>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-0">
          <Image
            className="blur-[2px]"
            height={200}
            width={400}
            src={CoverPlaceholder}
            alt="cover"
            placeholder="blur"
          />
        </div>
      </Drawer>
    </header>
  );
};

export default Nav;
