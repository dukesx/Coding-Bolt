import { Button, Card, Row, Col, Typography, Image } from "antd";
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

  const { Title } = Typography;
  return (
    <>
      <Head>
        <title>Welcome to Coding Bolt</title>
      </Head>
      <Wrapper>
        <Row>
          <Col>
            <Card
              className="max-w-[390px]"
              cover={
                <Image
                  alt="Something"
                  className="max-w-[390px] xxs:max-w-full"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              }
            >
              <Card.Meta
                title="Hello World brings happiness to this world"
                description={
                  <p>This is wow and i know how awesome does this look</p>
                }
              />
            </Card>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Index);
