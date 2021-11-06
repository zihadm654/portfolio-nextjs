import { useState, useEffect } from 'react';
import Link from 'next/link';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../src/lib/firebase';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onSnapshot(collection(db, 'blogs'), (snap) => {
      setPosts(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });
  }, []);
  if (loading) return <div>loading...</div>;
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
          {!posts
            ? loading
            : posts.map((blog) => {
                return (
                  <article className="content" key={blog.id}>
                    <Link href="/blogs/[slug]" as={'/blogs/' + blog.title}>
                      <a>
                        <div className="description">
                          <h5>{blog.title}</h5>
                          {/* <span>12pm</span> */}
                          <p>{blog.subTitle}</p>
                          {/* <p>{blog.articles}</p> */}
                          {/* {blog.articles.map((i) => (
                            <article key={i.title}>
                              <h5>{i.title}</h5>
                              <p>{i.body}</p>
                            </article>
                          ))} */}
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
