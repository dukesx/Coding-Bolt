import { Button } from "antd";
import useDarkMode from "use-dark-mode";
import { useThemeSwitcher } from "react-css-theme-switcher";

const Index: React.FC = () => {
  const dark = useDarkMode();
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();

  return (
    <>
      <p>
        Hello Current:{currentTheme} useDark: {dark.value ? "yes" : "false"}
      </p>
      <Button
        type="primary"
        onClick={() => {
          dark.toggle();
          switcher({ theme: dark.value ? "dark" : "light" });
        }}
      >
        hello world
      </Button>
    </>
  );
};

export default Index;
