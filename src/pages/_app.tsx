import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import { NextPage } from "next";
import { ThemeProvider } from "next-themes";
import Loader from "../components/loader/preloader";
import React, { useEffect } from "react";
import AOS from "aos";
import { useRouter } from "next/router";
import Customermouse from "@/components/customcursor/customermouse";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  authenticate?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const authProps = Component.authenticate;

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);

  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  // React.useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <div>
      <ThemeProvider attribute="class">
        {loading ? <Loader /> : getLayout(<Component {...pageProps} />)}
        <Customermouse />
      </ThemeProvider>
    </div>
  );
}
