import Head from 'next/head';
import Image from 'next/image';
import Layouts from '../src/layouts/Layouts';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Abdul Malik</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layouts />
      </main>
    </div>
  );
}
