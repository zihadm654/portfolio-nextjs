import "../src/styles/globals.scss";
import Header from "../src/components/Header";
import Contact from "../src/layouts/Contact";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Loading from "../src/utility/Loading";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Portfolio || Abdul Malek</title>
        <meta name="description" content="this is frontpage of this website" />
      </Head>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Contact />
    </>
  );
}

export default MyApp;
