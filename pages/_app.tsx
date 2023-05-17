import type { AppProps } from "next/app";
import Head from "next/head";
import "@styles/global.sass";
import DarkMode from "@components/DarkMode";
import Navigation from "@components/Navigation";

import { useBooleanState } from "@hooks/useBooleanState";

function MyApp({ Component, pageProps }: AppProps) {
  const { isTrue: isDark, setTrue, setFalse } = useBooleanState();

  return (
    <main className={isDark ? "dark" : "light"}>
      <Head>
        <title>Taeifolio</title>
      </Head>
      <Navigation />
      <DarkMode
        isDark={isDark}
        handleDarkMode={() => (isDark ? setFalse() : setTrue())}
      />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
