import { getAllPosts, PostMeta } from '../../src/utility/Functionality';
import Articles from '../../src/components/Articles';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../../src/utility/Animation';

const BlogPage = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <>
      <Head>
        <title>Blog || Abdul Malek</title>
        <meta
          name="blog page"
          content="this page is all about blogpost. It holds all the blogs inside this website contains."
        />
      </Head>
      <motion.section exit={{ opacity: 0 }} className="blog__page">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.h3 variants={fadeIn}>My Blogs</motion.h3>
          <motion.p variants={fadeIn}>
            I&apos;ve been writing online since 2020, mostly about web
            development and tech careers. In total, I&apos;ve written 10
            articles on this site.
          </motion.p>
        </motion.div>
        <div className="container">
          <h3>Featured Blogs</h3>
          <Articles posts={posts} />
        </div>
      </motion.section>
    </>
  );
};
export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
    .slice(0, 6)
    .map((post) => post.meta);

  return { props: { posts } };
};
