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

const Index: React.FC = () => {
  const dark = useDarkMode();
  const AuthUser = useAuthUser();
  const cloudimageConfig = {
    token: "aqytnfjixq",
    baseURL: "_cb-assets_/",
    placeholderBackground: dark.value ? "#111111" : "#f4f4f4",
    delay: 20000,
  };
  // const { Title } = Typography;
  return (
    <>
      <Head>
        <title>Welcome to Coding Bolt</title>
      </Head>
      <Wrapper>
        <Paper className="mt-10">
          <Card
            className="w-[400px]  xxs:max-w-full xs:w-full"
            shadow="sm"
            padding="xl"
          >
            <CardSection className="h-[250px]">
              {/* <Image
                alt="Image"
                path="redcharlie.jpg"
                className="object-cover h-[230px]"
                withPlaceholder
                width={400}
                height={250}
              /> */}
              <CloudimageProvider config={cloudimageConfig}>
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
