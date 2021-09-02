import Wrapper from "components/global/wrapper";
import Head from "next/head";
// import { useAuthUser, withAuthUser } from "next-firebase-auth";
import {
  Paper,
  Card,
  CardSection,
  Text,
  Group,
  Grid,
  Col,
} from "@mantine/core";
import Image from "components/global/image";

const Index: React.FC = () => {
  // const dark = useDarkMode();
  // const AuthUser = useAuthUser();

  return (
    <>
      <Head>
        <title>Welcome to Coding Bolt</title>
      </Head>
      <Wrapper>
        <Paper className="mt-10">
          <Grid grow gutter={24}>
            <Col className="max-w-full" span={12}>
              <Card
                className="max-w-[400px] xxs:max-w-full mb-8"
                shadow="sm"
                padding="xl"
              >
                <CardSection>
                  <Image
                    alt="Image"
                    name="NyUbHUDAJ3.jpg"
                    className="object-cover h-[250px] transition-all ease-in-out"
                    width={400}
                    height={250}
                  />
                </CardSection>
                <Group className="mt-2" withGutter direction="column">
                  <Text className="font-semibold capitalize">
                    Use Interface Props in Functional Components Using
                    TypeScript with React
                  </Text>
                </Group>
              </Card>
            </Col>
          </Grid>
        </Paper>
      </Wrapper>
    </>
  );
};

// export const getServerSideProps = withAuthUserTokenSSR()();

export default Index;
