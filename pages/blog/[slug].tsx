import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'
// import { Blogs } from "../data/blogs.js"

function BlogDetails() {
  // const [blog, setBlog] = useState(null);
  // const { slug } = useParams(null)

  useEffect(() => {
    // const newArray = Blogs.find(array => array.slug === slug)
    // setBlog(newArray)
  }, []);

  // if (!blog) return <div>Loading...</div>;
  return (
    <div className="blog__details">
      <article>
        <h4></h4>
        <div className="img__container">{/* <img src="" /> */}</div>
        <div className="description">
          <div className="author__container">
            <div className="author__img">{/* <img src="" /> */}</div>
            <div className="author__info">
              <h5>-</h5>
              <span></span>
            </div>
          </div>
          <h5></h5>
        </div>
        {/* {blog.descriptions.map((desc, index) => {
          return ( */}
        <article>
          <h5></h5>
          <p></p>
        </article>
        ){/* })} */}
      </article>
      <div className="conclution">
        <h4>Conclusion:-</h4>
        <p>
          Learn by breaking things into parts and enjoying that you are doing
          that is the effective way to get going with programming. Because
          without understanding it you cant go long way. So, have fun
        </p>
        <h5>I am Abdul malik.</h5>
        <span> Front-end-developer & UI/UX designer</span>
        <p>I am there to make developer life easier.</p>
      </div>
    </div>
  );
}

export default BlogDetails;
