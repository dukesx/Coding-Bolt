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
import Img, { CloudimageProvider } from "react-cloudimage-responsive";

const cloudimageConfig = {
  token: "aqytnfjixq",
  baseURL: "https://aqytnfjixq.cloudimg.io/v7/_cb-assets_/",
};
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
          <Card
            className="w-[600px] xxs:max-w-full xs:w-full"
            shadow="sm"
            padding="xl"
          >
            <CardSection>
              <CloudimageProvider config={cloudimageConfig}>
                {/* <Image
                  alt="Image"
                  path="401c2ee9c26ae7bd295be433b1490033.jpg"
                  className="object-cover h-[230px]"
                  withPlaceholder
                  width={400}
                  height={250}
                /> */}
                <Img src="redcharlie.jpg" alt="Demo image" ratio={1.5} />
              </CloudimageProvider>
            </CardSection>
            <Group className="mt-2" withGutter direction="column">
              <Text className="font-semibold capitalize">
                Use Interface Props in Functional Components Using TypeScript
                with React
              </Text>
              {/* <Text className="clamp-2 text-base">
                Writing function or class components in a React/TypeScript app
                often requires you to define the type of props passed to them.
                It enforces type checking so that the code adheres to the
                defined contract
              </Text> */}
            </Group>
          </Card>
        </Paper>
      </Wrapper>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Index);
