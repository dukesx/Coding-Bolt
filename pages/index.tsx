/* eslint-disable jsx-a11y/alt-text */
import Wrapper from "components/global/wrapper";
import Head from "next/head";
import { Paper, Card, Title, Text, Grid, Col } from "@mantine/core";
import Image from "next/image";
import VerticalArticleCard from "components/global/article/card/vertical";
import HorizontalArticleCard from "components/global/article/card/horizontal";
import { TextT, SketchLogo } from "phosphor-react";
import Sticky from "react-stickynode";

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
            className="bg-blue-50 xxl:pt-6 xxl:px-4 bg-opacity-70 dark:bg-transparent pt-4 xs:pt-0 xxs:pt-0"
            gutter={1}
          >
            <Col span={3} sm={5} md={4} lg={3} xl={4} xs={12}>
              <VerticalArticleCard
                title="Seven Seo Trends You Should Know Before Even Starting Your Business"
                description="It works every time."
                cover={{
                  height: 250,
                  width: 500,
                  alt: "an image",
                  preload: false,
                  hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAASACADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwAGBf/EACcQAAEDAwQCAgIDAAAAAAAAAAECAwQABREGBxIhMWETQSNRMpGx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAMEAf/EAB4RAAIBAwUAAAAAAAAAAAAAAAABMQIREgMhMlFx/9oADAMBAAIRAxEAPwDK6d3cslv0/ZoL8C4mRBjllam1I4rURgkZOcUlad3ARr25P3GzolWsQ2W46y6pB5lQPo/Qoqi7TviL8jk5pLQBJwtSiMegnJru6Vab0alSI02FKZdcS461IS62FcfAypI67PVU49ilZwImpmrveLS9Z3XHZjEpSPxLcSjn3j+QHWMUDbtaVY0Pe9OhiKph51pUhbK3i4QQsAd/XjxS3D3HMKQhYg25xDZy2hFwSOHoZFY7c+bb9xbtDly0SICobAZHwrD6VFSiokqA6PrFY1falBfGWNmk2m1WiOstoKzyyopGaxW6s+ZFDYiy5DI4+G3Cn/DVVQ5HU8F4A16u1xfkhD8+W4k+Qt5RB/s1xU/r6Kcke/3VVTdOCWuT/9k=",
                  name: "OJSY1eOirg.jpg",
                }}
              />
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
              <HorizontalArticleCard
                title="Local bitcoins clone script-A guide for entrepreneurs to
                start a p2p exchange website like Localbitcoins?"
                description="Qualcomm says the can."
                cover={{
                  height: 80,
                  width: 80,
                  alt: "an image",
                  preload: false,
                  hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QAJxAAAQMDAwMEAwAAAAAAAAAAAQIDBAAFEQYSIQcxUSIyQWEVouH/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAB0RAAICAgMBAAAAAAAAAAAAAAECABEEIQMSIjH/2gAMAwEAAhEDEQA/AFpc74pa1YJx5zmsSRc1K4yB91guy1FXckmrl7tMy2uyWpMeS25GWlt7en0gqHBBHGD8VK6+ygBOxLIuTifaogfRornwsjuoCijUEZGl7Ci1Xq23Z+E087EfbUISnCUuHAIKzzgghWQOOB4IqTX+sWdV3R2O0ytMJLit7Sl5DnqylWRzuHn+1advqYLj0aVGUliTIK3nGzh5tIQtOxOePcpJPPO3HzWN060PL1bfmY0eTFaQFpL6lODcW85WUpHfAz4HIrErM/pjOgVXjHVRGT0m6S6dcsC7trEuOtXAhUBvcApLSc5UccHJP69hRTBu0L8vKSzAbfYtkFtMeIGzhJQnjjz2opGylU0TuKuPYsT/2Q==",
                  name: "t2osHgPxj1.jpg",
                }}
              />

              <HorizontalArticleCard
                title="Learning Python- Intermediate course: Day 22, Bold or
                Italics !"
                description="If you have taken a call to grow your career in the
                information technology"
                cover={{
                  height: 80,
                  width: 80,
                  alt: "an image",
                  preload: false,

                  hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYFBwgE/8QAKBAAAQQBAgUEAwEAAAAAAAAAAQIDBAURABIGISIxQRMUUYEHcYKR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMC/8QAIhEAAQMEAQUBAAAAAAAAAAAAAQACMQMEESFREhQyQaFx/9oADAMBAAIRAxEAPwDmpaeDKLrtjYsQo0faXAepxW44SEp85PLOm+pqIT85o1sUiuCSfWL/AKilq87sdI/nt50sXHC8izkWVfWRvdSXYLTzbO7ZvW08FhAUeQJSFY1b/CdLIiUzLLzCYzyxkoLeCjAA6sDmrVal281ywx6+TzKnRsKfbCoPIz9jjGEvPVo3lDCQhKfGM6NTMuUmtkuMOgepnKiB3+Do0jLjARsMGiUpO1XEFZxtWW1Wd9Y5H9pMbDnUlO4kLCT8Z/wnVs105TLyIk9SEuklLLoPS4fj7HPVX/l/ipfDXAcuVFBE14iLHV22rXnq+gCf3jWeKz8m8Vw47UZyYmbFbwpLU1lL6U47cyNw/YOdHfk7CSx7WYaYWorhp60vLJD6kte0fLLaiB1N4BH2MnRqKqrc3FREsTvQuWkPKKhzVlIGeWfjzz0anTdcdOiANz+rdYWxftuTqDqF/9k=",
                  name: "pWR39a4xIR.jpg",
                }}
              />

              <HorizontalArticleCard
                title="All You Need to Know About Hiring Python Experts for Your
                Project"
                description="It’s probably not what you’re expecting"
                cover={{
                  height: 80,
                  width: 80,
                  alt: "an image",
                  preload: false,

                  hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                  name: "DBLa8Z0Int.jpg",
                }}
              />
            </Col>
            <Col
              span={3}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              xs={12}
              className="sm:hidden xs:text-center md:hidden sm:text-center"
            >
              <VerticalArticleCard
                title="The Biggest Contribution Of Seo To Humanity."
                description="Educational YouTube channels are the best. Here is the list of
                my personal favorites. Feel free to add more!"
                cover={{
                  height: 250,
                  width: 500,
                  alt: "an image",
                  preload: false,
                  hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBwT/xAAsEAACAQMDAgUCBwAAAAAAAAABAgMEBREABiESMRMiQVGBBxQVMjNSYXGR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAUD/8QAJhEAAgEDAgQHAAAAAAAAAAAAAQIDABEhBEEFEjFhEyIzUYHw8f/aAAwDAQACEQMRAD8AzvdP1BuF3vEsNzVJGHkBeQqqKf2gflGpprWaq4zxLJH4oXrPnIGOOQfXPB0+vV6tS2+CClSl8anYxVBmoYZDKzNnrV2HWMDjHbgapd5WLbW4rfbTsOjNJU9DJUlYnjBIAJV1JwexOV4xoCKqpzLgm1WppJHnKSZjW9hgC2bZtvt3qCtVrSvuZVFp+iAFCQ6uW9srnv8AyOBo0vqNvXi2XWChq6dqeoch42Ug5BHBDDn4ONGsp0Ib1AKVoJYzGb6YvnqPyntVtWrebx4aalkSJEaSMynEj483mPPyTzp0d2z2aGOWjtrR1dL0Qxw1MXAPYA44ccf3p7R1ILqkZDDHUR3CH157Z1yXelZ6SqaKHxgQWMR5DEewOgrrDzKH2+KtycJQq4QAXv1AOdiPb7i9Z/uq6fidf98soapl/XdeQWPOQf8AR8aNUlFaKG4sjQwKtEEPUCmD1Y9vQg86NNGvij8pBqPNwHVTt4isDe3bav/Z",
                  name: "yXbld5A7Lz.jpg",
                }}
              />
            </Col>
          </Grid>

          <Card className="md:px-0 pt-0 xs:px-0 xxs:px-0 sm:px-0">
            <Grid
              id="index-layout-grid"
              className="max-w-[1400px] pt-6 mx-auto bg-yellow-50 dark:bg-transparent bg-opacity-50"
              grow
              gutter={12}
            >
              <Col span={6} md={6} lg={7} xl={7} className="md:px-0">
                <div className="pt-2 pb-6 pl-6 flex">
                  <Text className="">
                    <TextT
                      className="mt-[-4px]"
                      size={40}
                      color="#2563eb"
                      weight="bold"
                    />
                  </Text>
                  <Title
                    className="text-gray-800 ml-3 dark:text-white uppercase font-bold mt-[3px]"
                    order={3}
                  >
                    from all over
                  </Title>
                </div>
                <HorizontalArticleCard
                  title="Every React Developer should know these libraries"
                  description="It’s probably not what you’re expecting"
                  cover={{
                    height: 80,
                    width: 80,
                    alt: "an image",
                    preload: false,

                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                    name: "DBLa8Z0Int.jpg",
                  }}
                />

                <HorizontalArticleCard
                  title="Learn a new blockchain database technology, build something cool and win a swag box! "
                  description="It’s probably not what you’re expecting"
                  cover={{
                    height: 80,
                    width: 80,
                    alt: "an image",
                    preload: false,

                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                    name: "DBLa8Z0Int.jpg",
                  }}
                />

                <HorizontalArticleCard
                  title="🔥 Learn Full-Stack JavaScript: Start from the basics of JS, HTML, CSS and progress to Node.js, React.js, React Native 🔥"
                  description="It’s probably not what you’re expecting"
                  cover={{
                    height: 80,
                    width: 80,
                    alt: "an image",
                    preload: false,

                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                    name: "DBLa8Z0Int.jpg",
                  }}
                />

                <HorizontalArticleCard
                  title="Build an app for sending GIFs and win the first prize! 💸"
                  description="It’s probably not what you’re expecting"
                  cover={{
                    height: 80,
                    width: 80,
                    alt: "an image",
                    preload: false,

                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                    name: "DBLa8Z0Int.jpg",
                  }}
                />
                <HorizontalArticleCard
                  title="Looking for an Experienced dApp and React Developer to assist with a Task"
                  description="It’s probably not what you’re expecting"
                  cover={{
                    height: 80,
                    width: 80,
                    alt: "an image",
                    preload: false,

                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                    name: "DBLa8Z0Int.jpg",
                  }}
                />
                <HorizontalArticleCard
                  title="Build your own Clubhouse clone using React and 100ms 🚀"
                  description="It’s probably not what you’re expecting"
                  cover={{
                    height: 80,
                    width: 80,
                    alt: "an image",
                    preload: false,

                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                    name: "DBLa8Z0Int.jpg",
                  }}
                />
                <HorizontalArticleCard
                  title="WhatsApp: The Not-So-Private Privacy App, Prohibitory Automated Resume Filters, and Some Updates About Apple — on DevNews!"
                  description="It’s probably not what you’re expecting"
                  cover={{
                    height: 80,
                    width: 80,
                    alt: "an image",
                    preload: false,

                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                    name: "DBLa8Z0Int.jpg",
                  }}
                />
                <HorizontalArticleCard
                  title="All You Need to Know About Hiring Python Experts for Your
                Project"
                  description="It’s probably not what you’re expecting"
                  cover={{
                    height: 80,
                    width: 80,
                    alt: "an image",
                    preload: false,

                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                    name: "DBLa8Z0Int.jpg",
                  }}
                />
                <HorizontalArticleCard
                  title="All You Need to Know About Hiring Python Experts for Your
                Project"
                  description="It’s probably not what you’re expecting"
                  cover={{
                    height: 80,
                    width: 80,
                    alt: "an image",
                    preload: false,

                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                    name: "DBLa8Z0Int.jpg",
                  }}
                />
              </Col>
              <Col
                className="xs:hidden xxs:hidden md:hidden sm:hidden"
                span={6}
                md={6}
                lg={5}
                xl={5}
              >
                <Sticky bottomBoundary="#index-article-grid">
                  <div className="pt-6 pb-6 pl-6 flex">
                    <span>
                      <SketchLogo
                        color="#2563eb"
                        className=""
                        weight="duotone"
                        size={45}
                      />
                    </span>
                    <Title
                      className="text-gray-800 dark:text-white uppercase font-bold align-middle mt-3 ml-3"
                      order={3}
                    >
                      Must read
                    </Title>
                  </div>
                  <VerticalArticleCard
                    title="The Biggest Contribution Of Seo To Humanity."
                    description="Educational YouTube channels are the best. Here is the list of
                my personal favorites. Feel free to add more!"
                    cover={{
                      height: 250,
                      width: 600,
                      alt: "an image",
                      preload: false,
                      hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBwT/xAAsEAACAQMDAgUCBwAAAAAAAAABAgMEBREABiESMRMiQVGBBxQVMjNSYXGR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAUD/8QAJhEAAgEDAgQHAAAAAAAAAAAAAQIDABEhBEEFEjFhEyIzUYHw8f/aAAwDAQACEQMRAD8AzvdP1BuF3vEsNzVJGHkBeQqqKf2gflGpprWaq4zxLJH4oXrPnIGOOQfXPB0+vV6tS2+CClSl8anYxVBmoYZDKzNnrV2HWMDjHbgapd5WLbW4rfbTsOjNJU9DJUlYnjBIAJV1JwexOV4xoCKqpzLgm1WppJHnKSZjW9hgC2bZtvt3qCtVrSvuZVFp+iAFCQ6uW9srnv8AyOBo0vqNvXi2XWChq6dqeoch42Ug5BHBDDn4ONGsp0Ib1AKVoJYzGb6YvnqPyntVtWrebx4aalkSJEaSMynEj483mPPyTzp0d2z2aGOWjtrR1dL0Qxw1MXAPYA44ccf3p7R1ILqkZDDHUR3CH157Z1yXelZ6SqaKHxgQWMR5DEewOgrrDzKH2+KtycJQq4QAXv1AOdiPb7i9Z/uq6fidf98soapl/XdeQWPOQf8AR8aNUlFaKG4sjQwKtEEPUCmD1Y9vQg86NNGvij8pBqPNwHVTt4isDe3bav/Z",
                      name: "yXbld5A7Lz.jpg",
                    }}
                  />
                  <HorizontalArticleCard
                    title="All You Need to Know About Hiring Python Experts for Your
                Project"
                    description="It’s probably not what you’re expecting"
                    cover={{
                      height: 80,
                      width: 80,
                      alt: "an image",
                      preload: false,

                      hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                      name: "DBLa8Z0Int.jpg",
                    }}
                  />

                  <HorizontalArticleCard
                    title="All You Need to Know About Hiring Python Experts for Your
                Project"
                    description="It’s probably not what you’re expecting"
                    cover={{
                      height: 80,
                      width: 80,
                      alt: "an image",
                      preload: false,

                      hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                      name: "DBLa8Z0Int.jpg",
                    }}
                  />

                  <HorizontalArticleCard
                    title="All You Need to Know About Hiring Python Experts for Your
                Project"
                    description="It’s probably not what you’re expecting"
                    cover={{
                      height: 80,
                      width: 80,
                      alt: "an image",
                      preload: false,

                      hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGwAAAgEFAAAAAAAAAAAAAAAAAAUGAQIEBwj/xAArEAACAgIBAQcCBwAAAAAAAAABAgMEAAUREgYHEyEiMWFSsTJBU3FygcH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwEEBf/EABwRAAMAAwADAAAAAAAAAAAAAAABAhITIRFRUv/aAAwDAQACEQMRAD8A6PVfjKPGCCCMVUdXeg4Ee3mZR+UiBvucbRxyqeJ51ccfp9P+4YhdFVqqhk9sMNpelrzBYaMlhfqWVR98MnIW5RqDVd5+ys2JqkeqnkksMwgElgAoOkDo4HJdv4/UBmR3U7+Xabi3Up02p1K1cV5i8kvEXhcgIA7c9XLHk8fv7Yi0kVvc9oNu9ySoZKmwWYOF44l8MAFT7geQ/sDJbQ7OUaE01gXF8aVi8jqfU7n3J+ecq5t15bNFxEzipXS+zt9mmw2UKV7GwWG48aNFME6F6EIB5Pn+I4ZF57lDVbjZG1ZhnFmUSrzYZGT0KpDAfIwwtte2K0R8o//Z",
                      name: "DBLa8Z0Int.jpg",
                    }}
                  />
                </Sticky>
              </Col>
            </Grid>
          </Card>
        </Paper>
      </Wrapper>
    </>
  );
};

export default Index;
