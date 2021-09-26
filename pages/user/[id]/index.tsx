import Wrapper from "components/global/wrapper";
import { UserProps } from "types/user";
import {
  Card,
  CardSection,
  Group,
  Text,
  Avatar,
  Button,
  Tab,
  Tabs,
} from "@mantine/core";
import Image from "components/global/image";
import React, { useState } from "react";
import {
  Upload,
  Camera,
  Trash,
  ListDashes,
  IdentificationBadge,
  Files,
} from "phosphor-react";
import Uploader from "rc-upload";
import Image2 from "next/image";
import PlaceholderCover from "public/assets/images/asset-placeholder-cover.jpg";
import HorizontalArticleCard from "components/global/article/list/horizontal";
import { supabase } from "lib/supabaseClient";
const UserProfile: React.FC<UserProps> = ({ user }) => {
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);

  const [cropImage, setCropImage] = useState({
    base: "",
    buffer: null,
  });
  const [doneCrop, setDoneCrop] = useState(false);
  const [pixels, setPixels] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const ref: any = React.createRef();

  return (
    <Wrapper>
      <Group
        className="max-w-[1000px] mx-auto"
        align="center"
        direction="column"
      >
        <Card className="w-full p-0 mx-0">
          <CardSection className="w-full m-0 p-0 max-h-[350px]">
            {image ? (
              <Image
                alt=""
                className="rounded-t-none"
                name={image.url.split("/")[image.url.split("/").length - 1]}
                hash={image.hash}
                width={1000}
                height={400}
                cover
              />
            ) : (
              <Image2 src={PlaceholderCover} placeholder="blur" />
            )}

            <Uploader
              className="absolute bottom-5 right-5"
              id="cover-uploader"
              // beforeUpload={(file, files) => {
              //   var reader = new FileReader();
              //   reader.readAsDataURL(file);
              //   reader.onloadend = function () {
              //     var base64data = reader.result;
              //     setCropImage({
              //       base: `${base64data}`,
              //       buffer: file,
              //     });
              //     setCropModal(true);
              //   };
              //   return false;
              // }}
              action="/api/upload/image/form"
              name="image"
              onStart={() => {
                setUploadingCover(true);
              }}
              onSuccess={(file: any) => {
                setUploadingCover(false);
                setImage({
                  hash: file.file.hash,
                  url: file.file.url,
                });
              }}
            >
              <Button
                leftIcon={
                  <Upload className="xxs:mr-[-10px] xs:mr-[-10px]" size={18} />
                }
                loading={uploadingCover ? true : false}
                variant="white"
                className="text-sm xxs:text-xs xs:text-xs xxs:rounded-full xxs:px-[9px] xxs:py-[10px] xs:px-[10px] xs:py-[10px] xs:rounded-full"
              >
                <span className="xxs:hidden xs:hidden">Change Cover</span>
              </Button>
            </Uploader>
            {image ? (
              <Button
                className="right-5 absolute top-3"
                compact
                variant="filled"
                color="red"
              >
                <Trash size={16} onClick={() => setImage(null)} />
              </Button>
            ) : null}
          </CardSection>
        </Card>
        <Group
          direction="column"
          align="center"
          className="relative top-[-60px]"
        >
          <div className="text-center">
            <Avatar
              size={140}
              className="rounded-full xs:w-[120px] xs:h-[120px] xxs:w-[100px] xxs:h-[100px] backdrop-blur-sm"
              // color="blue"
            >
              {user || avatar ? (
                <Image
                  alt=""
                  className="rounded-t-none"
                  name={
                    user
                      ? user[0].avatar_url
                      : avatar.url.split("/")[avatar.url.split("/").length - 1]
                  }
                  hash={user ? user[0].hash : avatar.hash}
                  width={140}
                  height={140}
                  cover
                />
              ) : (
                "AG"
              )}
            </Avatar>
            <Uploader
              id="avatar-uploader"
              action="/api/upload/image/form"
              name="image"
              onStart={() => {
                setUploadingAvatar(true);
              }}
              onSuccess={async (file: any) => {
                setUploadingAvatar(false);
                setAvatar({
                  hash: file.file.hash,
                  url: file.file.url,
                });
                const { data, error } = await supabase
                  .from("profiles")
                  .upsert({
                    avatar_url:
                      avatar.url.split("/")[avatar.url.split("/").length - 1],
                    id: supabase.auth.user().id,
                    hash: file.file.hash,
                  })
                  .eq("id", supabase.auth.user().id);
              }}
            >
              <Button
                variant="white"
                loading={uploadingAvatar ? true : false}
                className="relative bottom-5 left-5 right-0 text-xs xs:px-[9x] rounded-full px-[9px] mr-5 py-[10px] shadow-md"
              >
                {uploadingAvatar ? "Uploading Avatar" : <Camera size={16} />}
              </Button>
            </Uploader>
          </div>
        </Group>
        <div className="text-center mt-[-70px]">
          <Text className="px-1 py-0 mt-0 font-semibold text-xl xs:text-sm xxs:text-sm">
            Afzaal Afridi
          </Text>
          <Text
            className="px-1 py-0 font-medium text-sm xxs:text-xs"
            color="gray"
          >
            Member
          </Text>
        </div>
      </Group>
      <div className="max-w-[1000px] flex flex-col items-center mx-auto mt-4">
        <Tabs position="center" className="w-full" tabPadding="xl">
          <Tab label="Feed" icon={<ListDashes size={20} />}>
            <div className="px-3">
              <HorizontalArticleCard
                title="NotionMailer - a tool that allows to write, manage and send newsletters directly from Notion."
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
                title="If you run a Github organisation you must do this now!
                "
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
                title="10+ Projects You Can Do to Become a Frontend Master
                "
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
                title="Build a Pixel Perfect Skeleton Loader Using CSS 🚀
                "
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
            </div>
          </Tab>
          <Tab label="About" icon={<IdentificationBadge size={20} />}>
            <Text>About Section</Text>
          </Tab>
          <Tab
            label="Achievements"
            disabled
            icon={<IdentificationBadge size={20} />}
          ></Tab>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default UserProfile;

export const getServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    // If no user, redirect to index.
    return {
      props: {
        user: null,
      },
      // redirect: { destination: "/", permanent: false }
    };
  }

  // If there is a user, return it.
  const { data, error } = await supabase
    .from("profiles")
    .select(
      `
    hash,
    avatar_url
  `
    )
    .eq("id", user.id);
  return { props: { user: data } };
};
