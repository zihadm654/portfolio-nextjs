import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
function BlogDetails({ frontMatter, mdxSource, slug }) {
  return (
    <div className="blog__details">
      <article>
        <Image src={frontMatter.cover_img} alt="banner" layout="fill" />
        <h2>{frontMatter.title}</h2>
        <MDXRemote {...mdxSource} />
      </article>
    </div>
  );
}

export default BlogDetails;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("data"));
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const markdown = fs.readFileSync(path.join("data", slug + ".mdx"), "utf-8");
  const { data: frontMatter, content } = matter(markdown);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
