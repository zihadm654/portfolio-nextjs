import Link from 'next/link';
import clientPromise from '../../lib/mongo';

const BlogPage = ({ blogs }) => {
  console.log(blogs);

  return (
    <>
      <div className="blog__page">
        <h3>Blog</h3>
        <p>
          I&apos;ve been writing online since 2014, mostly about web development
          and tech careers. In total, I&apos;ve written 68 articles on this
          site. Use the search below to filter by title.
        </p>
        <div className="container">
          <h3>All Posts</h3>
          {blogs &&
            blogs.map((blog) => {
              return (
                <article className="content" key={blog._id}>
                  <Link href="/blogs/[slug]" as={'/blogs/' + blog._id}>
                    <a>
                      <div className="description">
                        <div className="blog__title">
                          <h5>{blog.title}</h5>
                          <p>{new Date(blog.createdAt).toDateString()}</p>
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
  const client = await clientPromise;
  const db = client.db('portfolio_db');

  const data = await db.collection('blogs').find().toArray();
  const blogs = JSON.parse(JSON.stringify(data));

  return {
    props: { blogs },
  };
};
