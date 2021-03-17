import "styles/index.scss";
import React, { useState } from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { createStore, StoreProvider } from "easy-peasy";
import { Global } from "../store/global";
import "remixicon/fonts/remixicon.css";
import { Provider } from "next-auth/client";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import "lib/plugins/embeds/style.css";
import "lib/plugins/unsplash/style.css";
import "styles/custom.scss";
// import withDarkMode, { useDarkMode } from "next-dark-mode";
import useDarkMode from 'use-dark-mode';

const themes = {
  dark: `/dark-theme.css`,
  light: `/light-theme.css`,
};

const store = createStore(Global);
function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  // const {
  //   darkModeActive, // boolean - whether the dark mode is active or not
  // } = useDarkMode();

  const darkMode = useDarkMode(false);
  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={darkMode.value ? "dark" : "light"}
      >
        <StoreProvider store={store}>
          <ApolloProvider client={apolloClient}>
            <Provider session={pageProps.session}>
              <Component {...pageProps} />
            </Provider>
          </ApolloProvider>
        </StoreProvider>
      </ThemeSwitcherProvider>

    </>
  );
}

export default MyApp;
