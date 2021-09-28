import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import useDarkMode from "use-dark-mode";
import "tailwindcss/tailwind.css";
import "public/assets/styles/custom.scss";
import { useRouter } from "next/router";
import Loading from "components/global/pageLoading";
import {
  MantineProvider,
  NormalizeCSS,
  GlobalStyles,
  useStylesCleanup,
  SsrProvider,
} from "@mantine/core";
import "lib/editor/plugins/embeds/style.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import "simplebar/dist/simplebar.min.css";
import "@egjs/react-flicking/dist/flicking.css";

const App: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  useStylesCleanup();

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

  const darkMode = useDarkMode(false);

  return (
    <>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />

      <SsrProvider>
        <Head>
          <title>Mantine next example</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <MantineProvider
          theme={{
            /** Put your mantine theme override here */
            colorScheme: darkMode.value ? "dark" : "light",
            primaryColor: "blue",
            fontFamily: '"Inter", "Segoe UI", sans-serif',
            fontFamilyMonospace: "Courier, monospace",
            headings: { fontFamily: 'Inter,"Segoe UI", sans-serif' },
            breakpoints: {
              xs: 280,
              sm: 640,
              md: 768,
              lg: 1024,
              xl: 1280,
            },
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <Component {...pageProps} />
        </MantineProvider>
      </SsrProvider>
    </>
  );
};

export default App;
