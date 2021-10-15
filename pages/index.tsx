import {
  Button,
  Container,
  Grid,
  Col,
  Avatar,
  Card,
  AvatarsGroup,
  Badge,
  CardSection,
  Text,
  Divider,
} from "@mantine/core";
import Wrapper from "../components/global/wrapper";
import Image2 from "../components/global/image";
import {
  ArrowSquareOut,
  ArrowSquareUpRight,
  BookmarkSimple,
  Heart,
  Lightning,
} from "phosphor-react";
// import ReactOriginalIcon from "react-devicons/react/original";
// import AngularjsOriginalIcon from "react-devicons/angularjs/original";
import Flicking from "@egjs/react-flicking";
export default function Home() {
  return (
    <Wrapper>
      <Container size="lg" className="pt-2 px-0">
        <Grid className="">
          <Col span={12} xl={7} lg={7} md={7} sm={7}>
            <Card className="w-full bg-transparent mt-2">
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
                  <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm md:text-sm">
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
                      <i className="ph-bookmark-simple-fill text-xl" />
                    </Text>
                    <Divider className="mx-2" orientation="vertical" />
                    <Text className="text-gray-400">
                      <i className="ph-lightning text-yellow-400 text-xl" />
                    </Text>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="w-full bg-transparent mt-2">
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
                  <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm md:text-sm">
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

            <Card className="w-full bg-transparent mt-2">
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
                  <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm md:text-sm">
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

            <Card className="w-full bg-transparent mt-2">
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
                  <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm md:text-sm">
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

            <Card className="w-full bg-transparent mt-2">
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
                  <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm md:text-sm">
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

            <Card className="w-full bg-transparent mt-2">
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
                  <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm md:text-sm">
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

            <Card className="w-full bg-transparent mt-2">
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
                  <Text className="font-semibold clamp-2 text-base xs:text-sm xxs:text-sm md:text-sm">
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
            className="sticky top-0 h-full"
            span={12}
            xl={5}
            lg={5}
            md={5}
            sm={5}
          >
            <Card className="bg-transparent">
              <div className="">
                <div>
                  <Text className="font-semibold">Top Comments</Text>
                </div>
                <div>
                  <div className="my-2">
                    <Text className="my-2 text-sm clamp-2">
                      I don't think this is right, needs rectification
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
                          <AvatarsGroup size={30} limit={3}>
                            <Avatar src="https://ik.imagekit.io/codingbolt/tr:w-128,h-120,q-75,/ZzfNjwjAxJ.jpg" />
                            <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
                            <Avatar src="https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg" />
                            <Avatar />
                          </AvatarsGroup>
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
                          <AvatarsGroup size={30} limit={3}>
                            <Avatar src="https://ik.imagekit.io/codingbolt/tr:w-128,h-120,q-75,/ZzfNjwjAxJ.jpg" />
                            <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
                            <Avatar src="https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg" />
                            <Avatar />
                          </AvatarsGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Text className="my-2 text-sm clamp-2">
                      Let's work on something together. Although i think that
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
                          <AvatarsGroup size={30} limit={3}>
                            <Avatar src="https://ik.imagekit.io/codingbolt/tr:w-128,h-120,q-75,/ZzfNjwjAxJ.jpg" />
                            <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
                            <Avatar src="https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg" />
                            <Avatar />
                          </AvatarsGroup>
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
                          <AvatarsGroup size={30} limit={3}>
                            <Avatar src="https://ik.imagekit.io/codingbolt/tr:w-128,h-120,q-75,/ZzfNjwjAxJ.jpg" />
                            <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
                            <Avatar src="https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg" />
                            <Avatar />
                          </AvatarsGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-transparent">
              <div className="">
                <div>
                  <Text className="font-semibold">🔥 Hot! Articles</Text>
                </div>
                <div>
                  <div className="my-2">
                    <Text className="my-2 text-sm clamp-2 font-medium">
                      I don't think this is right, needs rectification
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
                          <AvatarsGroup size={30} limit={3}>
                            <Avatar src="https://ik.imagekit.io/codingbolt/tr:w-128,h-120,q-75,/ZzfNjwjAxJ.jpg" />
                            <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
                            <Avatar src="https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg" />
                            <Avatar />
                          </AvatarsGroup>
                        </div>
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
                          <AvatarsGroup size={30} limit={3}>
                            <Avatar src="https://ik.imagekit.io/codingbolt/tr:w-128,h-120,q-75,/ZzfNjwjAxJ.jpg" />
                            <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
                            <Avatar src="https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg" />
                            <Avatar />
                          </AvatarsGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Text className="my-2 text-sm clamp-2 font-medium">
                      Let's work on something together. Although i think that
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
                          <AvatarsGroup size={30} limit={3}>
                            <Avatar src="https://ik.imagekit.io/codingbolt/tr:w-128,h-120,q-75,/ZzfNjwjAxJ.jpg" />
                            <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
                            <Avatar src="https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg" />
                            <Avatar />
                          </AvatarsGroup>
                        </div>
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
                          <AvatarsGroup size={30} limit={3}>
                            <Avatar src="https://ik.imagekit.io/codingbolt/tr:w-128,h-120,q-75,/ZzfNjwjAxJ.jpg" />
                            <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
                            <Avatar src="https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg" />
                            <Avatar />
                          </AvatarsGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Grid>
      </Container>
    </Wrapper>
  );
}
