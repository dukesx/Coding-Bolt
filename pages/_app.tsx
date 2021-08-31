import { useEffect } from "react";
import { JssProvider, createGenerateId } from "react-jss";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import useDarkMode from "use-dark-mode";
// import initAuth from "lib/app/auth/initAuth";
import "tailwindcss/tailwind.css";
import "public/assets/styles/custom.scss";

// initAuth();

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.getElementById("mantine-ssr-styles");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const darkMode = useDarkMode(false);

  return (
    <>
      <JssProvider generateId={createGenerateId({ minify: false })}>
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
            headings: { fontFamily: '"Segoe UI", sans-serif' },
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <Component {...pageProps} />
        </MantineProvider>
      </JssProvider>
    </>
  );
}
