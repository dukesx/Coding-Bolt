import {
  Button,
  Container,
  Grid,
  Col,
  Card,
  Badge,
  CardSection,
  Text,
  Divider,
} from "@mantine/core";
import Wrapper from "../components/global/wrapper";
import Image2 from "../components/global/image";
import { BookmarkSimple, Heart, Lightning } from "phosphor-react";
import ReactOriginalIcon from "react-devicons/react/original";
import AngularjsOriginalIcon from "react-devicons/angularjs/original";
import Image from "next/image";

export default function Home() {
  return (
    <Wrapper>
      <Container size="lg" className="pt-20 px-0">
        <Grid className="">
          <Col span={12} xl={7} lg={7} md={7} sm={7}>
            <Card className="w-full bg-transparent ">
              <div className="flex">
                <div className="mr-4 min-w-[80px] max-w-[80px] xs:min-w-[60px] xxs:min-w-[60px]">
                  <Image2
                    height={120}
                    width={120}
                    alt="something"
                    name="ZzfNjwjAxJ.jpg"
                    className="rounded-md"
                    hash=""
                  />
                </div>
                <div className="max-w-[80%]">
                  <div className="flex mb-1">
                    <Badge
                      className="border-none pl-0"
                      variant="outline"
                      leftSection={
                        // <i className="devicon-react-original colored"></i>
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          alt=""
                          width="16"
                          height="16"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        ></img>
                      }
                    >
                      React
                    </Badge>

                    <Badge
                      className="border-none pl-0"
                      variant="outline"
                      color="red"
                      leftSection={
                        <i className="devicon-angularjs-plain text-lg text-red-600" />
                      }
                    >
                      Angular
                    </Badge>
                  </div>
                  <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm">
                    A React Application Meant To Keep Track Of The Most Popular
                    Crypto Currencies Status
                  </Text>
                  <Text className="text-sm clamp-1 mt-2 xs:text-xs xs:hidden xxs:hidden">
                    A single page application meant to keep track of the most
                    popular crypto currencies status. The user can sort the
                    coins by highest gains or losses in the previous 24 hours,
                    as well as click on a single coin to display more details
                    about it.
                  </Text>
                  <div className="flex mt-2">
                    <Text className="text-gray-400">
                      {/* <BookmarkSimple size={22} /> */}
                      <i className="ph-bookmark-simple text-gray-400 text-xl" />
                    </Text>
                    <Divider className="mx-2" orientation="vertical" />
                    <Text className="text-gray-400">
                      <i className="ph-lightning text-yellow-400 text-xl" />
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            className="bg-red-200 sticky"
            span={12}
            xl={5}
            lg={5}
            md={5}
            sm={5}
          ></Col>
        </Grid>
      </Container>
    </Wrapper>
  );
}
