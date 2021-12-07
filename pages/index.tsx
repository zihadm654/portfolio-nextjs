import Head from 'next/head';
import About from '../src/layouts/About';
import Describe from '../src/layouts/Describe';
import Hero from '../src/layouts/Hero';
import Progress from '../src/layouts/Progress';
import Projects from '../src/layouts/Projects';
import Skills from '../src/layouts/Skills';

export default function Home({ posts }) {
  return (
    <div>
      <div className="container">
        <Head>
          <title>Abdul Malik</title>
          <meta name="description" content="Generated by create next app" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=optional"
            rel="stylesheet"
          ></link>
        </Head>
        <main>
          <Hero />
          <Describe />
          <Projects posts={posts} />
          <Progress />
          <Skills />
          <About />
        </main>
      </div>
    </div>
  );
}
// export const getStaticProps ={
// return({props:posts})
// }
