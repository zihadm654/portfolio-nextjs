import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { fadeIn, stagger } from '../utility/Animation';
import { Button } from '../utility/Button';

const Blogs = ({ blogs }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <div className="blog">
      <motion.h3
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeIn}
      >
        Popular Blogs
      </motion.h3>
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={controls}
        className="container"
      >
        {blogs?.map((blog) => (
          <motion.div
            key={blog.slug}
            ref={ref}
            variants={stagger}
            initial="hidden"
            animate={controls}
            className="blog__container"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <a>
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>
              </a>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="btn__container">
        <Button
          variants={'secondary__btn'}
          site={'/blogs'}
          text={'See all blogs'}
        />
      </div>
    </div>
  );
};

export default Blogs;
