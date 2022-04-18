import { useEffect } from 'react';
import '../src/styles/globals.scss';
import Header from '../src/components/Header';
import Contact from '../src/layouts/Contact';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { BsArrowUp } from 'react-icons/bs';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { ThemeProvider } from 'next-themes';
import { fadeIn } from '../src/utility/Animation';

function MyApp({ Component, pageProps, router }: AppProps) {
  const elevator = () => {
    window.scroll(0, 0);
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);
  return (
    <>
      <Head>
        <title>Portfolio || Abdul Malek</title>
        <meta name="description" content="this is frontpage of this website" />
      </Head>
      <ThemeProvider attribute="class">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Contact />
        <motion.div
          ref={ref}
          variants={fadeIn}
          onClick={elevator}
          className="up"
        >
          <BsArrowUp />
        </motion.div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
