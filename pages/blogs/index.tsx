import { useState, useEffect } from 'react';
import Link from 'next/link';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  // const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'blogs'), (snap) => {
      setPosts(
        snap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
      setLoading(false);
    });
    return unsub;
  }, []);
  if (loading) return <div>loading...</div>;
  // console.log(article);

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
                    <Link href="/blogs/[slug]" as={'/blogs/' + blog.id}>
                      <a>
                        <div className="description">
                          <div className="blog__title">
                            <h5>{blog.title}</h5>
                            <p>{blog.timestamp}</p>
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
