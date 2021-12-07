import '../src/styles/globals.scss';
import Header from '../src/components/Header';
import Contact from '../src/layouts/Contact';
import Head from 'next/head';
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Portfolio || Abdul Malik</title>
        <meta name="Homepage" content="this is frontpage of this website" />
      </Head>
      <Header />
      <Component {...pageProps} key={router.route} />
      <Contact />
    </>
  );
}

export default MyApp;
