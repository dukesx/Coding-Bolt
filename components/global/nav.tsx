import {
  Grid,
  Col,
  Autocomplete,
  Paper,
  Button,
  Text,
  Menu,
  MenuItem,
  Avatar,
  Group,
  Modal,
  Title,
} from "@mantine/core";
import {
  BellSimple,
  CaretDown,
  SignOut,
  PencilCircle,
  ChatsCircle,
  Bookmarks,
  Sun,
  Rocket,
  Moon,
  TrendUp,
  X,
  List,
  User,
} from "phosphor-react";
import { useState } from "react";
import useDarkMode from "use-dark-mode";
import { NavProps } from "types/defaults";
// import {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   getRedirectResult,
//   signInWithRedirect,
// } from "firebase/auth";
import GoogleLogo from "public/assets/images/google.svg";
import Image from "next/image";

const Nav: React.FC<NavProps> = ({
  // loginOptions,
  // auth,
  session,
  loading,
  signOut,
  signIn,
}) => {
  // const currentUser = auth.currentUser;

  const [burger, setBurger] = useState(false);
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  const dark = useDarkMode(false, {
    classNameDark: "dark",
  });

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setUser(user);
  //     setUserLoading(false);
  //     setLoginModal(false);
  //   } else {
  //     setUserLoading(false);
  //     setUser(null);
  //   }
  // });

  return (
    <header>
      <nav>
        <Paper
          padding="xs"
          className="border border-t-0 border-l-0 border-r-0 dark:border-gray-900"
        >
          <Grid id="nav-grid" align="center" justify="space-evenly" grow>
            <Col
              className="lg:max-w-[120px] xl:max-w-[100px] xxl:max-w-[130px]"
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
                        className="hover:bg-gray-100 sm:mt-[3px] xxs:mt-[1px] xs:mt-[2px] md:h-[20px] md:w-[20px] cursor-pointer xxs:h-[20px] xxs:w-[20px] dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                        size={24}
                        weight="regular"
                        onClick={() => setBurger(false)}
                      />
                    </Text>
                  ) : (
                    <Text>
                      <List
                        className="hover:bg-gray-100 sm:mt-[3px] xxs:mt-[1px] md:h-[20px] md:w-[20px] cursor-pointer xxs:h-[20px] xxs:w-[20px] xxs:mt-[-4px] xs:mt-1   dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out xs:mt-[2px]"
                        size={24}
                        weight="regular"
                        onClick={() => setBurger(true)}
                      />
                    </Text>
                  )}
                </div>

                <Title
                  className="xs:text-lg md:ml-0 md:text-[15px] uppercase sm:text-[16px] md:text-base lg:text-base lg:ml-1 font-medium ml-2"
                  order={4}
                >
                  Coding Bolt
                </Title>
              </Group>
            </Col>
            <Col
              span={7}
              className="xxs:hidden xs:hidden sm:hidden max-w-[55vw] lg:max-w-[49vw] xl:max-w-[50vw]"
              md={5}
              lg={4}
              xl={7}
            >
              <Autocomplete
                placeholder="Pick one"
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
              xl={user ? 2 : 1}
              xs={3}
            >
              <Group position="right">
                <Sun
                  className="dark:block hidden cursor-pointer bg-yellow-400 p-1.5 rounded-full hover:p-2 hover:rounded-full hover:h-[33px] hover:w-[33px] transition-all ease-in-out"
                  size={33}
                  weight="fill"
                  color="white"
                  onClick={() => {
                    dark.toggle();
                  }}
                />
                <Moon
                  className="dark:hidden cursor-pointer bg-gray-600 p-1.5 rounded-full hover:p-2 hover:bg-gray-800 hover:rounded-full hover:h-[33px] hover:w-[33px] transition-all ease-in-out"
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
                          {/* {user.displayName[0] +
                            user.displayName.split(" ")[1][0]} */}

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
                      onClick={() =>
                        // signOut(auth)
                        signOut()
                      }
                    >
                      Sign Out
                    </MenuItem>
                  </Menu>
                ) : (
                  <Button
                    className="ml-4 mr-2 mt-3 xxs:px-2 xxs:text-xs xxs:h-[30px]"
                    onClick={() => setLoginModal(true)}
                    loading={loading ? true : false}
                    leftIcon={<Rocket size={18} weight="duotone" />}
                    variant="filled"
                    // gradient={{ from: "indigo", to: "cyan" }}
                  >
                    {loading ? "Loading SSO" : "Get Started"}
                  </Button>
                )}
              </Group>
              <Modal
                title={
                  <Text className="font-semibold capitalize">
                    Get Started With Single Sign On
                  </Text>
                }
                opened={loginModal}
                onClose={() => setLoginModal(false)}
              >
                <Group direction="column" className="py-5" align="center">
                  <Text size="sm" className="mb-5" color="gray">
                    Start quickly with a single press of a button ⚡🤟
                  </Text>
                  <Button
                    leftIcon={
                      <Image
                        alt="Login with Google"
                        src={GoogleLogo}
                        height={20}
                        width={20}
                      />
                    }
                    variant="light"
                    color="blue"
                    className="xs:hidden xxs:hidden"
                    onClick={() =>
                      // signInWithPopup(auth, loginOptions[0])
                      signIn("google", {
                        callbackUrl: "localhost:3000",
                      })
                    }
                  >
                    Start With Google
                  </Button>

                  <Button
                    leftIcon={
                      <Image
                        alt="Login with Google"
                        src={GoogleLogo}
                        height={20}
                        width={20}
                      />
                    }
                    variant="light"
                    color="blue"
                    className="hidden xs:block xxs:block"
                    onClick={() =>
                      // signInWithRedirect(auth, loginOptions[0])
                      signIn("google", {
                        callbackUrl: "localhost:3000",
                      })
                    }
                  >
                    Start With Google
                  </Button>
                </Group>
              </Modal>
            </Col>
          </Grid>
        </Paper>
      </nav>
    </header>
  );
};

export default Nav;
