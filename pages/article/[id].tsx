import { ArticleProps } from "types/article";
import { Group, Text, Card, Badge } from "@mantine/core";
import Image from "components/global/image";
import Wrapper from "components/global/wrapper";
import { ReactOriginalIcon, JavascriptPlainIcon } from "react-devicons";
import { Prism } from "@mantine/prism";
const SingleArticle: React.FC<ArticleProps> = () => {
  return (
    <Wrapper>
      <Group
        className="max-w-full justify-center p-8 xs:p-0 xxs:p-0 m-0"
        align="center"
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
            <Text
              className="text-xl font-semibold xs:p-1 lg:mt-4 sm:mt-4 md:mt-4 xs:mt-4 xxs:mt-4 xxs:p-1 xs:text-lg xxs:text-base"
              lineClamp={2}
            >
              Top 5 Useful Packages That Every React Developer Should Know
            </Text>
            <Group className="mt-2 " spacing="sm">
              <div className="bg-blue-500 p-2 rounded-full">
                <ReactOriginalIcon color="white" size={20} />
              </div>
              <div className="bg-yellow-500 p-2.5 rounded-full">
                <JavascriptPlainIcon size={16} color="white" />
              </div>
            </Group>
          </div>
          <div className="mt-6">
            <Text className="text-sm">Muhammad Afzaal Afridi</Text>
            <Text className="mt-1 text-sm">Mar 28, 2021</Text>
          </div>
        </div>
      </Group>
      <div className="max-w-[1000px] mx-auto text-justify mt-4 flex flex-col">
        <Text className="xs:px-3 xxs:px-2.5 my-4">
          React JS is a popular JavaScript framework for building front-end
          applications, such as user interfaces that let people interact with
          software. When it comes to developing modern React apps, choosing the
          right library might be difficult. Therefore in this article, I have
          compiled the best and useful packages that you need as a React
          developer.
        </Text>
        <Text className="xs:px-3 xxs:px-2.5 my-4">
          Axios Axios makes it simple for us to communicate with APIs in our
          React projects. Though alternative techniques like Fetch or AJAX may
          do this, Axios can give extra functionality that goes a long way with
          React-based apps
        </Text>
        <Image
          hash="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QAJxAAAQMDAwMEAwAAAAAAAAAAAQIDBAAFEQYSIQcxUSIyQWEVouH/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAB0RAAICAgMBAAAAAAAAAAAAAAECABEEIQMSIjH/2gAMAwEAAhEDEQA/AFpc74pa1YJx5zmsSRc1K4yB91guy1FXckmrl7tMy2uyWpMeS25GWlt7en0gqHBBHGD8VK6+ygBOxLIuTifaogfRornwsjuoCijUEZGl7Ci1Xq23Z+E087EfbUISnCUuHAIKzzgghWQOOB4IqTX+sWdV3R2O0ytMJLit7Sl5DnqylWRzuHn+1advqYLj0aVGUliTIK3nGzh5tIQtOxOePcpJPPO3HzWN060PL1bfmY0eTFaQFpL6lODcW85WUpHfAz4HIrErM/pjOgVXjHVRGT0m6S6dcsC7trEuOtXAhUBvcApLSc5UccHJP69hRTBu0L8vKSzAbfYtkFtMeIGzhJQnjjz2opGylU0TuKuPYsT/2Q=="
          name="t2osHgPxj1.jpg"
          alt=""
          caption="This is a default image caption"
          className="mx-auto"
        />
        <Text className="xs:px-3 xxs:px-2.5 my-4">
          Redux is a JavaScript library that allows you to manage and centralize
          your application state. For creating user interfaces, it is most often
          used alongside frameworks like React or Angular.
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
        <Text className="xs:px-3 xxs:px-2.5 my-4">
          Styled Components is a CSS tool that makes your React project run more
          smoothly. This package enables you to construct reusable, tiny
          components that are crucial to your application design.
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
    </Wrapper>
  );
};

export default SingleArticle;
