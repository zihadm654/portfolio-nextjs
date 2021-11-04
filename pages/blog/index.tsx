import { useState, useEffect } from 'react';
import Link from 'next/link';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  typeof {
    blogs: Object,
  };
  useEffect(() => {
    onSnapshot(
      collection(db, 'blogs'),
      (snap) => {
        setPosts(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      },
      (error) => {
        console.log('failed to get data from firebase');
      }
    );
  }, []);
  console.log(posts);

  if (loading) return <div>loading...</div>;
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
                    <Link href="/blog/[slug]" as={'/blog/' + blog.title}>
                      <a>
                        <div className="description">
                          <h5>{blog.title}</h5>
                          {/* <span>12pm</span> */}
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
