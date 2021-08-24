// import { Button, Card, Row, Col, Typography, Image } from "antd";
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

  // const { Title } = Typography;
  return (
    <>
      <Head>
        <title>Welcome to Coding Bolt</title>
      </Head>
      <Wrapper>
        {/* <Row>
          <Col>
            <Card
              className="max-w-[390px]"
              cover={
                <Image
                  alt="Something"
                  className="max-w-[390px] xxs:max-w-full"
                  src="https://image.freepik.com/free-vector/abstract-background_23-2148041193.jpg"
                />
              }
            >
              <div className="text-center text-5xl font-extrabold leading-none tracking-tight">
                <span className="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-red-500">
                  Hello <br /> World
                </span>
              </div>
              <Card.Meta
                title="Hello World brings happiness to this world"
                description={
                  <p>This is wow and i know how awesome does this look</p>
                }
              />
            </Card>
          </Col>
        </Row> */}
      </Wrapper>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Index);
