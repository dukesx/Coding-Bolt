import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { themeLoader } from "lib/app/helpers/addTheme";
import initAuth from "lib/app/auth/initAuth";

initAuth();
//
//
function CodingBolt({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    darkMode.value ? themeLoader("dark") : themeLoader("light");
  }, [darkMode.value]);
  return <Component {...pageProps} />;
}

export default CodingBolt;
