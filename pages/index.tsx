import Head from "next/head";
import About from "../src/layouts/About";
import Hero from "../src/layouts/Hero";
import Projects from "../src/layouts/Projects";
import Skills from "../src/layouts/Skills";
import { motion } from "framer-motion";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../src/lib/firebase";
import Blogs from "../src/layouts/Blogs";
import { getAllPosts } from "../src/utility/Functionality";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeIn = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
export type postItems = {
  id: string;
  name: string;
  img: string;
};
const Home = ({ posts, blogs }) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <div className="container">
        <Head>
          <title>HomePage || Abdul Malik</title>
          <meta name="description" content="Home page created with nextjs" />
        </Head>
        <main>
          <Hero fadeIn={fadeIn} stagger={stagger} />
          <Projects posts={posts} fadeIn={fadeIn} stagger={stagger} />
          <Blogs blogs={blogs} />
          <Skills fadeIn={fadeIn} stagger={stagger} />
          <About />
        </main>
      </div>
    </motion.div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  //fetching projects
  const res = query(
    collection(db, "projects"),
    limit(6),
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
  const projects = posts.slice(0, 4);
  // blogs
  const blogs = getAllPosts()
    .slice(0, 3)
    .map((blog) => blog.meta);
  return {
    props: { posts: projects, blogs },
  };
};
