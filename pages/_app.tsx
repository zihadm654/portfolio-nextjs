import '../src/styles/globals.scss';
import Header from '../src/components/Header';
import Contact from '../src/layouts/Contact';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Contact />
    </>
  );
}

export default MyApp;
