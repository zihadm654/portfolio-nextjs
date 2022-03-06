import "../src/styles/globals.scss";
import Header from "../src/components/Header";
import Contact from "../src/layouts/Contact";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import Loading from "../src/utility/Loading";
import { BsArrowUp } from "react-icons/bs";

function MyApp({ Component, pageProps, router }) {
  const elevator = () => {
    window.scroll(0, 0);
  };
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
      <div onClick={elevator} className="up">
        <BsArrowUp />
      </div>
    </>
  );
}

export default MyApp;
