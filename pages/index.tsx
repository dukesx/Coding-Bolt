import { Button } from "antd";
import useDarkMode from "use-dark-mode";
import Wrapper from "components/global/wrapper";
import Head from "next/head";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";

const Index: React.FC = () => {
  const dark = useDarkMode();
  const AuthUser = useAuthUser();

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
          <p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>
        </div>
      </Wrapper>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Index);
