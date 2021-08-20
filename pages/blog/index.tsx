import { useEffect, useState } from 'react';
import Head from 'next/head';
import { db } from '../../firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    db.collection('blogs').onSnapshot((snapshot) => {
      setBlogs(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="blog"
          content="This is the blogpage. It describe the blogs of this website "
        />
      </Head>
      <div className="blog__page">
        <h4>Welcome to my personal blog</h4>
        <div className="container">
          {blogs.map((blog) => {
            return (
              <article className="content" key={blog.id}>
                <Link href={'/blog/' + blog.slug}>
                  <a>
                    <div className="blog__img">
                      {/* <img src={blog.img} alt={blog.img} /> */}
                    </div>
                    <div className="description">
                      <h5>{blog.title}</h5>
                      <div className="author__container">
                        <div className="author__img">
                          {/* <img src={blog.authorImage} alt={blog.name} /> */}
                        </div>
                        <div className="author__info">
                          <span>{blog.author}</span>
                          <span>{blog.location}</span>
                        </div>
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
