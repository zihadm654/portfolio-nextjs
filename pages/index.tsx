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

const Home = ({ posts, blogs }: any) => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="container">
        <Head>
          <title>HomePage || Abdul Malik</title>
          <meta name="description" content="Home page created with nextjs" />
        </Head>
        <main>
          <Hero />
          <Projects posts={posts} />
          <Blogs blogs={blogs} />
          <Skills />
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
