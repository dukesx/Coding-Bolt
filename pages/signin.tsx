import { SimpleGrid, Col, Card, Text, Button } from "@mantine/core";
import { SigninProps } from "types/defaults";
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

/**
 * Sign in page for authentication
 * @param props
 *
 */
const SignInComponent: React.FC<SigninProps> = (props) => {
  return (
    <Wrapper>
      <SimpleGrid
        data-testid="signin-grid"
        className="mt-5"
        spacing="lg"
        cols={2}
        breakpoints={[{ maxWidth: 500, cols: 1 }]}
      >
        <div className="">
          <Text className="font-black uppercase p-2" size="xl">
            Sign up and Get These Goodies 🤟
          </Text>
          <Flicking align="prev" circular>
            <Card className="w-[300px] bg-[#F1F3F5]  dark:bg-manLightDark m-2">
              <div>
                <div>
                  <Heart
                    className="mx-auto"
                    weight="fill"
                    size={72}
                    color="#FA5252"
                  />
                </div>
                <div className="text-center mt-2">
                  <Text className="font-semibold text-lg">Favorites</Text>
                  <Text className="mt-3 text-sm">
                    Love creating playlists ? So create your own
                    {` "playlist" `}
                    of favorite articles, and more with just a few clicks
                  </Text>
                </div>
              </div>
            </Card>
            <Card className="w-[300px] bg-[#F1F3F5]  dark:bg-manLightDark m-2">
              <div>
                <div>
                  <Bookmarks
                    className="mx-auto"
                    weight="fill"
                    size={72}
                    color="#228BE6"
                  />
                </div>
                <div className="text-center mt-2">
                  <Text className="font-semibold text-lg">Bookmarks</Text>
                  <Text className="mt-3 text-sm">
                    Like an article ? Mark it ! read it later or share it with
                    your friends, your articles are with you, whether you are on
                    PC, Mobile or Tablet
                  </Text>
                </div>
              </div>
            </Card>
            <Card className="w-[300px] bg-[#F1F3F5]  dark:bg-manLightDark m-2">
              <div>
                <div>
                  <Rss
                    className="mx-auto"
                    weight="fill"
                    size={72}
                    color="#FAB005"
                  />
                </div>
                <div className="text-center mt-2">
                  <Text className="font-semibold text-lg">
                    Customized Feeds
                  </Text>
                  <Text className="mt-3 text-sm">
                    Subscribe to your favorite tags, categories, authors, pages
                    and more to come!
                  </Text>
                </div>
              </div>
            </Card>

            <Card className="w-[300px] bg-[#F1F3F5]  dark:bg-manLightDark m-2">
              <div>
                <div>
                  <BellRinging
                    className="mx-auto"
                    weight="fill"
                    size={72}
                    color="#ADB5BD"
                  />
                </div>
                <div className="text-center mt-2">
                  <Text className="font-semibold text-lg">
                    Customized Notifications
                  </Text>
                  <Text className="mt-3 text-sm">
                    Never miss another read with subscriptions, powered by
                    notifications, not just by email but also through app and
                    ofcourse, tailored to your needs
                  </Text>
                </div>
              </div>
            </Card>
          </Flicking>
        </div>
        <div>
          <Card className="bg-[#F1F3F5] h-[600px] xxs:h-[350px] xs:h-[450px] dark:bg-manLightDark text-center font-semibold capitalize">
            <Text className="mt-5"> Get Started with the speed of ⚡ </Text>
            <Text className="mt-1 mb-5 w-[400px] xxs:w-full mx-auto font-medium text-sm normal-case">
              Simple and Straight-forward Authentication
            </Text>

            <div className="text-center mt-16 xxs:mt-2 xs:mt-2 flex flex-col items-center">
              <Button
                className="my-2.5 mx-auto shadow-md"
                variant="white"
                leftIcon={<GoogleOrignalIcon size={18} />}
              >
                Sign in with Google
              </Button>
              <Button
                leftIcon={<GithubOriginalIcon size={21} />}
                className="my-2.5 shadow-md"
                variant="white"
                color="dark"
              >
                Sign in with Github
              </Button>
              <Button
                leftIcon={<DiscordLogo weight="duotone" size={24} />}
                className="my-2.5 shadow-md"
                color="violet"
              >
                Sign in with Discord
              </Button>
            </div>
            <div className="-bottom-48 xs:-bottom-14 xxs:-bottom-1 relative">
              <div className="w-full inline-block">
                <Text className="text-xs font-medium" component="span">
                  by clicking
                  <Text
                    className="text-xs mx-1"
                    weight="bold"
                    component="span"
                  >{`"Sign in with"`}</Text>
                  you hereby agree to
                  <Text
                    href="#"
                    className="text-xs mx-1 inline"
                    variant="link"
                    component="a"
                  >
                    our Terms
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

              <Text className="text-xs mt-1">© 2021, Coding Bolt</Text>
            </div>
          </Card>
        </div>
      </SimpleGrid>
    </Wrapper>
  );
};

export default SignInComponent;
