/* eslint-disable jsx-a11y/alt-text */
import Wrapper from "components/global/wrapper";
import Head from "next/head";
import {
  Paper,
  Card,
  Title,
  Text,
  Grid,
  Col,
  SegmentedControl,
} from "@mantine/core";
import VerticalArticleCard from "components/global/article/list/vertical";
import HorizontalArticleCard from "components/global/article/list/horizontal";
import Sticky from "react-stickynode";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import SimpleBar from "simplebar-react";
import { useState } from "react";
import {
  TextT,
  BellSlash,
  MinusCircle,
  CheckCircle,
  CaretRight,
  CaretLeft,
  Bell,
  BellRinging,
  ArrowLeft,
  ArrowRight,
} from "phosphor-react";
import { Arrow, Fade } from "@egjs/flicking-plugins";

const Index: React.FC = () => {
  const [segment, setSegment] = useState("followed");
  return (
    <>
      <Head>
        <title>Welcome to Coding Bolt</title>
      </Head>
      <Wrapper>
        <Paper className="mt-0">
          {/* <div className="bg-gray-100 dark:bg-transparent pt-2 pb-2 xs:pb-0">
            <Flicking
              hideBeforeInit={true}
              className="pb-12"
              align="center"
              horizontal
              id="newer"
              resizeOnContentsReady
              plugins={[new Arrow(), new Fade()]}
              adaptive
              circular={true}
              defaultIndex={1}
            >
              <div className="w-[350px] xs:w-[330px] xs:mx-1 xxs:w-[320px] xxs:mx-1 h-[250px] mx-2">
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
              </div>
              <div className="w-[350px] xs:w-[330px] xs:mx-1 xxs:w-[320px] xxs:mx-1 h-[250px] mx-2">
                <VerticalArticleCard
                  title="Seven Seo Trends You Should Know Before Even Starting Your Business"
                  description="It works every time."
                  cover={{
                    height: 250,
                    width: 500,
                    alt: "an image",
                    preload: false,
                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAdACADASIAAhEBAxEB/8QAGgABAQACAwAAAAAAAAAAAAAABwgDBAUGCf/EAC4QAAEDAwMCBAQHAAAAAAAAAAECAwQFBhEAEiEHMRMiQVEIFELBFWFxgZKh0f/EABcBAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAkEQACAQMEAAcAAAAAAAAAAAABAhEAAxIEITFBBRNhgZGhsf/aAAwDAQACEQMRAD8AW+pkCx7So7teqdrUiTI3hKAYjYK1n340F1brRckxlUW3o0OiQvpTEaSjA/X/AAaozq5ajV42c/AcfVHW04iQh5KQoo2nng9/KTqfqdQrBiLQzCiVe8KjhRS20kqaVjv22ox7nJxqHV+ILpSEFtnY9KJ+TsB7mnS2X7AFDlzXJJlylmr1WbNfz5kBZ/tR+w11wVQlR+VaZjZ+sjev+SvtjTN1AsqtXHTTMNDpVBRFbcU0ylXmUlAJKStA8JOR2yrKuMaDTCd27kgkjunHOq7RuPaW5cXEnqQfylcKrFQZivUJRBSQeQRqcOqFauW3bsdoltw2YwUESmZLaSo+H2wlB8iRwUkYGcn3062nUHKpbVNmvgB15lKlY98aMfiWioj2tCrzJUibBkBlJSSnehzgpJHPBAP7aosi0XHnTj6c/dI+USnPU1K10VitVaozPxSZLkSCoNuMvOZWraeAGxnCQDx6axVeFDhyM035lTBSlaVSdiXVcc5SknA9QeD7+mttpb8iRIbckOAu4UpSfLk8DnHpg9s656XSIlJojVVWHHE7dngtKDW70O5WDnP5Aa0dkhkQbTsTzQQtvlzX/9k=",
                    name: "DUYxk8Q2CD.jpg",
                  }}
                />
              </div>

              <div className="w-[350px] xs:w-[330px] xs:mx-1 xxs:w-[320px] xxs:mx-1 h-[250px] mx-2">
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
              </div>
              <div className="w-[350px] xs:w-[330px] xs:mx-1 xxs:w-[320px] xxs:mx-1 h-[250px] mx-2">
                <VerticalArticleCard
                  title="Seven Seo Trends You Should Know Before Even Starting Your Business"
                  description="It works every time."
                  cover={{
                    height: 250,
                    width: 500,
                    alt: "an image",
                    preload: false,
                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAdACADASIAAhEBAxEB/8QAGgABAQACAwAAAAAAAAAAAAAABwgDBAUGCf/EAC4QAAEDAwMCBAQHAAAAAAAAAAECAwQFBhEAEiEHMRMiQVEIFELBFWFxgZKh0f/EABcBAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAkEQACAQMEAAcAAAAAAAAAAAABAhEAAxIEITFBBRNhgZGhsf/aAAwDAQACEQMRAD8AW+pkCx7So7teqdrUiTI3hKAYjYK1n340F1brRckxlUW3o0OiQvpTEaSjA/X/AAaozq5ajV42c/AcfVHW04iQh5KQoo2nng9/KTqfqdQrBiLQzCiVe8KjhRS20kqaVjv22ox7nJxqHV+ILpSEFtnY9KJ+TsB7mnS2X7AFDlzXJJlylmr1WbNfz5kBZ/tR+w11wVQlR+VaZjZ+sjev+SvtjTN1AsqtXHTTMNDpVBRFbcU0ylXmUlAJKStA8JOR2yrKuMaDTCd27kgkjunHOq7RuPaW5cXEnqQfylcKrFQZivUJRBSQeQRqcOqFauW3bsdoltw2YwUESmZLaSo+H2wlB8iRwUkYGcn3062nUHKpbVNmvgB15lKlY98aMfiWioj2tCrzJUibBkBlJSSnehzgpJHPBAP7aosi0XHnTj6c/dI+USnPU1K10VitVaozPxSZLkSCoNuMvOZWraeAGxnCQDx6axVeFDhyM035lTBSlaVSdiXVcc5SknA9QeD7+mttpb8iRIbckOAu4UpSfLk8DnHpg9s656XSIlJojVVWHHE7dngtKDW70O5WDnP5Aa0dkhkQbTsTzQQtvlzX/9k=",
                    name: "DUYxk8Q2CD.jpg",
                  }}
                />
              </div>

              <div className="w-[350px] xs:w-[330px] xs:mx-1 xxs:w-[320px] xxs:mx-1 h-[250px] mx-2">
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
              </div>
              <div className="w-[350px] xs:w-[330px] xs:mx-1 xxs:w-[320px] xxs:mx-1 h-[250px] mx-2">
                <VerticalArticleCard
                  title="Seven Seo Trends You Should Know Before Even Starting Your Business"
                  description="It works every time."
                  cover={{
                    height: 250,
                    width: 500,
                    alt: "an image",
                    preload: false,
                    hash: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAdACADASIAAhEBAxEB/8QAGgABAQACAwAAAAAAAAAAAAAABwgDBAUGCf/EAC4QAAEDAwMCBAQHAAAAAAAAAAECAwQFBhEAEiEHMRMiQVEIFELBFWFxgZKh0f/EABcBAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAkEQACAQMEAAcAAAAAAAAAAAABAhEAAxIEITFBBRNhgZGhsf/aAAwDAQACEQMRAD8AW+pkCx7So7teqdrUiTI3hKAYjYK1n340F1brRckxlUW3o0OiQvpTEaSjA/X/AAaozq5ajV42c/AcfVHW04iQh5KQoo2nng9/KTqfqdQrBiLQzCiVe8KjhRS20kqaVjv22ox7nJxqHV+ILpSEFtnY9KJ+TsB7mnS2X7AFDlzXJJlylmr1WbNfz5kBZ/tR+w11wVQlR+VaZjZ+sjev+SvtjTN1AsqtXHTTMNDpVBRFbcU0ylXmUlAJKStA8JOR2yrKuMaDTCd27kgkjunHOq7RuPaW5cXEnqQfylcKrFQZivUJRBSQeQRqcOqFauW3bsdoltw2YwUESmZLaSo+H2wlB8iRwUkYGcn3062nUHKpbVNmvgB15lKlY98aMfiWioj2tCrzJUibBkBlJSSnehzgpJHPBAP7aosi0XHnTj6c/dI+USnPU1K10VitVaozPxSZLkSCoNuMvOZWraeAGxnCQDx6axVeFDhyM035lTBSlaVSdiXVcc5SknA9QeD7+mttpb8iRIbckOAu4UpSfLk8DnHpg9s656XSIlJojVVWHHE7dngtKDW70O5WDnP5Aa0dkhkQbTsTzQQtvlzX/9k=",
                    name: "DUYxk8Q2CD.jpg",
                  }}
                />
              </div>

              <ViewportSlot>
                <span className="flicking-arrow-prev xxs:hidden xs:hidden xxs:w-[40px] xxs:h-[40px] xs:w-[40px] from-blue-400 to-blue-600 xs:h-[40px] h-[50px] w-[50px] top-[36%] after:hidden before:hidden bg-gradient-to-r dark:from-pink-400 dark:to-yellow-500 flex flex-col items-center justify-center rounded-full">
                  <CaretLeft
                    className="xs:h-[18px] xs:w-[18px] xxs:h-[18px] xxs:w-[18px]"
                    size={22}
                    color="white"
                    weight="bold"
                  />
                </span>
                <span className="flicking-arrow-next xxs:hidden xs:hidden xxs:w-[40px] xxs:h-[40px] xs:w-[40px] from-blue-400 to-blue-600 xs:h-[40px] h-[50px] w-[50px] top-[36%] after:hidden before:hidden bg-gradient-to-r dark:from-pink-400 dark:to-yellow-500 flex flex-col items-center justify-center rounded-full">
                  <CaretRight
                    className="xs:h-[18px] xs:w-[18px] xxs:h-[18px] xxs:w-[18px]"
                    size={22}
                    color="white"
                    weight="bold"
                  />
                </span>
              </ViewportSlot>
            </Flicking>
          </div> */}

          <Card className="md:px-0 pt-0 xs:px-0 xxs:px-0 sm:px-0">
            <Grid
              id="index-layout-grid"
              className="pt-0 mt-4 xs:mt-0 mx-auto dark:bg-transparent bg-opacity-50"
              grow
              gutter={15}
            >
              <Col
                span={6}
                md={5}
                lg={5}
                xl={3}
                className="md:px-0 xs:hidden xxs:hidden"
              >
                <Sticky bottomBoundary="#index-article-grid">
                  <div className="w-full ml-8 md:ml-2 mb-6">
                    <SegmentedControl
                      className="mt-6 mx-auto"
                      data={[
                        { value: "followed", label: "Followed Tags" },
                        { value: "alltags", label: "All Tags" },
                        { value: "blocked", label: "Blocked Tags" },
                      ]}
                      onChange={setSegment}
                      value={segment}
                    />
                  </div>

                  {segment == "followed" ? (
                    <SimpleBar
                      style={{ maxHeight: 300 }}
                      className="pl-8 md:pl-2 flex flex-col capitalize max-w-[320px] min-w-[200px]"
                    >
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 mt-0 mb-2 mx-2 rounded-xl w-max">
                          #react
                        </Text>

                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <BellSlash size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #Javscript
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <BellSlash size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #Supabase
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <BellSlash size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #PostgreSQL
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <BellSlash size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #Svelte
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <BellSlash size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #Mongo
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <BellSlash size={22} />
                        </Text>
                      </div>
                    </SimpleBar>
                  ) : segment == "alltags" ? (
                    <SimpleBar
                      style={{ maxHeight: 300 }}
                      className="pl-8 md:pl-2 flex flex-col capitalize max-w-[320px] min-w-[200px]"
                    >
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 mt-0 mb-2 mx-2 rounded-xl w-max">
                          #react
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <Bell size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #Javscript
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <Bell size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #Supabase
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <Bell size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #PostgreSQL
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <Bell size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #Svelte
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <Bell size={22} />
                        </Text>
                      </div>
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #Mongo
                        </Text>
                        <Text className="ml-auto mr-2 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <MinusCircle size={22} />
                        </Text>
                        <Text className="mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <Bell size={22} />
                        </Text>
                      </div>

                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 m-2 rounded-xl w-max">
                          #NoSQL
                        </Text>
                        <Text className="ml-auto mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <BellRinging size={20} />
                        </Text>
                      </div>
                    </SimpleBar>
                  ) : (
                    <SimpleBar
                      style={{ maxHeight: 300 }}
                      className="pl-8 md:pl-2 flex flex-col capitalize max-w-[320px] min-w-[200px]"
                    >
                      <div className="flex items-center w-full">
                        <Text className="font-semibold bg-gray-100 dark:bg-manDark p-3 mt-0 mb-2 mx-2 rounded-xl w-max">
                          #react
                        </Text>
                        <Text className="ml-auto mr-6 cursor-pointer bg-gray-100  dark:bg-manDark p-1 rounded-lg">
                          <CheckCircle size={22} />
                        </Text>
                      </div>
                    </SimpleBar>
                  )}

                  <div className="pt-6 pb-6 pl-6 flex">
                    <Title
                      className="text-gray-800 dark:text-white uppercase font-bold align-middle mt-3 ml-3"
                      order={3}
                    >
                      Bolting R.n ⚡
                    </Title>
                  </div>

                  <div>
                    <HorizontalArticleCard title="Every React Developer should know these libraries" />
                    <HorizontalArticleCard title="Every React Developer should know these libraries" />
                    <HorizontalArticleCard title="Every React Developer should know these libraries" />
                  </div>

                  <div className="pt-6 pb-6 pl-6 flex">
                    <Title
                      className="text-gray-800 dark:text-white uppercase font-bold align-middle mt-3 ml-3"
                      order={3}
                    >
                      On Fire 🔥
                    </Title>
                  </div>

                  <div>
                    <HorizontalArticleCard title="Every React Developer should know these libraries" />
                    <HorizontalArticleCard title="Every React Developer should know these libraries" />
                    <HorizontalArticleCard title="Every React Developer should know these libraries" />
                  </div>
                </Sticky>
              </Col>
              <Col
                span={6}
                md={7}
                lg={7}
                xl={6}
                className="md:px-3 max-w-[600px] pt-6 xs:pt-4 xxs:pt-4"
              >
                {/* <div className="pt-2 pb-6 pl-6 flex">
                  <Title
                    className="text-gray-800 ml-3 dark:text-white uppercase font-bold mt-[3px]"
                    order={3}
                  ></Title>
                </div> */}
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
                <div className="py-2" />
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
                <div className="py-2" />

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
                <div className="py-2" />

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
              </Col>
              <Col
                className="xs:hidden xxs:hidden md:hidden sm:hidden lg:hidden pl-10"
                span={6}
                md={6}
                lg={3}
                xl={3}
              >
                <Sticky bottomBoundary="#index-article-grid">
                  <div className="pt-6 pb-6 pl-6 flex">
                    <Title
                      className="text-gray-800 dark:text-white uppercase font-bold align-middle mt-3 ml-3"
                      order={3}
                    >
                      Good Reads ✅
                    </Title>
                  </div>
                  <VerticalArticleCard
                    title="The Biggest Contribution Of Seo To Humanity."
                    description="Educational YouTube channels are the best. Here is the list of
                my personal favorites. Feel free to add more!"
                  />
                  <div className="py-1" />
                  <HorizontalArticleCard
                    title="All You Need to Know About Hiring Python Experts for Your
                Project"
                  />

                  <HorizontalArticleCard
                    title="All You Need to Know About Hiring Python Experts for Your
                Project"
                  />

                  <HorizontalArticleCard
                    title="All You Need to Know About Hiring Python Experts for Your
                Project"
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
