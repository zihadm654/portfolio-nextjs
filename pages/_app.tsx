import "../src/styles/globals.scss";
import Header from "../src/components/Header";
import Contact from "../src/layouts/Contact";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Portfolio || Abdul Malek</title>
        <meta name="Homepage" content="this is frontpage of this website" />
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
