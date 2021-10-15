import {
  Container,
  Grid,
  Col,
  Avatar,
  Card,
  Text,
  Divider,
} from "@mantine/core";
import Wrapper from "../components/global/wrapper";
import Image2 from "../components/global/image";
import {
  ArrowSquareOut,
  BookmarkSimple,
  HandsClapping,
  Heart,
  ThumbsUp,
} from "phosphor-react";
import { Reaction, ReactionsHorizontal } from "components/global/reactions";
import { ReactionLayout } from "types/global/defaults";
import ListVar2 from "components/global/lists/var-2";
import ListHeaderVar1 from "components/global/lists/headers/var1";
import ListFooterVar1 from "components/global/lists/footers/var-1";
export default function Home() {
  return (
    <Wrapper>
      <Container size="lg" className="pt-2 px-0">
        <Grid className="sm:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse w-full">
          <Col
            className="xs:pt-0 xxs:pt-0 sm:pt-0"
            span={12}
            xl={7}
            lg={7}
            md={7}
            sm={7}
          >
            <ListVar2
              title=" A React Application Meant To Keep Track Of The Most Popular
              Crypto Currencies Status"
              description="A single page application meant to keep track of the most
              popular crypto currencies status. The user can sort the
              coins by highest gains or losses in the previous 24 hours,
              as well as click on a single coin to display more details
              about it."
              header={
                <ListHeaderVar1
                  category={{
                    title: "React js",
                    url: "/",
                    icon: {
                      color: "blue",
                      component: <i className="devicon-react-plain text-lg" />,
                    },
                  }}
                  team={{
                    url: "/",
                    title: "React Dev Team",
                  }}
                />
              }
              image={{
                name: "ZzfNjwjAxJ.jpg",
              }}
              footer={
                <ListFooterVar1
                  bolted={false}
                  bookmarked={false}
                  author={{
                    image: "ZzfNjwjAxJ.jpg",
                    name: "Ben Hur kingsley",
                  }}
                />
              }
            />

            <ListVar2
              title=" A React Application Meant To Keep Track Of The Most Popular
              Crypto Currencies Status"
              description="A single page application meant to keep track of the most
              popular crypto currencies status. The user can sort the
              coins by highest gains or losses in the previous 24 hours,
              as well as click on a single coin to display more details
              about it."
              header={
                <ListHeaderVar1
                  category={{
                    title: "Angular js",
                    url: "/",
                    icon: {
                      color: "red",
                      component: (
                        <i className="devicon-angularjs-plain text-lg" />
                      ),
                    },
                  }}
                  team={{
                    url: "/",
                    title: "Google Engineering",
                  }}
                />
              }
              image={{
                name: "ZzfNjwjAxJ.jpg",
              }}
              footer={
                <ListFooterVar1
                  bolted
                  bookmarked
                  author={{
                    image: "ZzfNjwjAxJ.jpg",
                    name: "Muhammad Afzaal Afridi",
                  }}
                />
              }
            />
          </Col>
          <Col
            className="top-0 xs:relative xxs:relative xs:px-4 sm:relative sticky h-full"
            span={12}
            xl={5}
            lg={5}
            md={5}
            sm={5}
          >
            <div className="xs:flex xs:overflow-x-scroll xs:w-full xxs:flex xxs:overflow-x-scroll xxs:w-full sm:flex sm:overflow-x-scroll sm:w-full">
              <Card className="bg-transparent min-w-[320px] xxs:min-w-[80%]">
                <div className="">
                  <div>
                    <Text className="font-semibold">Top Comments</Text>
                  </div>
                  <div>
                    <div className="my-2">
                      <Text className="my-2 text-sm clamp-2">
                        I dont think this is right, needs rectification
                      </Text>
                      <div className="flex">
                        <div className="flex items-center">
                          <Text
                            variant="link"
                            component="a"
                            href="#"
                            className="flex items-center"
                          >
                            <ArrowSquareOut
                              className="hover:underline"
                              size={17}
                            />
                            <div className="ml-1 text-xs clamp-2 font-semibold cursor-pointer">
                              View article
                            </div>
                          </Text>
                          <Divider orientation="vertical" className="mx-2" />
                          <div className="flex items-center">
                            <Text className="flex mr-2" color="blue">
                              <ThumbsUp weight="bold" />
                            </Text>
                            <Text className="text-sm">44 Votes</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text className="my-2 text-sm clamp-2">
                        The list is very acurate, good job👏👏
                      </Text>
                      <div className="flex">
                        <div className="flex items-center">
                          <Text
                            variant="link"
                            component="a"
                            href="#"
                            className="flex items-center"
                          >
                            <ArrowSquareOut
                              className="hover:underline"
                              size={17}
                            />
                            <div className="ml-1 text-xs clamp-2 font-semibold cursor-pointer font-semibold">
                              View article
                            </div>
                          </Text>
                          <Divider orientation="vertical" className="mx-2" />
                          <div className="">
                            <div className="flex items-center">
                              <Text className="flex mr-2" color="blue">
                                <ThumbsUp weight="bold" />
                              </Text>
                              <Text className="text-sm">27 Votes</Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text className="my-2 text-sm clamp-2">
                        Lets work on something together. Although i think that
                        the project can make use of alot of improvements
                      </Text>
                      <div className="flex">
                        <div className="flex items-center">
                          <Text
                            variant="link"
                            component="a"
                            href="#"
                            className="flex items-center"
                          >
                            <ArrowSquareOut
                              className="hover:underline"
                              size={17}
                            />
                            <div className="ml-1 text-xs clamp-2 font-semibold cursor-pointer">
                              View article
                            </div>
                          </Text>
                          <Divider orientation="vertical" className="mx-2" />
                          <div className="">
                            <div className="flex items-center">
                              <Text className="flex mr-2" color="blue">
                                <ThumbsUp weight="bold" />
                              </Text>
                              <Text className="text-sm">9 Votes</Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text className="my-2 text-sm clamp-2">
                        Awesome work dude 🔥
                      </Text>
                      <div className="flex">
                        <div className="flex items-center">
                          <Text
                            variant="link"
                            component="a"
                            href="#"
                            className="flex items-center"
                          >
                            <ArrowSquareOut
                              className="hover:underline"
                              size={17}
                            />
                            <div className="ml-1 text-xs clamp-2 font-semibold cursor-pointer">
                              View article
                            </div>
                          </Text>
                          <Divider orientation="vertical" className="mx-2" />
                          <div className="">
                            <div className="flex items-center">
                              <Text className="flex mr-2" color="blue">
                                <ThumbsUp weight="bold" />
                              </Text>
                              <Text className="text-sm">4 Votes</Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-transparent min-w-[320px] xxs:min-w-[80%]">
                <div className="">
                  <div>
                    <Text className="font-semibold">🔥 Hot! Articles</Text>
                  </div>
                  <div>
                    <div className="my-2">
                      <Text className="my-2 text-sm clamp-2 font-medium">
                        I dont think this is right, needs rectification
                      </Text>
                      <div className="flex">
                        <div className="flex items-center">
                          <Text className="flex items-center text-gray-500 dark:text-gray-400">
                            <BookmarkSimple size={19} />
                            <div className="ml-1 text-xs clamp-2 font-semibold cursor-pointer">
                              Read later
                            </div>
                          </Text>
                          <Divider orientation="vertical" className="mx-2" />
                          <div className="">
                            <Avatar size={30} radius="xl">
                              <Image2
                                height={60}
                                width={60}
                                alt="something"
                                name="ZzfNjwjAxJ.jpg"
                                className="rounded-md"
                                hash=""
                              />
                            </Avatar>
                          </div>
                          <Divider orientation="vertical" className="mx-2" />
                          <ReactionsHorizontal reacts={20}>
                            <Reaction
                              layout={ReactionLayout.Custom}
                              icon={
                                <HandsClapping size={22} weight="duotone" />
                              }
                              iconColor="yellow"
                            />
                          </ReactionsHorizontal>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text className="my-2 text-sm clamp-2 font-medium">
                        The list is very acurate, good job👏👏
                      </Text>
                      <div className="flex">
                        <div className="flex items-center">
                          <Text className="flex items-center text-gray-500 dark:text-gray-400">
                            <BookmarkSimple size={19} />
                            <div className="ml-1 text-xs clamp-2 font-semibold cursor-pointer">
                              Read later
                            </div>
                          </Text>
                          <Divider orientation="vertical" className="mx-2" />
                          <div className="">
                            <Avatar size={30} radius="xl">
                              <Image2
                                height={60}
                                width={60}
                                alt="something"
                                name="ZzfNjwjAxJ.jpg"
                                className="rounded-md"
                                hash=""
                              />
                            </Avatar>
                          </div>
                          <Divider orientation="vertical" className="mx-2" />
                          <ReactionsHorizontal reacts={40}>
                            <Reaction
                              layout={ReactionLayout.Custom}
                              icon={<Heart size={22} weight="duotone" />}
                              iconColor="red"
                            />
                          </ReactionsHorizontal>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text className="my-2 text-sm clamp-2 font-medium">
                        Lets work on something together. Although i think that
                        the project can make use of alot of improvements
                      </Text>
                      <div className="flex">
                        <div className="flex items-center">
                          <Text className="flex items-center text-gray-500 dark:text-gray-400">
                            <BookmarkSimple size={19} />
                            <div className="ml-1 text-xs clamp-2 font-semibold cursor-pointer">
                              Read later
                            </div>
                          </Text>
                          <Divider orientation="vertical" className="mx-2" />
                          <div className="">
                            <Avatar size={30} radius="xl">
                              <Image2
                                height={60}
                                width={60}
                                alt="something"
                                name="ZzfNjwjAxJ.jpg"
                                className="rounded-md"
                                hash=""
                              />
                            </Avatar>
                          </div>
                          <Divider orientation="vertical" className="mx-2" />
                          <ReactionsHorizontal reacts={100}>
                            <Reaction
                              layout={ReactionLayout.Custom}
                              icon={<Heart size={22} weight="duotone" />}
                              iconColor="red"
                            />

                            <Reaction
                              layout={ReactionLayout.Custom}
                              icon={
                                <HandsClapping size={22} weight="duotone" />
                              }
                              iconColor="yellow"
                            />
                          </ReactionsHorizontal>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text className="my-2 text-sm clamp-2 font-medium">
                        Awesome work dude 🔥
                      </Text>
                      <div className="flex">
                        <div className="flex items-center">
                          <Text className="flex items-center text-gray-500 dark:text-gray-400">
                            <BookmarkSimple size={19} />
                            <div className="ml-1 text-xs clamp-2 font-semibold cursor-pointer">
                              Read later
                            </div>
                          </Text>
                          <Divider orientation="vertical" className="mx-2" />
                          <div className="">
                            <Avatar size={30} radius="xl">
                              <Image2
                                height={60}
                                width={60}
                                alt="something"
                                name="ZzfNjwjAxJ.jpg"
                                className="rounded-md"
                                hash=""
                              />
                            </Avatar>
                          </div>
                          <Divider orientation="vertical" className="mx-2" />
                          <ReactionsHorizontal reacts={500}>
                            <Reaction
                              layout={ReactionLayout.Custom}
                              icon={<Heart size={22} weight="duotone" />}
                              iconColor="red"
                            />
                            <Reaction
                              layout={ReactionLayout.Custom}
                              icon={<ThumbsUp size={22} weight="duotone" />}
                              iconColor="blue"
                            />
                          </ReactionsHorizontal>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Grid>
      </Container>
    </Wrapper>
  );
}
