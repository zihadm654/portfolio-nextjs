import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";

function BlogDetails({ frontMatter, mdxSource }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <div className="blog__details">
        <article>
          <h3>{frontMatter.title}</h3>
          <div className="description">
            <div className="author__container">
              <div className="info__left">
                <div className="author__img"></div>
                <p>{frontMatter.author}</p>
                <span>/</span>
                <p>{frontMatter.created_at}</p>
              </div>
              <div className="info__right">
                <p>{frontMatter.time}</p>
              </div>
            </div>
            <div className="img__container">
              <Image src={frontMatter.cover_img} alt="banner" layout="fill" />
            </div>
          </div>
          <p>{frontMatter.description}</p>
        </article>
        <article className="markdown">
          <MDXRemote {...mdxSource} />
        </article>
      </div>
    </>
  );
}

export default BlogDetails;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("data/blogs"));
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".md", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const markdown = fs.readFileSync(
    path.join("data/blogs", slug + ".md"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdown);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
    revalidate: 60,
  };
};
