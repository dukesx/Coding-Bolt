import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  NormalizeCSS,
  GlobalStyles,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import {
  useHotkeys,
  useLocalStorageValue,
  useColorScheme,
} from "@mantine/hooks";
import { useEffect, useState } from "react";
import Loading from "../components/global/pageLoading";
import { useRouter } from "next/router";

/**
 *
 * @param props
 * @returns JSX.Element
 */
export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;
  /**
   * Toggle Dark Mode
   *
   */
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: "cb-color-scheme",
    defaultValue: preferredColorScheme,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    //@ts-ignore
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  /**
   * React-NProgress
   *
   */

  useEffect(() => {
    if (typeof window) {
      if (colorScheme == "dark") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    }
  }, [colorScheme]);

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const router = useRouter();

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  /**
   * React-NProgress
   *
   */

  /**
   *
   * Toggle Dark Mode
   *
   */

  /**
   *
   * Main Components Start
   */
  return (
    <>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />

      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
            fontFamily: "'Inter', Segoe UI, Sans-serif",
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
