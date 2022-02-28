import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BlogPage = ({ posts }) => {
  return (
    <>
      <div className="blog__page">
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
                        <h5>{blog.frontMatter.title}</h5>
                        {/* <p>{new Date(blog.createdAt).toDateString()}</p> */}
                      </div>
                      <p>{blog.sub}</p>
                    </div>
                  </a>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default BlogPage;

export const getStaticProps = async () => {
  let files = fs.readdirSync(path.join("data"));
  files = files.filter((file) => file.split(".")[1] === "mdx");
  const posts = await Promise.all(
    files.map((file) => {
      const mdWithData = fs.readFileSync(path.join("data", file), "utf-8");
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
