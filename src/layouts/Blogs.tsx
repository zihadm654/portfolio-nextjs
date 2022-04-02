import Link from "next/link";
import { motion } from "framer-motion";
const Blogs = ({ blogs }) => {
  return (
    <div className="blog">
      <motion.h3
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        Popular Blogs
      </motion.h3>
      <div className="container">
        {blogs?.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
            <a className="content">
              <h5>{blog.title}</h5>
              <p>{blog.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
