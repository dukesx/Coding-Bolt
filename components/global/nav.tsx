import {
  Popover,
  Row,
  Col,
  Layout,
  AutoComplete,
  Input,
  Button,
  Space,
} from "antd";
import {
  MagnifyingGlass,
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
import { useThemeSwitcher } from "react-css-theme-switcher";

const { Header } = Layout;

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

const Nav: React.FC = () => {
  const dark = useDarkMode(false, {
    classNameDark: "dark",
  });
  const { currentTheme, switcher } = useThemeSwitcher();
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [burger, setBurger] = useState(false);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <Header className="bg-white drop-shadow-md dark:bg-transparent px-4 dark:shadow-blue py-0">
      <Row wrap={false} justify="space-between" align="middle">
        <Col className=" flex font-medium text-gray-700  dark:text-white font-norms text-xl uppercase justify-center items-center">
          <div className="mr-2 mt-[2px] xxs:mt-[5px] hidden xs:block sm:block xxs:block">
            {burger ? (
              <X
                className="hover:bg-gray-100 cursor-pointer xxs:h-[20px] xxs:w-[20px] dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                size={24}
                weight="regular"
                onClick={() => setBurger(false)}
              />
            ) : (
              <List
                className="hover:bg-gray-100 cursor-pointer xxs:h-[20px] xxs:w-[20px] xxs:mt-[-4px]   dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                size={24}
                weight="regular"
                onClick={() => setBurger(true)}
              />
            )}
          </div>
          Coding Bolt
        </Col>
        <Col xs={0} sm={0} md={10} lg={12} xl={14} xxl={11}>
          <AutoComplete
            options={options}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={onSearch}
            className="w-full"
          >
            <Input
              placeholder="Let's find you something amazing 👀😇"
              allowClear
              className="h-[35px]"
              suffix={<MagnifyingGlass className="ml-2" size={18} />}
              bordered={false}
            />
          </AutoComplete>
        </Col>
        <Col
          md={6}
          sm={6}
          lg={4}
          xl={3}
          xxl={3}
          className="xxs:hidden flex items-center justify-evenly xs:hidden"
        >
          <TrendUp
            className="cursor-pointer bg-red-500 p-2 rounded-full hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
            size={33}
            weight="bold"
            color="white"
          />

          <ChatsCircle
            className="hover:bg-gray-100 cursor-pointer  dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
            size={24}
            weight="regular"
          />
          <Bookmarks
            className="hover:bg-gray-100 cursor-pointer  dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
            size={24}
            weight="regular"
          />
          <BellSimple
            className="hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
            size={24}
            weight="regular"
          />
        </Col>
        <Col
          className="max-w-[150px]"
          xs={9}
          sm={6}
          md={3}
          lg={2}
          xl={2}
          xxl={2}
        >
          <Space className="flex items-center justify-evenly">
            <div className="bg-yellow-400 rounded-full dark:block hidden">
              <Sun
                size={33}
                weight="fill"
                color="white"
                onClick={() => {
                  switcher({
                    theme: "dark",
                  });
                  dark.toggle();
                }}
                className="cursor-pointer xxs:h-[26px] xxs:w-[26px] p-2 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
              />
            </div>
            <div className="bg-gray-600 rounded-full hover:bg-gray-800 dark:hidden">
              <Moon
                className="cursor-pointer p-2 hover:p-2 xxs:h-[26px] xxs:w-[26px] hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                size={33}
                weight="fill"
                color="white"
                onClick={() => {
                  switcher({
                    theme: "light",
                  });
                  dark.toggle();
                }}
              />
            </div>

            <Button
              type="primary"
              className="hover:font-medium xxs:text-[10px] xxs:h-[27px] transition-none ml-2 mr-2"
            >
              Get Started
            </Button>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default Nav;
