// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import useDarkMode from "use-dark-mode";

const themes = {
  light: "assets/themes/light-theme.css",
  dark: "assets/themes/dark-theme.css",
};

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false);

  return (
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme={darkMode.value ? "dark" : "light"}
    >
      <Component {...pageProps} />
    </ThemeSwitcherProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
