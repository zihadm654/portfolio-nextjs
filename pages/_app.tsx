import "../src/styles/globals.scss";
import Header from "../src/components/Header";
import Contact from "../src/layouts/Contact";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Loading from "../src/utility/Loading";
import Router from "next/router";

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  return (
    <>
      <Head>
        <title>Portfolio || Abdul Malek</title>
        <meta name="description" content="this is frontpage of this website" />
      </Head>
      {loading && <Loading />}
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Contact />
    </>
  );
}

export default MyApp;
