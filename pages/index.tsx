import Head from "next/head";
import About from "../src/layouts/About";
import Hero from "../src/layouts/Hero";
import Projects from "../src/layouts/Projects";
import Skills from "../src/layouts/Skills";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import Blogs from "../src/layouts/Blogs";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

const Home = ({ posts, blogs }: any) => {
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
  // fetching blogs
  let files = fs.readdirSync(path.join("data/blogs"));
  files = files.filter((file) => file.split(".")[1] === "md");
  const blogs = await Promise.all(
    files.map((file) => {
      const mdWithData = fs.readFileSync(
        path.join("data/blogs", file),
        "utf-8"
      );
      const { data: frontMatter } = matter(mdWithData);
      return {
        frontMatter,
        slug: file.split(".")[0],
      };
    })
  );
  return {
    props: { posts, blogs },
  };
};
