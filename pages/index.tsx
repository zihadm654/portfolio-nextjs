import Head from 'next/head';
import About from '../src/layouts/About';
import Hero from '../src/layouts/Hero';
import Projects from '../src/layouts/Projects';
import Skills from '../src/layouts/Skills';
import { motion } from 'framer-motion';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import Blogs from '../src/layouts/Blogs';
import { getAllPosts } from '../src/utility/Functionality';

export type postItems = {
  id: string;
  name: string;
  img: string;
};
const Home = ({ posts, blogs }) => {
  return (
    <>
      <motion.div className="container" exit={{ opacity: 0 }}>
        <Head>
          <title>HomePage || Abdul Malik</title>
          <meta name="description" content="Home page created with nextjs" />
        </Head>
        <>
          <Hero />
          <Projects posts={posts} />
          <Blogs blogs={blogs} />
          <Skills />
          <About />
        </>
      </motion.div>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  //fetching projects
  const res = query(
    collection(db, 'projects'),
    limit(6),
    orderBy('createdAt', 'desc')
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
