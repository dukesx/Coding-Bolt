import {
  Grid,
  Col,
  Autocomplete,
  Paper,
  Button,
  Text,
  Card,
  Menu,
  MenuItem,
  Avatar,
  Drawer,
  TextInput,
  Divider,
  InputWrapper,
  Group,
  Loader,
  Modal,
  Title,
  LoadingOverlay,
} from "@mantine/core";
import {
  BellSimple,
  CaretDown,
  SignOut,
  PencilCircle,
  Bookmarks,
  Sun,
  Moon,
  TrendUp,
  X,
  List,
  User,
  Lightning,
  ArrowCircleRight,
  House,
  BookmarksSimple,
} from "phosphor-react";
import { useState } from "react";
import useDarkMode from "use-dark-mode";
import { NavProps } from "types/defaults";
import GoogleLogo from "public/assets/images/google.svg";
import Image from "next/image";

const Nav: React.FC<NavProps> = ({ session, loading, signOut, signIn }) => {
  const [burger, setBurger] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const dark = useDarkMode(false, {
    classNameDark: "dark",
  });

  return (
    <header>
      <nav>
        <Paper
          padding="xs"
          className="border border-t-0 border-b-4 xs:border-b-4 border-l-0 border-r-0 dark:border-yellow-600"
        >
          <Grid id="nav-grid" align="center" justify="space-between" grow>
            <Col
              className="lg:max-w-[150px] xl:max-w-[140px] xxl:max-w-[140px]"
              span={2}
              xs={2}
              sm={1}
              md={1}
              lg={1}
              xl={1}
            >
              <Group align="center">
                <div className="hidden xs:flex xxs:flex md:flex sm:flex xxs:mt-3">
                  {burger ? (
                    <Text>
                      <X
                        className="sm:mt-[3px] xxs:mt-[1px] xs:mt-[2px] md:h-[20px] md:w-[20px] cursor-pointer xxs:h-[20px] xxs:w-[20px]"
                        size={24}
                        weight="regular"
                        onClick={() => setBurger(false)}
                      />
                    </Text>
                  ) : (
                    <Text>
                      <List
                        className="sm:mt-[3px] xxs:mt-[1px] md:h-[20px] md:w-[20px] cursor-pointer xxs:h-[20px] xxs:w-[20px] xxs:mt-[-4px] xs:mt-0 xs:mt-[2px]"
                        size={24}
                        weight="regular"
                        onClick={() => setBurger(true)}
                      />
                    </Text>
                  )}
                </div>

                <Title
                  className="flex items-center xs:text-[24px] xxs:text-[16px] md:ml-0 xs:mt-0 md:text-[15px] xxs:mt-[0px] uppercase sm:text-[16px] md:text-base lg:text-base lg:ml-1 font-black ml-2"
                  order={4}
                >
                  <div className="flex ml-2 xs:hidden xxs:hidden items-center">
                    Coding
                    <Lightning
                      className=""
                      color={dark.value ? "#ffae00" : null}
                      weight={dark.value ? "duotone" : null}
                      size={25}
                    />
                    Bolt
                  </div>
                  <div className="hidden xs:flex xxs:flex items-center">
                    C{" "}
                    <Lightning
                      className=""
                      color={dark.value ? "#ffae00" : null}
                      weight={dark.value ? "duotone" : null}
                      size={25}
                    />{" "}
                    B
                  </div>
                </Title>
              </Group>
            </Col>
            <Col
              span={7}
              className="xxs:hidden xs:hidden sm:hidden max-w-[55vw] lg:max-w-[49vw] xl:max-w-[50vw]"
              md={1}
              lg={4}
              xl={7}
            >
              <Autocomplete
                placeholder="Find your favorite 🔥🔥"
                data={["React", "Angular", "Svelte", "Vue"]}
              />
            </Col>
            <Col
              className="xxs:hidden xs:hidden md:hidden max-w-[180px]"
              span={1}
              lg={2}
            >
              <Group position="center" spacing={22}>
                <TrendUp
                  className="cursor-pointer bg-red-500 p-1.5 rounded-full hover:p-2 hover:rounded-full hover:h-[33px] hover:w-[33px] transition-all ease-in-out"
                  size={33}
                  weight="bold"
                  color="white"
                />

                <Text>
                  <Bookmarks
                    className="hover:bg-gray-50 dark:hover:bg-gray-600 hover:p-[7px] hover:transition-all hover:ease-in-out cursor-pointer hover:w-[36px] hover:h-[36px] hover:rounded-full"
                    size={26}
                    weight="regular"
                  />
                </Text>
                <Text>
                  <BellSimple
                    className="hover:bg-gray-50 dark:hover:bg-gray-600 hover:p-[7px] hover:transition-all hover:ease-in-out cursor-pointer hover:w-[36px] hover:h-[36px] hover:rounded-full"
                    size={26}
                    weight="regular"
                  />
                </Text>
              </Group>
            </Col>
            <Col
              className={
                session && session.user ? "max-w-[325px]" : "max-w-[250px]"
              }
              span={2}
              xl={1}
              xs={3}
            >
              <Group position="right">
                <Sun
                  className="dark:block hidden cursor-pointer bg-yellow-400 p-[6px] hover:p-[8px] rounded-full transition-all ease-in-out"
                  size={33}
                  weight="fill"
                  color="white"
                  onClick={() => {
                    dark.toggle();
                  }}
                />
                <Moon
                  className="dark:hidden cursor-pointer bg-gray-600 rounded-full transition-all ease-in-out p-[6px] hover:p-[8px]"
                  size={33}
                  weight="fill"
                  color="white"
                  onClick={() => {
                    dark.toggle();
                  }}
                />

                {session && session.user ? (
                  <Menu
                    controlRefProp="ref"
                    control={
                      <div className="flex items-center xs:border-0 xxs:border-0 align-middle content-between border dark:border-gray-700 rounded-3xl px-3 py-0.5">
                        <Avatar
                          className="mr-3 xxs:mr-2 xs:mr-2"
                          color="blue"
                          radius="xl"
                          styles={{
                            placeholder: {
                              fontSize: "12px",
                            },
                          }}
                        >
                          {session &&
                            session.user.name[0] +
                              session.user.name.split(" ")[1][0]}
                        </Avatar>
                        <Text
                          lineClamp={1}
                          className=" max-w-[150px] text-sm xs:hidden xxs:hidden"
                        >
                          {session && session.user ? session.user.name : ""}
                        </Text>
                        <Text>
                          <CaretDown size={17} />
                        </Text>
                      </div>
                    }
                  >
                    <MenuItem
                      icon={
                        <PencilCircle
                          color="#228be6"
                          size={20}
                          weight="duotone"
                        />
                      }
                    >
                      Create
                    </MenuItem>
                    <MenuItem
                      icon={<User size={20} color="#228be6" weight="duotone" />}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      icon={
                        <SignOut color="#228be6" size={20} weight="duotone" />
                      }
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </MenuItem>
                  </Menu>
                ) : (
                  <Button
                    className="ml-4 mr-2 mt-3 xxs:px-2 xxs:text-xs xxs:h-[32px]"
                    radius="xl"
                    onClick={() => setLoginModal(true)}
                    rightIcon={<ArrowCircleRight weight="fill" size={26} />}
                    variant="gradient"
                    gradient={{
                      to: "indigo",
                      from: "blue",
                    }}
                  >
                    Sign in
                  </Button>
                )}
              </Group>
              <Modal
                className=""
                title={
                  <Text className="font-semibold capitalize">
                    {" "}
                    Sign In ⚡🤟
                  </Text>
                }
                opened={loginModal}
                onClose={() => setLoginModal(false)}
              >
                <Group
                  direction="column"
                  className="pt-2 pb-4 items-stretch xs:max-w-[370px]"
                >
                  <form className="max-w-[100%] relative">
                    <LoadingOverlay visible={loading} />

                    <InputWrapper
                      id="input-demo"
                      required
                      className=""
                      label="Username"
                      description="name@email.com"
                    >
                      <TextInput />
                    </InputWrapper>

                    <InputWrapper
                      id="input-demo"
                      required
                      className="w-[400px] xs:max-w-[98%] mt-4"
                      label="Password"
                      description="Your secret passcode/passphrase"
                    >
                      <TextInput />
                    </InputWrapper>
                    <Button className="w-full mt-6" type="submit">
                      Sign in
                    </Button>
                    <Divider margins="xs" label="OR" labelPosition="center" />
                    <div className="flex flex-col">
                      <Button
                        leftIcon={
                          <Image
                            alt="Login with Google"
                            src={GoogleLogo}
                            height={20}
                            width={20}
                          />
                        }
                        variant="filled"
                        onClick={() =>
                          signIn("google", {
                            callbackUrl: "/",
                          })
                        }
                        color="white"
                        styles={{
                          root: {
                            background: "white",
                          },
                          label: {
                            textShadow: "none",
                          },
                        }}
                        className="text-gray-600 font-medium shadow-md dark:bg-[#1a1b1e] dark:text-gray-100 hover:border hover:border-blue-600 dark:hover:border-gray-700 hover:border-l-8 transition-all ease-in-out"
                      >
                        Sign in with Google
                      </Button>
                      <Text
                        size="sm"
                        className="text-xs font-medium mt-8"
                        variant="link"
                        component="a"
                        href="https://mantine.dev"
                      >
                        Dont have an account yet?
                      </Text>
                      <Text
                        size="sm"
                        className="text-xs font-medium mt-1"
                        color="gray"
                      >
                        *By signing in, you agree to our
                        <Text
                          component="a"
                          href="https://mantine.dev"
                          className="text-xs mx-1"
                          variant="link"
                        >
                          Terms
                        </Text>
                        and
                        <Text
                          component="a"
                          href="https://mantine.dev"
                          className="text-xs mx-1"
                          variant="link"
                        >
                          Privacy Policy{" "}
                        </Text>
                      </Text>
                    </div>
                  </form>
                </Group>
              </Modal>
              <Drawer
                opened={burger}
                onClose={() => setBurger(false)}
                hideCloseButton
              >
                <Card className="p-0">
                  <Group
                    direction="row"
                    className="max-w-[100%] bg-gray-50 bg-opacity-50 border border-gray-200 border-t-0 border-r-0 border-l-0  dark:border-blue-600 border-b-4 dark:bg-transparent p-4 m-0"
                    noWrap
                  >
                    <Avatar
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                      size={80}
                      className="rounded-full"
                    />
                    <div className="">
                      <Text
                        className="text-sm font-semibold"
                        data-autofocus
                        lineClamp={1}
                      >
                        Muhammad Afzaal Afridi
                      </Text>
                      <Text className="text-xs mt-1" lineClamp={1}>
                        Member
                      </Text>
                      <div className="flex mt-2">
                        <Text
                          className="text-xs mr-4"
                          variant="link"
                          component="a"
                          href="#"
                        >
                          View Profile
                        </Text>
                        <Text
                          className="text-xs"
                          variant="link"
                          component="a"
                          href="#"
                        >
                          Sign Out
                        </Text>
                      </div>
                    </div>
                  </Group>
                </Card>

                <Group
                  direction="column"
                  align="unset"
                  withGutter
                  className="px-4"
                >
                  <div className="my-3" />
                  <div className="flex px-1 py-1 hover:py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Text>
                      <House
                        className="mr-2"
                        color="#2563eb"
                        size={22}
                        weight="fill"
                      />
                    </Text>
                    <Text className="text-sm">Home</Text>
                  </div>
                  <div className="flex px-1 py-1 hover:py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Text>
                      <TrendUp
                        color="#FA5252"
                        className="mr-2"
                        size={22}
                        weight="duotone"
                      />
                    </Text>
                    <Text className="text-sm">Trending</Text>
                  </div>

                  <div className="flex px-1 py-1 hover:py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Text>
                      <BookmarksSimple
                        color="#2563eb"
                        className="mr-2"
                        size={22}
                        weight="fill"
                      />
                    </Text>
                    <Text className="text-sm">Bookmarks</Text>
                  </div>

                  <Divider
                    className="mt-6"
                    labelPosition="center"
                    label="More"
                    margins="xs"
                  />
                </Group>
              </Drawer>
            </Col>
          </Grid>
        </Paper>
      </nav>
    </header>
  );
};

export default Nav;
