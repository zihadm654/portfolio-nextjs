import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
const BlogPage = ({ posts }) => {
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
          {posts?.map((blog) => {
            return (
              <article className="content" key={blog.slug}>
                <Link href="/blogs/[slug]" as={"/blogs/" + blog.slug}>
                  <a>
                    <div className="description">
                      <div className="blog__title">
                        <h4>{blog.frontMatter.title}</h4>
                        <p>{blog.frontMatter.created_at}</p>
                      </div>
                      <p>{blog.frontMatter.description}</p>
                    </div>
                  </a>
                </Link>
              </article>
            );
          })}
        </div>
      </motion.section>
    </>
  );
};
export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  let files = fs.readdirSync(path.join("data/blogs"));
  files = files.filter((file) => file.split(".")[1] === "md");
  const posts = await Promise.all(
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
    props: {
      posts,
    },
  };
};
