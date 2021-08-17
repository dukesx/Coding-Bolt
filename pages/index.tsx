import { Button } from "antd";
import useDarkMode from "use-dark-mode";
import Wrapper from "components/wrapper";

const Index: React.FC = () => {
  const dark = useDarkMode();
  //   const { switcher, themes, currentTheme, status } = useThemeSwitcher();

  return (
    <Wrapper>
      <div>
        <p>
          <b>Hello World</b>
        </p>
        useDark: {dark.value ? "yes" : "false"}
      </div>
    </Wrapper>
  );
};

export default Index;
