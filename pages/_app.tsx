import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { themeLoader } from "lib/app/helpers/addTheme";
import initAuth from "lib/app/auth/initAuth";
import "tailwindcss/tailwind.css";
import "public/assets/styles/custom.scss";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
initAuth();
//
//

function CodingBolt({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false);

  // useEffect(() => {
  //   darkMode.value ? themeLoader("dark") : themeLoader("light");
  // }, [darkMode.value]);
  return (
    <ThemeSwitcherProvider
      themeMap={{
        light: "/assets/themes/light-theme.css",
        dark: "/assets/themes/dark-theme.css",
      }}
      defaultTheme={darkMode.value ? "dark" : "light"}
    >
      <Component {...pageProps} />
    </ThemeSwitcherProvider>
  );
}

export default CodingBolt;
