import useDarkMode from "use-dark-mode";
import { Button } from "antd";

const Wrapper = (props: any) => {
  const dark = useDarkMode(false);
  return (
    <>
      {props.children}
      <Button
        className="dark:bg-gray-200"
        type="primary"
        onClick={() => {
          dark.toggle();
        }}
      >
        hello world
      </Button>
    </>
  );
};

export default Wrapper;
