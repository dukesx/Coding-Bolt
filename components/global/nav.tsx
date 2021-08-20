import { Popover, Row, Col, Layout, AutoComplete, Input, Button } from "antd";
import { MagnifyingGlass, BellSimple, ChatsCircle } from "phosphor-react";
import { useState } from "react";

const { Header } = Layout;

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

const Nav: React.FC = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
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
      <Row wrap={false} justify="space-between">
        <Col className="font-medium font-display text-black dark:text-white text-xl uppercase flex flex-col justify-center items-center">
          Coding Bolt
        </Col>
        <Col xs={0} sm={0} md={4} lg={4} xl={4} xxl={12}>
          <AutoComplete
            options={options}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={onSearch}
            className="w-full"
          >
            <Input
              placeholder="Search"
              allowClear
              suffix={<MagnifyingGlass className="ml-2" size={18} />}
            />
          </AutoComplete>
        </Col>
        <Col className="flex justify-evenly items-center" xxl={2} xs={6}>
          <BellSimple
            className="hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
            size={24}
            weight="regular"
          />
          <ChatsCircle
            className="hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-600 hover:p-2 hover:rounded-full hover:h-[37px] hover:w-[37px] transition-all ease-in-out"
            size={24}
            weight="regular"
          />
        </Col>
        <Col>
          <Button className="transition-all ease-in-out shadow-blue dark:hover:text-white dark:hover:font-semibold dark:bg-blue-600 dark:shadow-none hover:bg-blue-600 hover:text-white">
            Get Started
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default Nav;
