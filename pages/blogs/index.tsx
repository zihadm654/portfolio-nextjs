import { getAllPosts, PostMeta } from "../../src/utility/Functionality";
import Articles from "../../src/components/Articles";
import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";

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
        <h3>My Blogs</h3>
        <p>
          I&apos;ve been writing online since 2020, mostly about web development
          and tech careers. In total, I&apos;ve written 10 articles on this
          site.
        </p>
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
