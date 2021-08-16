import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import Loader from "../components/Loader";
// import { describe } from "../helpers/Animation"
// import { Blogs } from "../data/blogs.js"
const BlogPage = () => {
  // const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="blog__page">
      {/* <Loader /> */}
      <h4>Welcome to my personal blog</h4>
      <div className="container">
        {/* {Blogs.map((blog, index) => (
          <article
            key={index}
            className="content">
            <Link to={"/blogs/" + blog.slug} key={blog.slug}>
              <div className="blog__img">
                <img src={blog.img} alt={blog.img} />
              </div>
              <div className="description">
                <h5 >{blog.title}</h5>
                <div className="author__container">
                  <div className="author__img">
                    <img src={blog.authorImage} alt={blog.name} />
                  </div>
                  <div className="author__info">
                    <span>{blog.author}</span>
                    <span>{blog.place}</span>
                  </div>
                </div>
                <p>{blog.breif}</p>
              </div>
            </Link>
          </article>
        ))} */}
      </div>
    </div>
  );
};
export default BlogPage;
