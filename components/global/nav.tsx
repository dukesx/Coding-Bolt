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

const { Header } = Layout;

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

const Nav: React.FC = () => {
  const dark = useDarkMode(false, {
    classNameDark: "dark",
  });
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
        <Col className="xxs:text-base flex font-medium font-display text-black dark:text-white text-xl uppercase justify-center items-center">
          <div className="mr-2 mt-[2px]">
            {burger ? (
              <X
                className="hover:bg-gray-100 cursor-pointer  dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                size={24}
                weight="regular"
                onClick={() => setBurger(false)}
              />
            ) : (
              <List
                className="hover:bg-gray-100 cursor-pointer  dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                size={24}
                weight="regular"
                onClick={() => setBurger(true)}
              />
            )}
          </div>
          Coding Bolt
        </Col>
        <Col xs={0} sm={0} md={10} lg={12} xl={14} xxl={14}>
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
              suffix={<MagnifyingGlass className="ml-2" size={18} />}
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
          <BellSimple
            className="hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
            size={24}
            weight="regular"
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

          <TrendUp
            className="hover:bg-gray-100 cursor-pointer  dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
            size={24}
            weight="regular"
          />
        </Col>
        <Col sm={6} md={3} lg={2} xl={2}>
          <Space className="flex items-center justify-evenly max-w-[200px]">
            {dark.value ? (
              <Sun
                className="hover:bg-gray-100 cursor-pointer bg-yellow-400 p-2 rounded-full dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                size={33}
                weight="fill"
                color="white"
                onClick={() => dark.toggle()}
              />
            ) : (
              <Moon
                className="hover:bg-gray-800 cursor-pointer bg-gray-600 rounded-full p-2  dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
                size={33}
                weight="fill"
                color="white"
                onClick={() => dark.toggle()}
              />
            )}

            <Button
              type="primary"
              className="hover:font-medium xxs:text-xs transition-none mx-4"
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
