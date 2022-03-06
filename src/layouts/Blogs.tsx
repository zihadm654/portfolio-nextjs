import Link from "next/link";

const Blogs = ({ blogs }) => {
  return (
    <div className="blog">
      <h3>Popular Blogs</h3>
      <div className="container">
        {blogs?.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
            <a className="content">
              <h5>{blog.frontMatter.title}</h5>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
