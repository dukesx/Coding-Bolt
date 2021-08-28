import {
  Grid,
  Col,
  Autocomplete,
  Paper,
  Button,
  Group,
  Title,
} from "@mantine/core";
import {
  BellSimple,
  ChatsCircle,
  Bookmarks,
  Sun,
  Moon,
  TrendUp,
  X,
  List,
} from "phosphor-react";
import { useState } from "react";
import useDarkMode from "use-dark-mode";

const Nav = () => {
  const [burger, setBurger] = useState(false);
  const dark = useDarkMode(false, {
    classNameDark: "dark",
  });
  return (
    <header>
      <nav>
        <Paper padding="sm" shadow="xs">
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

                <Button className="mx-4 xxs:px-2 xxs:text-xs xxs:h-[30px]">
                  Get Started
                </Button>
              </Group>
            </Col>
          </Grid>
        </Paper>
      </nav>
    </header>
  );
};

export default Nav;
