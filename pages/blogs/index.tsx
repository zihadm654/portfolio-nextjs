import { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const BlogPage = ({ Blogs }) => {
  const [posts, setPosts] = useState(Blogs);

  console.log(posts);
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
          {posts &&
            posts.map((blog) => {
              return (
                <article className="content" key={blog.id}>
                  <Link href="/blogs/[slug]" as={'/blogs/' + blog.id}>
                    <a>
                      <div className="description">
                        <div className="blog__title">
                          <h5>{blog.title}</h5>
                          <p>{new Date(blog.createdAt).toDateString()}</p>
                        </div>
                        <p>{blog.subTitle}</p>
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
  const res = await getDocs(collection(db, 'blogs'));
  const Blogs = res.docs.map((doc) => {
    return {
      ...doc.data(),
      createdAt: doc.data().createdAt.toMillis(),
      id: doc.id,
    };
  });

  return {
    props: { Blogs },
  };
};
