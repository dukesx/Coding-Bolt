import {
  Container,
  Grid,
  Col,
  Avatar,
  Button,
  Text,
  Divider,
} from "@mantine/core";
import Wrapper from "../components/global/wrapper";
import Image2 from "../components/global/image";
import {
  ArrowSquareOut,
  BookmarkSimple,
  HandsClapping,
  ThumbsUp,
} from "phosphor-react";
import { Reaction, ReactionsHorizontal } from "components/global/reactions";
import { ReactionLayout } from "types/global/defaults";
import ListVar2 from "components/global/lists/var-2";
import ListHeaderVar1 from "components/global/lists/headers/var1";
import ListFooterVar1 from "components/global/lists/footers/var-1";
import { supabase } from "lib/supabaseClient";
import WidgetVar1 from "components/global/widgets/var1";
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
            <Button
              onClick={async () => {
                const { data, error } = await supabase
                  .from("categories")
                  .insert(
                    {
                      title: "hello",
                    },
                    {
                      count: "estimated",
                    }
                  );

                if (error) {
                  console.log(error);
                }
              }}
            >
              Delete
            </Button>
            <ListVar2
              title=" A React Application Meant To Keep Track Of The Most Popular
              Crypto Currencies Status"
              description="A single page application meant to keep track of the most
              popular crypto currencies status. The user can sort the
              coins by highest gains or losses in the previous 24 hours,
              as well as click on a single coin to display more details
              about it."
              url="/"
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
              url="/"
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
              <WidgetVar1
                className="ml-3"
                title="Top Comments"
                data={[
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "i",
                  },
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "t",
                  },
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "t",
                  },
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "s",
                  },
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "a",
                  },
                ]}
                footer={
                  <div className="flex ml-3">
                    <div className="flex items-center">
                      <Text
                        variant="link"
                        component="a"
                        href="#"
                        className="flex items-center"
                      >
                        <ArrowSquareOut className="hover:underline" size={17} />
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
                }
              />

              <WidgetVar1
                className="ml-3"
                title="🔥 Hot! Articles"
                data={[
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "i",
                  },
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "d",
                  },
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "t",
                  },
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "t",
                  },
                  {
                    title: "I dont think this is right, needs rectification",
                    slug: "i",
                  },
                ]}
                footer={
                  <div className="flex ml-3">
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
                      <Divider orientation="vertical" className="ml-2 mr-4" />
                      <ReactionsHorizontal reacts={20}>
                        <Reaction
                          layout={ReactionLayout.Custom}
                          icon={<HandsClapping size={22} weight="duotone" />}
                          iconColor="yellow"
                        />
                      </ReactionsHorizontal>
                    </div>
                  </div>
                }
              />
            </div>
          </Col>
        </Grid>
      </Container>
    </Wrapper>
  );
}
