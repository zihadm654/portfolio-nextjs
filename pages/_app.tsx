import '../src/styles/globals.scss';
import Header from '../src/components/Header';
import Contact from '../src/layouts/Contact';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
            <title>Abdul Malik</title>
            <meta name='Homepage' content='this is frontpage of this website'/>
        </Head>
      <Header />
      <Component {...pageProps} />
      <Contact />
    </>
  );
}

export default MyApp;
