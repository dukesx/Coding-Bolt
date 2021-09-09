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
            className="bg-blue-50 xxl:py-6 xxl:px-4 bg-opacity-70 dark:bg-transparent pt-4 xs:pt-0 xxs:pt-0"
            gutter={1}
          >
            <Col span={3} sm={5} md={4} lg={3} xl={3} xs={12}>
              <Card padding="lg" className="bg-transparent">
                <CardSection>
                  <Image
                    hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAASACADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwAGBf/EACcQAAEDAwQCAgIDAAAAAAAAAAECAwQABREGBxIhMWETQSNRMpGx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAMEAf/EAB4RAAIBAwUAAAAAAAAAAAAAAAABMQIREgMhMlFx/9oADAMBAAIRAxEAPwDK6d3cslv0/ZoL8C4mRBjllam1I4rURgkZOcUlad3ARr25P3GzolWsQ2W46y6pB5lQPo/Qoqi7TviL8jk5pLQBJwtSiMegnJru6Vab0alSI02FKZdcS461IS62FcfAypI67PVU49ilZwImpmrveLS9Z3XHZjEpSPxLcSjn3j+QHWMUDbtaVY0Pe9OhiKph51pUhbK3i4QQsAd/XjxS3D3HMKQhYg25xDZy2hFwSOHoZFY7c+bb9xbtDly0SICobAZHwrD6VFSiokqA6PrFY1falBfGWNmk2m1WiOstoKzyyopGaxW6s+ZFDYiy5DI4+G3Cn/DVVQ5HU8F4A16u1xfkhD8+W4k+Qt5RB/s1xU/r6Kcke/3VVTdOCWuT/9k="
                    width={500}
                    name="OJSY1eOirg.jpg"
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
            <Col
              className="xs:pl-2 xxs:pl-2"
              span={6}
              sm={7}
              md={8}
              lg={6}
              xl={5}
              xs={12}
            >
              <Card className="max-w-full bg-transparent mb-6 pl-8 xs:pl-2 xxs:pl-2 py-2">
                <Group>
                  <Image
                    hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QAJxAAAQMDAwMEAwAAAAAAAAAAAQIDBAAFEQYSIQcxUSIyQWEVouH/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAB0RAAICAgMBAAAAAAAAAAAAAAECABEEIQMSIjH/2gAMAwEAAhEDEQA/AFpc74pa1YJx5zmsSRc1K4yB91guy1FXckmrl7tMy2uyWpMeS25GWlt7en0gqHBBHGD8VK6+ygBOxLIuTifaogfRornwsjuoCijUEZGl7Ci1Xq23Z+E087EfbUISnCUuHAIKzzgghWQOOB4IqTX+sWdV3R2O0ytMJLit7Sl5DnqylWRzuHn+1advqYLj0aVGUliTIK3nGzh5tIQtOxOePcpJPPO3HzWN060PL1bfmY0eTFaQFpL6lODcW85WUpHfAz4HIrErM/pjOgVXjHVRGT0m6S6dcsC7trEuOtXAhUBvcApLSc5UccHJP69hRTBu0L8vKSzAbfYtkFtMeIGzhJQnjjz2opGylU0TuKuPYsT/2Q=="
                    width={90}
                    name="t2osHgPxj1.jpg"
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
                    hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYFBwgE/8QAKBAAAQQBAgUEAwEAAAAAAAAAAQIDBAURABIGISIxQRMUUYEHcYKR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMC/8QAIhEAAQMEAQUBAAAAAAAAAAAAAQACMQMEESFREhQyQaFx/9oADAMBAAIRAxEAPwDmpaeDKLrtjYsQo0faXAepxW44SEp85PLOm+pqIT85o1sUiuCSfWL/AKilq87sdI/nt50sXHC8izkWVfWRvdSXYLTzbO7ZvW08FhAUeQJSFY1b/CdLIiUzLLzCYzyxkoLeCjAA6sDmrVal281ywx6+TzKnRsKfbCoPIz9jjGEvPVo3lDCQhKfGM6NTMuUmtkuMOgepnKiB3+Do0jLjARsMGiUpO1XEFZxtWW1Wd9Y5H9pMbDnUlO4kLCT8Z/wnVs105TLyIk9SEuklLLoPS4fj7HPVX/l/ipfDXAcuVFBE14iLHV22rXnq+gCf3jWeKz8m8Vw47UZyYmbFbwpLU1lL6U47cyNw/YOdHfk7CSx7WYaYWorhp60vLJD6kte0fLLaiB1N4BH2MnRqKqrc3FREsTvQuWkPKKhzVlIGeWfjzz0anTdcdOiANz+rdYWxftuTqDqF/9k="
                    width={90}
                    name="pWR39a4xIR.jpg"
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
                    hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z"
                    width={90}
                    name="DBLa8Z0Int.jpg"
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
                    hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBwT/xAAsEAACAQMDAgUCBwAAAAAAAAABAgMEBREABiESMRMiQVGBBxQVMjNSYXGR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAUD/8QAJhEAAgEDAgQHAAAAAAAAAAAAAQIDABEhBEEFEjFhEyIzUYHw8f/aAAwDAQACEQMRAD8AzvdP1BuF3vEsNzVJGHkBeQqqKf2gflGpprWaq4zxLJH4oXrPnIGOOQfXPB0+vV6tS2+CClSl8anYxVBmoYZDKzNnrV2HWMDjHbgapd5WLbW4rfbTsOjNJU9DJUlYnjBIAJV1JwexOV4xoCKqpzLgm1WppJHnKSZjW9hgC2bZtvt3qCtVrSvuZVFp+iAFCQ6uW9srnv8AyOBo0vqNvXi2XWChq6dqeoch42Ug5BHBDDn4ONGsp0Ib1AKVoJYzGb6YvnqPyntVtWrebx4aalkSJEaSMynEj483mPPyTzp0d2z2aGOWjtrR1dL0Qxw1MXAPYA44ccf3p7R1ILqkZDDHUR3CH157Z1yXelZ6SqaKHxgQWMR5DEewOgrrDzKH2+KtycJQq4QAXv1AOdiPb7i9Z/uq6fidf98soapl/XdeQWPOQf8AR8aNUlFaKG4sjQwKtEEPUCmD1Y9vQg86NNGvij8pBqPNwHVTt4isDe3bav/Z"
                    width={500}
                    name="yXbld5A7Lz.jpg"
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
