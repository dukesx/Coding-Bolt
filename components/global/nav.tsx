import {
  Grid,
  Col,
  useMantineColorScheme,
  Button,
  Text,
  Avatar,
  Accordion,
  Drawer,
  Divider,
  List,
  Modal,
} from "@mantine/core";
import {
  Lightning,
  Sun,
  MoonStars,
  List as ListIcon,
  Trophy,
  Fire,
  DiscordLogo,
  GithubLogo,
  Student,
  Heart,
  BookmarkSimple,
  Rss,
  Heartbeat,
  BellRinging,
  Tag,
  Folder,
} from "phosphor-react";
import GoogleOrignalIcon from "react-devicons/google/original";
import GithubOriginalIcon from "react-devicons/github/original";
import { useState } from "react";
import { NavProps } from "../../types/global/defaults";
import Image2 from "./image";
import Image from "next/image";
import CoverPlaceholder from "../../public/assets/images/asset-placeholder-cover.jpg";
import PlaceholderAvatar from "../../public/assets/images/asset-placeholder-avatar.jpg";
import ListVar1 from "./lists/var-1";
import Link from "next/link";
/**
 * The Nav Component
 * @param {Session} session
 * @param {SupabaseClient} supabase
 **/
const Nav: React.FC<NavProps> = ({ session, supabase }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [drawer, setDrawer] = useState(false);
  const [signIn, setSignIn] = useState(false);
  return (
    <header>
      <nav data-testid="nav">
        <Grid
          align="center"
          justify="center"
          className="shadow-sm py-0 my-0 dark:border-b border-manLightDark w-full"
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
                <ListIcon
                  size={20}
                  // className="mx-0.5"
                  color={colorScheme == "dark" ? "#FAB005" : "#228BE6"}
                  weight="duotone"
                />
              )}
            </Avatar>
          </Col>
          <Col className="min-w-[200px]" span={8}>
            <Link href="/" passHref>
              <Text className="flex cursor-pointer justify-center font-black text-lg uppercase items-center">
                Coding
                <Lightning
                  size={24}
                  className="mx-0.5"
                  color={colorScheme == "dark" ? "#FAB005" : "#228BE6"}
                  weight="duotone"
                />
                Bolt
              </Text>
            </Link>
          </Col>
          <Col span={2}>
            <div className="flex">
              {session ? (
                <Text
                  component="a"
                  className="mr-6 font-semibold xs:hidden xxs:hidden cursor-pointer"
                  onClick={() => supabase.auth.signOut()}
                >
                  Sign out
                </Text>
              ) : (
                <Link href="/signin" passHref>
                  <Text
                    component="a"
                    className="mr-6 font-semibold xs:hidden xxs:hidden"
                  >
                    Sign in
                  </Text>
                </Link>
              )}

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
            </div>
          </Col>
        </Grid>
      </nav>
      <Drawer
        opened={drawer}
        noFocusTrap={true}
        onClose={() => setDrawer(false)}
        noCloseOnClickOutside={signIn ? true : false}
        hideCloseButton
        className="p-0 hover:shadow focus:shadow"
        padding="xs"
      >
        <div className="h-[160px] flex flex-col items-center justify-center mt-0 w-full relative bg-black bg-opacity-30 z-50">
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
            <div className="flex flex-col ml-4 mt-4 font-semibold">
              <Text className="text-sm text-white">
                {session ? session.user.user_metadata.full_name : "Visitor"}
              </Text>
              <Text className="text-xs text-white mt-1">
                {session ? "Member" : ""}
              </Text>
              {session ? (
                <Text
                  className="text-xs mt-1 text-white cursor-pointer"
                  onClick={() => supabase.auth.signOut()}
                >
                  Sign out
                </Text>
              ) : (
                <Link href="/signin" passHref>
                  <Text className="text-xs mt-1 text-white cursor-pointer">
                    Sign in
                  </Text>
                </Link>
              )}
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
        <div className="p-2">
          <Button
            variant="gradient"
            gradient={{
              from: colorScheme == "dark" ? "yellow" : "blue",
              to: colorScheme == "dark" ? "orange" : "indigo",
            }}
            className="w-full"
          >
            Start Writing!
          </Button>
        </div>
        <div className="mt-2 font-medium text-xs ">
          <ListVar1
            title="Tags"
            icon={<Tag color="#BE4BDB" weight="duotone" size={24} />}
          />
          <ListVar1
            title="Categories"
            icon={<Folder color="#E64980" weight="duotone" size={24} />}
          />
          <ListVar1
            title="Courses"
            icon={<Student color="#12B886" weight="duotone" size={24} />}
          />

          <Divider
            className="px-8"
            labelPosition="center"
            label="Leaderboards"
          />
          <ListVar1
            title="Bolt-ing"
            icon={<Lightning color="#228BE6" weight="duotone" size={24} />}
          />

          <ListVar1
            title="HOT!"
            icon={<Fire color="#FA5252" weight="duotone" size={24} />}
          />

          <ListVar1
            title="All Time Favs"
            icon={<Trophy color="#FAB005" weight="duotone" size={24} />}
          />
        </div>
      </Drawer>
      <Modal
        title="Becoming a Part"
        onClose={() => setSignIn(false)}
        opened={signIn}
      >
        {/**
         * Awaiting further
         */}
      </Modal>
    </header>
  );
};

export default Nav;
