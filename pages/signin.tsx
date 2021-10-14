import { SimpleGrid, Col, Card, Text, Button, Grid } from "@mantine/core";
import { SigninProps } from "types/global/defaults";
import Flicking from "@egjs/react-flicking";
import Wrapper from "components/global/wrapper";
import {
  BellRinging,
  Bookmarks,
  BookmarkSimple,
  DiscordLogo,
  Heart,
  Rss,
} from "phosphor-react";
import GoogleOrignalIcon from "react-devicons/google/original";
import GithubOriginalIcon from "react-devicons/github/original";
import { SignInCarouselCard } from "components/signin/cards";
import { supabase } from "lib/supabaseClient";

/**
 * Sign in page for authentication
 * @param props
 * @todo add integration with supabase by passing user in props
 *
 */
const SignInComponent: React.FC<SigninProps> = (props) => {
  return (
    <Wrapper>
      <Grid className="mt-20 mb-0 mx-0 w-full" gutter={24}>
        <Col span={12} xs={12} xl={8} lg={8} md={8} sm={7}>
          <Text className="font-black uppercase p-2" size="xl">
            Sign up and Get These Goodies 🤟
          </Text>
          <Flicking
            className="p-4 dark:bg-transparent w-full drop-shadow-xl"
            align="prev"
            circular
          >
            <div className="w-[400px] xs:w-full xxs:w-full h-[500px] mx-2 shadow-lg ">
              <SignInCarouselCard
                title="Favorites"
                icon={
                  <Heart
                    className="mx-auto"
                    weight="duotone"
                    size={150}
                    color="#FA5252"
                  />
                }
                description="Love creating playlists ? So create your own playlist of favorite articles, and more with just a few clicks"
              />
            </div>
            <div className="w-[400px] xs:w-full xxs:w-full h-[500px] mx-2 shadow-lg ">
              <SignInCarouselCard
                title="Bookmarks"
                icon={
                  <Bookmarks
                    className="mx-auto"
                    weight="duotone"
                    size={150}
                    color="#228BE6"
                  />
                }
                description=" Like an article ? Mark it ! read it later or share it with
              your friends, your articles are with you, whether you are on
              PC, Mobile or Tablet"
              />
            </div>
            <div className="w-[400px] xs:w-full xxs:w-full h-[500px] mx-2 shadow-lg ">
              <SignInCarouselCard
                title="Customized Feeds"
                icon={
                  <Rss
                    className="mx-auto"
                    weight="duotone"
                    size={150}
                    color="#FAB005"
                  />
                }
                description="Subscribe to your favorite tags, categories, authors, pages
              and more to come!"
              />
            </div>
            <div className="w-[400px] xs:w-full xxs:w-full h-[500px] mx-2 shadow-lg">
              <SignInCarouselCard
                title="Customized Notifications"
                icon={
                  <BellRinging
                    className="mx-auto"
                    weight="duotone"
                    size={150}
                    color="#ADB5BD"
                  />
                }
                description="Never miss another read with subscriptions, powered by
              notifications, not just by email but also through app and
              ofcourse, tailored to your needs"
              />
            </div>
          </Flicking>
        </Col>
        <Col
          span={12}
          xs={12}
          xl={4}
          lg={4}
          md={4}
          sm={5}
          className="xs:p-0 xxs:p-0"
        >
          <Card className="border-t-[6px] shadow-lg border-blue-400 dark:border-yellow-600 h-[600px] xxs:h-[350px] max-w-[370px] mt-5 xs:max-w-full xxs:max-w-full ml-auto xs:ml-0 xxs:ml-0 xs:w-full xxs:w-full xs:h-[450px] dark:bg-manLightDark text-center font-semibold capitalize">
            <Text className="mt-5"> Get Started with the speed of ⚡ </Text>
            <Text className="mt-1 mb-5 xxs:w-full mx-auto font-medium text-sm text-center normal-case">
              Simple and Straight-forward Authentication
            </Text>

            <div className="text-center mt-16 xxs:mt-2 xs:mt-2 flex flex-col items-center">
              <Button
                className="my-2.5 mx-auto shadow-lg"
                variant="white"
                leftIcon={<GoogleOrignalIcon size={18} />}
                onClick={() =>
                  supabase.auth.signIn(
                    {
                      provider: "google",
                    },
                    {
                      redirectTo: "/",
                    }
                  )
                }
              >
                Sign in with Google
              </Button>
              <Button
                leftIcon={<GithubOriginalIcon size={21} />}
                className="my-2.5 shadow-lg"
                variant="white"
                color="dark"
              >
                Sign in with Github
              </Button>
              <Button
                leftIcon={<DiscordLogo weight="duotone" size={24} />}
                className="my-2.5 shadow-lg"
                color="violet"
              >
                Sign in with Discord
              </Button>
            </div>
            <div className="-bottom-48 xs:-bottom-14 xxs:-bottom-1 relative">
              <div className="w-full inline-block normal-case">
                <Text className="text-xs font-medium" component="span">
                  By clicking
                  <Text
                    className="text-xs mx-1"
                    weight="bold"
                    component="span"
                  >{`"Sign in"`}</Text>
                  you hereby agree to our
                  <Text
                    href="#"
                    className="text-xs mx-1 inline"
                    variant="link"
                    component="a"
                  >
                    Terms
                  </Text>
                  and
                  <Text
                    href="#"
                    className="text-xs mx-1"
                    variant="link"
                    component="a"
                  >
                    Privacy Policy
                  </Text>
                </Text>
              </div>

              <Text className="text-xs mt-2">© 2021 Coding Bolt</Text>
            </div>
          </Card>
        </Col>
      </Grid>
    </Wrapper>
  );
};

export default SignInComponent;
