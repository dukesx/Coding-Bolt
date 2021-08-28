import useDarkMode from "use-dark-mode";
import Wrapper from "components/global/wrapper";
import Head from "next/head";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import { Paper, Card, CardSection, Text, Group } from "@mantine/core";
import Image from "components/global/image";

const Index: React.FC = () => {
  const dark = useDarkMode();
  const AuthUser = useAuthUser();

  return (
    <>
      <Head>
        <title>Welcome to Coding Bolt</title>
      </Head>
      <Wrapper>
        <Paper className="mt-10">
          <Card
            className="w-[400px]  xxs:max-w-full xs:w-full mb-8"
            shadow="sm"
            padding="xl"
          >
            <CardSection>
              <Image
                alt="Image"
                name="redcharlie.jpg"
                className="object-cover h-[250px] transition-all ease-in-out"
                selfLoader
                width={400}
                height={250}
              />
            </CardSection>
            <Group className="mt-2" withGutter direction="column">
              <Text className="font-semibold capitalize">
                Use Interface Props in Functional Components Using TypeScript
                with React
              </Text>
            </Group>
          </Card>

          <Card
            className="w-[400px]  xxs:max-w-full xs:w-full mb-8"
            shadow="sm"
            padding="xl"
          >
            <CardSection>
              <Image
                alt="Image"
                name="redcharlie.jpg"
                className="object-cover h-[250px] transition-all ease-in-out"
                selfLoader
                width={400}
                height={250}
              />
            </CardSection>
            <Group className="mt-2" withGutter direction="column">
              <Text className="font-semibold capitalize">
                Use Interface Props in Functional Components Using TypeScript
                with React
              </Text>
            </Group>
          </Card>

          <Card
            className="w-[400px]  xxs:max-w-full xs:w-full mb-8"
            shadow="sm"
            padding="xl"
          >
            <CardSection>
              <Image
                alt="Image"
                name="redcharlie.jpg"
                className="object-cover h-[250px] transition-all ease-in-out"
                selfLoader
                width={400}
                height={250}
              />
            </CardSection>
            <Group className="mt-2" withGutter direction="column">
              <Text className="font-semibold capitalize">
                Use Interface Props in Functional Components Using TypeScript
                with React
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
