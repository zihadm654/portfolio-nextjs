import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
import { fadeIn, stagger } from '../utility/Animation';
import { Button } from '../utility/Button';
import { allBlogs } from '../../.contentlayer/generated';

const Blogs = () => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('show');
  //   }
  // }, [controls, inView]);

  return (
    <div className='blog'>
      <h3
      // ref={ref}
      // initial="hidden"
      // animate={controls}
      // variants={fadeIn}
      >
        Popular Blogs
      </h3>
      <div
        // ref={ref}
        // variants={stagger}
        // initial="hidden"
        // animate={controls}
        className='container'
      >
        {allBlogs
          ?.sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slugAsParams}`}>
              <div>
                <h5>{blog.title}</h5>
              </div>
            </Link>
          ))}
      </div>
      <div className='btn__container'>
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
