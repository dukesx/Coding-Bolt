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

  const toggleColorScheme = (value?: ColorScheme) =>
    //@ts-ignore
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

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
