// import { Button, Card, Row, Col, Typography, Image } from "antd";
import useDarkMode from "use-dark-mode";
import Wrapper from "components/global/wrapper";
import Head from "next/head";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import { Paper, Card, CardSection, Title, Text, Group } from "@mantine/core";
import Image from "components/global/image";

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
        <Paper className="mt-10">
          <Card className="w-[380px]" shadow="sm" padding="xl">
            <CardSection>
              <Image
                alt="Image"
                path="https://i.pinimg.com/originals/40/1c/2e/401c2ee9c26ae7bd295be433b1490033.jpg"
                className="h-[200px] w-[380px] object-cover"
              />
            </CardSection>
            <Group className="mt-2" withGutter direction="column">
              <Title className="font-semibold capitalize" order={4}>
                Use Interface Props in Functional Components Using TypeScript
                with React
              </Title>
              <Text className="clamp-2">
                Writing function or class components in a React/TypeScript app
                often requires you to define the type of props passed to them.
                It enforces type checking so that the code adheres to the
                defined contract
              </Text>
            </Group>
          </Card>
        </Paper>
      </Wrapper>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Index);
