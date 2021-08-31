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
  Moon,
  TrendUp,
  X,
  List,
  User,
} from "phosphor-react";
import { useState } from "react";
import useDarkMode from "use-dark-mode";
import { NavProps } from "types/defaults";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import GoogleLogo from "public/assets/images/google.svg";
import Image from "next/image";

const Nav: React.FC<NavProps> = ({ loginOptions, auth }) => {
  const currentUser = auth.currentUser;

  const [burger, setBurger] = useState(false);
  const [user, setUser] = useState(currentUser ? currentUser : null);

  const [loginModal, setLoginModal] = useState(false);
  const dark = useDarkMode(false, {
    classNameDark: "dark",
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      setLoginModal(false);
    } else {
      setUser(null);
    }
  });
  return (
    <header>
      <nav>
        <Paper
          padding="xs"
          className="border border-t-0 border-l-0 border-r-0 dark:border-gray-900"
        >
          <Grid grow align="center">
            <Col span={1}>
              <Group align="center">
                <div className="hidden xs:flex xxs:flex md:flex xxs:mt-3">
                  {burger ? (
                    <X
                      className="hover:bg-gray-100 md:h-[20px] md:w-[20px] cursor-pointer xxs:h-[20px] xxs:w-[20px] dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                      size={24}
                      weight="regular"
                      onClick={() => setBurger(false)}
                    />
                  ) : (
                    <List
                      className="hover:bg-gray-100 md:h-[20px] md:w-[20px] cursor-pointer xxs:h-[20px] xxs:w-[20px] xxs:mt-[-4px]   dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                      size={24}
                      weight="regular"
                      onClick={() => setBurger(true)}
                    />
                  )}
                </div>

                <Title
                  className="xs:text-lg md:ml-0 md:text-[15px] uppercase md:text-base lg:text-base lg:ml-1 font-medium ml-2"
                  order={4}
                >
                  Coding Bolt
                </Title>
              </Group>
            </Col>
            <Col span={5} className="xxs:hidden xs:hidden">
              <Autocomplete
                placeholder="Pick one"
                data={["React", "Angular", "Svelte", "Vue"]}
              />
            </Col>
            <Col className="xxs:hidden xs:hidden md:hidden" span={2}>
              <Group position="center" spacing={22}>
                <TrendUp
                  className="cursor-pointer bg-red-500 p-1.5 rounded-full hover:p-2 hover:rounded-full hover:h-[33px] hover:w-[33px] transition-all ease-in-out"
                  size={33}
                  weight="bold"
                  color="white"
                />

                <ChatsCircle
                  className="hover:bg-gray-50 dark:hover:bg-gray-600 hover:p-[7px] hover:transition-all hover:ease-in-out cursor-pointer hover:w-[36px] hover:h-[36px] hover:rounded-full"
                  size={26}
                  weight="regular"
                />
                <Bookmarks
                  className="hover:bg-gray-50 dark:hover:bg-gray-600 hover:p-[7px] hover:transition-all hover:ease-in-out cursor-pointer hover:w-[36px] hover:h-[36px] hover:rounded-full"
                  size={26}
                  weight="regular"
                />
                <BellSimple
                  className="hover:bg-gray-50 dark:hover:bg-gray-600 hover:p-[7px] hover:transition-all hover:ease-in-out cursor-pointer hover:w-[36px] hover:h-[36px] hover:rounded-full"
                  size={26}
                  weight="regular"
                />
              </Group>
            </Col>
            <Col span={2}>
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

                {user ? (
                  <Menu
                    controlRefProp="ref"
                    control={
                      <div className="flex items-center xs:border-0 xxs:border-0 align-middle content-between border dark:border-gray-700 rounded-3xl px-3 py-0.5">
                        {console.log(user.displayName.split(" "))}
                        <Avatar
                          className="mr-3 xxs:mr-2 xs:mr-2"
                          color="blue"
                          radius="xl"
                          // size="md"
                          styles={{
                            placeholder: {
                              fontSize: "12px",
                            },
                          }}
                        >
                          {user.displayName[0] +
                            user.displayName.split(" ")[1][0]}
                        </Avatar>
                        <p className="truncate max-w-[150px] text-sm xs:hidden xxs:hidden">
                          {user ? user.displayName : ""}{" "}
                        </p>
                        <CaretDown size={17} />
                      </div>
                    }
                  >
                    <MenuItem
                      icon={
                        <PencilCircle
                          color="#228be6"
                          size={18}
                          weight="duotone"
                        />
                      }
                    >
                      Create
                    </MenuItem>
                    <MenuItem
                      icon={<User size={18} color="#228be6" weight="duotone" />}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      icon={
                        <SignOut color="#228be6" size={18} weight="duotone" />
                      }
                      onClick={() => signOut(auth)}
                    >
                      Sign Out
                    </MenuItem>
                  </Menu>
                ) : (
                  <Button
                    className="mx-4 xxs:px-2 xxs:text-xs xxs:h-[30px]"
                    onClick={() => setLoginModal(true)}
                  >
                    Get Started
                  </Button>
                )}
              </Group>
              <Modal
                title={
                  <Text className="font-semibold capitalize">
                    Choose an option
                  </Text>
                }
                opened={loginModal}
                onClose={() => setLoginModal(false)}
              >
                <Group direction="column" className="py-5" align="center">
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
                    onClick={() => signInWithPopup(auth, loginOptions[0])}
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
                    onClick={() => signInWithRedirect(auth, loginOptions[0])}
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
