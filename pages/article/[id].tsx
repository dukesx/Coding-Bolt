import { ArticleProps } from "types/article";
import { Group, Text, Card, Badge, Grid, Col } from "@mantine/core";
import Image from "components/global/image";
import Wrapper from "components/global/wrapper";
import {
  Bookmark,
  BookmarkSimple,
  HandWaving,
  Heart,
  ThumbsUp,
} from "phosphor-react";
import { Prism } from "@mantine/prism";
import Sticky from "react-stickynode";
const SingleArticle: React.FC<ArticleProps> = () => {
  return (
    <Wrapper>
      <Grid id="article-grid" className="w-full justify-center">
        <Col className="" span={1} lg={2} md={12}>
          {/* <Sticky
            className="md:bottom-7 md:flex-row md:w-full md:top-auto md:fixed md:z-10"
            top={500}
          >
            <div className="h-[400px] md:w-full flex flex-col ml-auto md:bg-white md:h-20">
              <div className="rounded-lg p-1 text-center dark:border-yellow-400 border border-blue-600 border-r-[5px] border-b-[5px] flex">
                <Text className="text-2xl my-5 rounded-full">
                  <Heart
                    className="mx-auto"
                    weight="duotone"
                    color="yellow"
                    size={40}
                  />
                </Text>
                <Text className="text-2xl my-5 my-2 rounded-full">
                  <ThumbsUp className="mx-auto" weight="duotone" size={40} />
                </Text>
                <Text className="text-2xl my-5 my-2 rounded-full">
                  <HandWaving className="mx-auto" weight="duotone" size={40} />
                </Text>
                <Text className="text-2xl my-5  my-2 rounded-full">
                  <BookmarkSimple
                    className="mx-auto"
                    weight="duotone"
                    size={40}
                  />
                </Text>
              </div>
            </div>
          </Sticky> */}
        </Col>
        <Col span={11} lg={10}>
          <Group
            className="max-w-full justify-center p-8 xs:p-0 xxs:p-0 m-0"
            align="center"
            id="article-header"
          >
            <Image
              hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAdACADASIAAhEBAxEB/8QAGgABAQACAwAAAAAAAAAAAAAABwgDBAUGCf/EAC4QAAEDAwMCBAQHAAAAAAAAAAECAwQFBhEAEiEHMRMiQVEIFELBFWFxgZKh0f/EABcBAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAkEQACAQMEAAcAAAAAAAAAAAABAhEAAxIEITFBBRNhgZGhsf/aAAwDAQACEQMRAD8AW+pkCx7So7teqdrUiTI3hKAYjYK1n340F1brRckxlUW3o0OiQvpTEaSjA/X/AAaozq5ajV42c/AcfVHW04iQh5KQoo2nng9/KTqfqdQrBiLQzCiVe8KjhRS20kqaVjv22ox7nJxqHV+ILpSEFtnY9KJ+TsB7mnS2X7AFDlzXJJlylmr1WbNfz5kBZ/tR+w11wVQlR+VaZjZ+sjev+SvtjTN1AsqtXHTTMNDpVBRFbcU0ylXmUlAJKStA8JOR2yrKuMaDTCd27kgkjunHOq7RuPaW5cXEnqQfylcKrFQZivUJRBSQeQRqcOqFauW3bsdoltw2YwUESmZLaSo+H2wlB8iRwUkYGcn3062nUHKpbVNmvgB15lKlY98aMfiWioj2tCrzJUibBkBlJSSnehzgpJHPBAP7aosi0XHnTj6c/dI+USnPU1K10VitVaozPxSZLkSCoNuMvOZWraeAGxnCQDx6axVeFDhyM035lTBSlaVSdiXVcc5SknA9QeD7+mttpb8iRIbckOAu4UpSfLk8DnHpg9s656XSIlJojVVWHHE7dngtKDW70O5WDnP5Aa0dkhkQbTsTzQQtvlzX/9k="
              name="DUYxk8Q2CD.jpg"
              alt="Something Here"
              className="mt-3 xs:mt-0"
              width={600}
              height={350}
            />
            <div className="flex flex-col max-w-[400px] ml-8 xs:ml-4 xxs:ml-3">
              <div className="flex flex-wrap">
                <Group
                  className="xxs:mt-3 xs:mt-3 md:mt-3 lg:mt-3"
                  spacing="sm"
                >
                  <div className="border-blue-500 border-b-4 text-sm font-medium border-r-4 border py-1 px-4 rounded-lg">
                    {/* <ReactOriginalIcon size={20} />
                     */}
                    React
                  </div>
                  <div className="border-yellow-500 border-b-4 text-sm font-medium border-r-4 border py-1 px-4 rounded-lg">
                    Javascript
                  </div>
                </Group>
                <Text
                  className="text-xl font-semibold mt-4 xs:p-1 lg:mt-4 sm:mt-4 md:mt-4 xs:mt-4 xxs:mt-4 xxs:p-1 xs:text-lg xxs:text-base"
                  lineClamp={2}
                >
                  Top 5 Useful Packages That Every React Developer Should Know
                </Text>
              </div>
              <div className="mt-3">
                <Text className="text-sm">Muhammad Afzaal Afridi</Text>
                <Text className="mt-1 text-sm">Mar 28, 2021</Text>
              </div>
            </div>
          </Group>
          <div className="flex max-w-[900px] mx-auto">
            <div className="text-left mt-4 flex flex-col max-w-[800px]">
              <Text className="xs:px-3 xxs:px-2.5 my-4 leading-normal">
                React JS is a popular JavaScript framework for building
                front-end applications, such as user interfaces that let people
                interact with software. When it comes to developing modern React
                apps, choosing the right library might be difficult. Therefore
                in this article, I have compiled the best and useful packages
                that you need as a React developer.
              </Text>
              <Text className="xs:px-3 xxs:px-2.5 my-4 leading-normal">
                Axios Axios makes it simple for us to communicate with APIs in
                our React projects. Though alternative techniques like Fetch or
                AJAX may do this, Axios can give extra functionality that goes a
                long way with React-based apps
              </Text>
              <Image
                hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QAJxAAAQMDAwMEAwAAAAAAAAAAAQIDBAAFEQYSIQcxUSIyQWEVouH/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAB0RAAICAgMBAAAAAAAAAAAAAAECABEEIQMSIjH/2gAMAwEAAhEDEQA/AFpc74pa1YJx5zmsSRc1K4yB91guy1FXckmrl7tMy2uyWpMeS25GWlt7en0gqHBBHGD8VK6+ygBOxLIuTifaogfRornwsjuoCijUEZGl7Ci1Xq23Z+E087EfbUISnCUuHAIKzzgghWQOOB4IqTX+sWdV3R2O0ytMJLit7Sl5DnqylWRzuHn+1advqYLj0aVGUliTIK3nGzh5tIQtOxOePcpJPPO3HzWN060PL1bfmY0eTFaQFpL6lODcW85WUpHfAz4HIrErM/pjOgVXjHVRGT0m6S6dcsC7trEuOtXAhUBvcApLSc5UccHJP69hRTBu0L8vKSzAbfYtkFtMeIGzhJQnjjz2opGylU0TuKuPYsT/2Q=="
                name="t2osHgPxj1.jpg"
                alt=""
                caption="This is a default image caption"
                className="mx-auto"
              />
              <Text className="xs:px-3 xxs:px-2.5 my-4 leading-normal">
                Redux is a JavaScript library that allows you to manage and
                centralize your application state. For creating user interfaces,
                it is most often used alongside frameworks like React or
                Angular.
              </Text>
              <div className="max-w-[600px] mx-auto my-2">
                <Image
                  hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QAJxAAAQMDAwMEAwAAAAAAAAAAAQIDBAAFEQYSIQcxUSIyQWEVouH/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAB0RAAICAgMBAAAAAAAAAAAAAAECABEEIQMSIjH/2gAMAwEAAhEDEQA/AFpc74pa1YJx5zmsSRc1K4yB91guy1FXckmrl7tMy2uyWpMeS25GWlt7en0gqHBBHGD8VK6+ygBOxLIuTifaogfRornwsjuoCijUEZGl7Ci1Xq23Z+E087EfbUISnCUuHAIKzzgghWQOOB4IqTX+sWdV3R2O0ytMJLit7Sl5DnqylWRzuHn+1advqYLj0aVGUliTIK3nGzh5tIQtOxOePcpJPPO3HzWN060PL1bfmY0eTFaQFpL6lODcW85WUpHfAz4HIrErM/pjOgVXjHVRGT0m6S6dcsC7trEuOtXAhUBvcApLSc5UccHJP69hRTBu0L8vKSzAbfYtkFtMeIGzhJQnjjz2opGylU0TuKuPYsT/2Q=="
                  name="t2osHgPxj1.jpg"
                  alt=""
                  width={600}
                  height={400}
                />
              </div>
              <Text className="xs:px-3 xxs:px-2.5 my-4 leading-normal">
                Styled Components is a CSS tool that makes your React project
                run more smoothly. This package enables you to construct
                reusable, tiny components that are crucial to your application
                design.
              </Text>
              <div className="max-w-[600px] mx-auto my-2">
                <Image
                  hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QAJxAAAQMDAwMEAwAAAAAAAAAAAQIDBAAFEQYSIQcxUSIyQWEVouH/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAB0RAAICAgMBAAAAAAAAAAAAAAECABEEIQMSIjH/2gAMAwEAAhEDEQA/AFpc74pa1YJx5zmsSRc1K4yB91guy1FXckmrl7tMy2uyWpMeS25GWlt7en0gqHBBHGD8VK6+ygBOxLIuTifaogfRornwsjuoCijUEZGl7Ci1Xq23Z+E087EfbUISnCUuHAIKzzgghWQOOB4IqTX+sWdV3R2O0ytMJLit7Sl5DnqylWRzuHn+1advqYLj0aVGUliTIK3nGzh5tIQtOxOePcpJPPO3HzWN060PL1bfmY0eTFaQFpL6lODcW85WUpHfAz4HIrErM/pjOgVXjHVRGT0m6S6dcsC7trEuOtXAhUBvcApLSc5UccHJP69hRTBu0L8vKSzAbfYtkFtMeIGzhJQnjjz2opGylU0TuKuPYsT/2Q=="
                  name="t2osHgPxj1.jpg"
                  alt=""
                  width={600}
                  height={400}
                />
              </div>
              <div className="w-full mt-4">
                <Prism
                  language="jsx"
                  themeOverride={{
                    colorScheme: "dark",
                  }}
                  withLineNumbers
                >{`
              function formatName(user) {
                return user.firstName + ' ' + user.lastName;
              }
              
              const user = {
                firstName: 'Harper',
                lastName: 'Perez'
              };
              
              const element = (
                <h1>
                  Hello, {formatName(user)}!
                </h1>
              );
              
              ReactDOM.render(
                element,
                document.getElementById('root')
              );
          `}</Prism>
              </div>
            </div>
          </div>
        </Col>
      </Grid>
    </Wrapper>
  );
};

export default SingleArticle;
