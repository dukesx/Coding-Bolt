/* eslint-disable jsx-a11y/alt-text */
import Wrapper from "components/global/wrapper";
import Head from "next/head";
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
  return (
    <>
      <Head>
        <title>Welcome to Coding Bolt</title>
      </Head>
      <Wrapper>
        <Paper className="mt-0">
          <Grid
            id="index-article-grid"
            className="bg-blue-50 xxl:py-6 xxl:px-8 bg-opacity-70 dark:bg-transparent"
            // className="xxs:hidden"
            // grow
            gutter={1}
          >
            <Col span={3} sm={5} md={4} lg={3} xl={3} xs={12}>
              <Card padding="lg" className="bg-transparent">
                <CardSection>
                  <Image
                    hash="UOHT,v^H{ba0$i=wN1ELvcr?%3bwIx-5KPXU"
                    width={500}
                    name="o_lJqPFyCn.jpg"
                    height={250}
                  />
                </CardSection>
                <Text className="mt-4 mb-2 font-semibold">
                  Seven Seo Trends You Should Know Before Even Starting Your
                  Business.
                </Text>
                <Text>It works every time.</Text>
              </Card>
            </Col>
            <Col span={6} sm={7} md={8} lg={6} xl={5} xs={12}>
              <Card className="max-w-full bg-transparent mb-6 pl-8 xs:pl-2 xxs:pl-2 py-2">
                <Group>
                  <Image
                    hash="UDS;$aof.nxVozazoIj[*KoJErWDxBjaRnWC"
                    width={90}
                    name="lW92uiAOED.jpg"
                    height={90}
                  />
                  <Group
                    className="ml-4 max-w-[600px] xxs:max-w-[240px] sm:max-w-[230px] xs:max-w-[290px] lg:max-w-[300px] md:max-w-[360px] xl:max-w-[300px] xxl:max-w-[500px]"
                    direction="column"
                  >
                    <Text lineClamp={2} className="mt-4 mb-2 font-semibold">
                      Localbitcoins clone script-A guide for entrepreneurs to
                      start a p2p exchange website like Localbitcoins?
                    </Text>
                    <Text>Qualcomm says the can.</Text>
                  </Group>
                </Group>
              </Card>

              <Card className="bg-transparent my-6 py-2 pl-8 xxs:pl-2 xs:pl-2">
                <Group>
                  <Image
                    hash="UjQ9Wok8?[S%W?ozs8ae?[a#IBn#skWBSibb"
                    width={90}
                    name="za6FB2a7i_.jpg"
                    height={90}
                  />
                  <Group
                    className="ml-4 max-w-[500px] xxs:max-w-[240px] xs:max-w-[290px] sm:max-w-[230px] lg:max-w-[300px] md:max-w-[360px] xl:max-w-[300px] xxl:max-w-[500px]"
                    direction="column"
                  >
                    <Text lineClamp={2} className="mt-4 mb-2 font-semibold">
                      Learning Python- Intermediate course: Day 22, Bold or
                      Italics !
                    </Text>
                    <Text lineClamp={2}>
                      If you have taken a call to grow your career in the
                      information technology
                    </Text>
                  </Group>
                </Group>
              </Card>

              <Card className="max-w-full bg-transparent my-6 py-2 pl-8 xxs:pl-2 xs:pl-2">
                <Group>
                  <Image
                    hash="UhQH|zGYKQKj$%%Ka3xo~Nw}rWrsE+IuxnN3"
                    width={90}
                    name="P_n0gObpOE.jpg"
                    height={90}
                  />
                  <Group
                    className="ml-4 max-w-[500px] xxs:max-w-[240px] sm:max-w-[230px] xs:max-w-[290px] lg:max-w-[300px] md:max-w-[360px] xl:max-w-[300px] xxl:max-w-[500px]"
                    direction="column"
                  >
                    <Text lineClamp={2} className="mt-4 mb-2 font-semibold">
                      All You Need to Know About Hiring Python Experts for Your
                      Project
                    </Text>
                    <Text lineClamp={2}>
                      It’s probably not what you’re expecting
                    </Text>
                  </Group>
                </Group>
              </Card>
            </Col>
            <Col
              span={3}
              sm={12}
              md={3}
              lg={3}
              xl={4}
              xs={12}
              className="sm:hidden xs:text-center md:hidden"
            >
              <Card padding="lg" className="xs:max-w-full bg-transparent">
                <CardSection className="flex justify-center">
                  <Image
                    hash="U2RV;0*0%i?G.9s8beQ+tmng9aNIXAT1v{aJ"
                    width={500}
                    name="4eFAYfMR8c.jpg"
                    height={250}
                  />
                </CardSection>
                <Text lineClamp={2} className="mt-4 mb-2 font-semibold">
                  The Biggest Contribution Of Seo To Humanity.
                </Text>
                <Text lineClamp={2}>
                  Educational YouTube channels are the best. Here is the list of
                  my personal favorites. Feel free to add more!
                </Text>
              </Card>
            </Col>
          </Grid>
          <Grid
            id="index-layout-grid"
            className="max-w-[1400px] mx-auto bg-yellow-50 dark:bg-transparent"
            grow
            gutter={24}
          >
            <Col span={9}>
              <Card className="">
                <Text>How To Have A Fantastic Seo With Minimal Spending.</Text>
              </Card>
            </Col>
            <Col className="xs:hidden xxs:hidden" span={3}>
              <Card>
                <Text>
                  Disclaimer: The author is a self-proclaimed nice guy
                </Text>
              </Card>
            </Col>
          </Grid>
        </Paper>
      </Wrapper>
    </>
  );
};

export default Index;
