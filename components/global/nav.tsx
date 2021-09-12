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
  ArrowCircleLeft,
  Star,
  ChatsCircle,
  Tag,
  TreeStructure,
} from "phosphor-react";
import { useState } from "react";
import useDarkMode from "use-dark-mode";
import { NavProps } from "types/defaults";
import GoogleLogo from "public/assets/images/google.svg";
import Image from "next/image";
import Image2 from "components/global/image";
import AssetPlaceholderCover from "public/assets/images/asset-placeholder-cover.jpg";

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
              className="max-w-[140px]"
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
                  ) : !session ? (
                    <Text>
                      <List
                        className="sm:mt-[3px] xxs:mt-[1px] md:h-[20px] md:w-[20px] cursor-pointer xxs:h-[20px] xxs:w-[20px] xxs:mt-[-4px] xs:mt-0 xs:mt-[2px]"
                        size={24}
                        weight="regular"
                        onClick={() => setBurger(true)}
                      />
                    </Text>
                  ) : null}
                </div>

                <Title
                  className="flex ml-3 xs:ml-0.5 items-center xs:text-[24px] xxs:text-[16px] md:ml-0 xs:mt-0 md:text-[15px] xxs:mt-[0px] uppercase sm:text-[16px] md:text-base lg:text-base lg:ml-1 font-black"
                  order={4}
                >
                  <div className="flex xs:hidden xxs:hidden items-center">
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
              className="xxs:hidden ml-4 xs:hidden sm:hidden max-w-[58vw] lg:max-w-[49vw] xl:max-w-[50vw]"
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
              className={`${loading ? "max-w-[220px]" : "max-w-[200px]"}`}
              span={2}
              xl={1}
              xs={3}
            >
              <Group position="right" className="">
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

                {/* {
                
                session && session.user ? ( */}
                <div>
                  <div
                    className="items-center ml-2 cursor-pointer flex relative z-[2]"
                    onClick={() => setBurger(true)}
                  >
                    <Avatar
                      size={45}
                      className="mr-3 xxs:mr-2 xs:mr-1"
                      color="blue"
                      radius="xl"
                      styles={{
                        placeholder: {
                          fontSize: "12px",
                        },
                      }}
                    >
                      {session ? (
                        <Image2
                          name="Cr90BEcUsP.jpg"
                          width={120}
                          height={120}
                          avatar
                          hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAYDBQQHCP/EACwQAAEDAgUBBgcAAAAAAAAAAAECAxEABAUGEhMhMRVBYXGBkQciIyQyYtH/xAAVAQEBAAAAAAAAAAAAAAAAAAAGBP/EACQRAAIBAQgCAwAAAAAAAAAAAAECADEDBAUREiEiQQZRYZHB/9oADAMBAAIRAxEAPwDWQQURKGfeaq8QecF4rSwx8vA+nMis1Tj5aSllsOOFQSDHST31eY9gGNYThC8RduUshW2i5t0aULbJnb4BnSRzJ6zUd1ORzYxn5Uy6EsFWm5PXYicq5uJ4aaHkyP5RUov7xRP3T5j9zRV+r5gjQPQjplPKWJ5mbuHLBAZt2klLryyQkkj8R4x7Vb5pyJjVllS4vlP3N9oc1vIIEttJEaj3qjjyAmnXIeLdk5Utlidrb3nEjkKBJk+cCfSmXttd5bqZYYbXb3LW2pSjzCkEc+M8eooomKMt4YAbAkfUa4uz3wcuqZfs52yqyUC4WUBSXAkj0KhRTlb/AA/zFYJCLXDFqGkAr0TrAJg9fGilyDasCPa8qGf/2Q=="
                        />
                      ) : null}
                    </Avatar>
                  </div>
                </div>
                {/* ) : (
                  <Button
                    className="ml-4 mr-2 mt-2 xxs:px-2 xxs:text-xs xxs:h-[32px]"
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
                )} */}
              </Group>
              <Modal
                zIndex={5000}
                title={
                  <Text className="font-semibold capitalize">Sign In ⚡🤟</Text>
                }
                opened={loginModal}
                onClose={() => setLoginModal(false)}
              >
                <Group
                  direction="column"
                  className="pt-2 pb-4 items-stretch xs:max-w-[370px]"
                >
                  <form className="max-w-[100%] relative">
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
                noCloseOnClickOutside={loginModal ? true : false}
                noFocusTrap
              >
                <div className=" h-[166px] w-full z-[-1] w-full relative">
                  {session ? (
                    <Image2
                      name="45A7fRAfAa.jpg"
                      className=""
                      height={200}
                      width={400}
                      hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAASACADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGAgT/xAArEAABAwMDAgUEAwAAAAAAAAABAgMEAAURBiExEhMHIkFRYRQjMoGCkbH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQAAf/EACARAAICAQMFAAAAAAAAAAAAAAECAAMRBBJxEyFRwfH/2gAMAwEAAhEDEQA/AHLGo37U423Ck3SV3j2kNhsJJCEHp3BV/nHrTuDqyeGAblGlMrVnZ1sJGedlFPHyeK57FoC/w7rBny7mwkxnCshpSgrBSUkA422J3qxu9phzoq42oFz2kuILXcckqU0QecLGMfyApK9Q9zCsWtThSDxn2BJqXqbVNv089cUSIKkhWG2ekEuZVgYIPGxOfisaW11qC72+W9NQx9O4ntNhLRClkkAkH2ANTWoPCWDAWX49/lsMvDpQw653EqIGB0dOFE/3nJqv8PPDyJH0kyxfO9InF5xYfQ6ttSEdXlSP0M7jkmqLL7GrwqqG4+yVdMqPuDsR4JllqB1xqP8AbWpGUK/E4pwjzIAVuCACD60UUEaJPRYUVmdcFsxmG1pcCUqS2AQMcA+1O4O0dGPc0UVhOz//2Q=="
                    />
                  ) : (
                    <Image
                      alt="placeholder cover"
                      src={AssetPlaceholderCover}
                      placeholder="blur"
                      className="blur-sm"
                      height={200}
                      width={400}
                      quality={100}
                    />
                  )}
                </div>
                <Card className="p-0 bg-black bg-opacity-50 h-[164px] relative z-50 top-[-169px] border-t-0 border-r-0 border-l-0  dark:border-yellow-600 dark:border-b-4">
                  <Group
                    direction="row"
                    className="max-w-[100%] p-4 m-0 mt-4"
                    noWrap
                  >
                    <Avatar size={80} className="rounded-full" color="blue">
                      {session ? (
                        <Image2
                          name="Cr90BEcUsP.jpg"
                          width={120}
                          height={120}
                          avatar
                          hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAYDBQQHCP/EACwQAAEDAgUBBgcAAAAAAAAAAAECAxEABAUGEhMhMRVBYXGBkQciIyQyYtH/xAAVAQEBAAAAAAAAAAAAAAAAAAAGBP/EACQRAAIBAQgCAwAAAAAAAAAAAAECADEDBAUREiEiQQZRYZHB/9oADAMBAAIRAxEAPwDWQQURKGfeaq8QecF4rSwx8vA+nMis1Tj5aSllsOOFQSDHST31eY9gGNYThC8RduUshW2i5t0aULbJnb4BnSRzJ6zUd1ORzYxn5Uy6EsFWm5PXYicq5uJ4aaHkyP5RUov7xRP3T5j9zRV+r5gjQPQjplPKWJ5mbuHLBAZt2klLryyQkkj8R4x7Vb5pyJjVllS4vlP3N9oc1vIIEttJEaj3qjjyAmnXIeLdk5Utlidrb3nEjkKBJk+cCfSmXttd5bqZYYbXb3LW2pSjzCkEc+M8eooomKMt4YAbAkfUa4uz3wcuqZfs52yqyUC4WUBSXAkj0KhRTlb/AA/zFYJCLXDFqGkAr0TrAJg9fGilyDasCPa8qGf/2Q=="
                        />
                      ) : null}
                    </Avatar>
                    <div className="">
                      <Text
                        className="text-sm font-semibold text-white"
                        data-autofocus
                        lineClamp={1}
                      >
                        {session ? "Muhammad Afzaal Afridi" : "Guest"}
                      </Text>
                      <Text className="text-xs mt-1 text-white" lineClamp={1}>
                        {session ? "Member" : null}
                      </Text>
                      {session ? (
                        <Text
                          variant="link"
                          component="a"
                          href="#"
                          onClick={() => signOut()}
                          className="text-xs mt-2 text-white"
                          lineClamp={1}
                        >
                          Sign Out
                        </Text>
                      ) : null}

                      {!session ? (
                        <Text
                          variant="link"
                          component="a"
                          href="#"
                          onClick={() => setLoginModal(true)}
                          className="text-xs mt-1 text-white"
                          lineClamp={1}
                        >
                          Sign in to CBolt
                        </Text>
                      ) : null}
                    </div>
                  </Group>
                </Card>

                <Group
                  direction="column"
                  align="unset"
                  withGutter
                  className="px-4 mt-[-190px]"
                >
                  <div className="my-3" />
                  <div className="flex px-1 py-1 transition-all ease-in-out hover:py-2.5 hover:bg-gray-100 dark:hover:bg-[#1f2125]">
                    <Text>
                      <House
                        className="mr-2"
                        color="#9d9fa4"
                        size={22}
                        weight="regular"
                      />
                    </Text>
                    <Text className="text-sm">Home</Text>
                  </div>

                  <div className="flex px-1 py-1 hover:py-2.5 transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-[#1f2125]">
                    <Text>
                      <BookmarksSimple
                        color="#9d9fa4"
                        className="mr-2"
                        size={22}
                        weight="regular"
                      />
                    </Text>
                    <Text className="text-sm">Bookmarks</Text>
                  </div>

                  <div className="flex px-1 py-1 hover:py-2.5 transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-[#1f2125]">
                    <Text>
                      <Tag
                        color="#9d9fa4"
                        className="mr-2"
                        size={22}
                        weight="regular"
                      />
                    </Text>
                    <Text className="text-sm">Tags</Text>
                  </div>
                  <div className="flex px-1 py-1 hover:py-2.5 transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-[#1f2125]">
                    <Text>
                      <TreeStructure
                        color="#9d9fa4"
                        className="mr-2"
                        size={22}
                        weight="regular"
                      />
                    </Text>
                    <Text className="text-sm">Categories</Text>
                  </div>
                  <Divider
                    className="mt-6"
                    labelPosition="center"
                    label="Scoreboards"
                    margins="xs"
                  />

                  <div className="flex px-1 py-1 hover:py-2.5 transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-[#1f2125]">
                    <Text>
                      <TrendUp
                        color="#FA5252"
                        className="mr-2"
                        size={22}
                        weight="fill"
                      />
                    </Text>
                    <Text className="text-sm">Trending</Text>
                  </div>

                  <div className="flex px-1 py-1 hover:py-2.5 transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-[#1f2125]">
                    <Text>
                      <Star
                        color="#FAB005"
                        className="mr-2"
                        size={22}
                        weight="fill"
                      />
                    </Text>
                    <Text className="text-sm">Top 10</Text>
                  </div>

                  <div className="flex px-1 py-1 hover:py-2.5 transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-[#1f2125]">
                    <Text>
                      <ChatsCircle
                        color="#868E96"
                        className="mr-2"
                        size={22}
                        weight="fill"
                      />
                    </Text>
                    <Text className="text-sm">Most Discussed</Text>
                  </div>
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
