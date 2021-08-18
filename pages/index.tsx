import { Button } from "antd";
import useDarkMode from "use-dark-mode";
import Wrapper from "components/wrapper";
import Head from "next/head";

const Index: React.FC = () => {
  const dark = useDarkMode();

  return (
    <>
      <Head>
        <title>Welcome to Coding Bolt</title>
      </Head>
      <Wrapper>
        <div>
          <p>
            <b>Hello World</b>
          </p>
          useDark: {dark.value ? "yes" : "false"}
        </div>
      </Wrapper>
    </>
  );
};

export default Index;
