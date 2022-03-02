import Head from "next/head";
import About from "../src/layouts/About";
import Describe from "../src/layouts/Describe";
import Hero from "../src/layouts/Hero";
import Progress from "../src/layouts/Progress";
import Projects from "../src/layouts/Projects";
import Skills from "../src/layouts/Skills";
import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";

const Home: NextPage = ({ posts }: any) => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="container">
        <Head>
          <title>HomePage || Abdul Malik</title>
          <meta name="description" content="Home page created with nextjs" />
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
    </motion.div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = query(
    collection(db, "projects"),
    limit(4),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(res);
  const posts = snap?.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt.toMillis(),
    };
  });
  return {
    props: { posts },
  };
};
