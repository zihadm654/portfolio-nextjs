'use client';
import { Button } from '../utility/Button';
import { FeaturedCard } from '../components/Cards';
import { motion, useAnimation } from 'framer-motion';
import { fadeIn, stagger } from '../utility/Animation';
// import { useEffect } from 'react';

function Projects({ data }) {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('show');
  //   }
  // }, [controls, inView]);
  const sliceData = data?.slice(0, 5);
  return (
    <section className='project'>
      <motion.div
        // ref={ref}
        // initial="hidden"
        // animate={controls}
        // variants={stagger}
        className='project__title'
      >
        <motion.h2
        // ref={ref}
        // initial="hidden"
        // animate={controls}
        // variants={fadeIn}
        >
          Featured <span>Projects</span>
        </motion.h2>
        <motion.p
        // ref={ref}
        // initial="hidden"
        // animate={controls}
        // variants={fadeIn}
        >
          Interface Design & Develop in order to make experience better.
        </motion.p>
      </motion.div>
      <div className='project__container'>
        <div className='cards'>
          {sliceData?.map((item) => (
            <FeaturedCard
              key={item.id}
              id={item.id}
              time={item.time}
              description={item.description}
              title={item.title}
              repo={item.repo}
              site={item.site}
              img={item.img}
              createdAt={item.createdAt}
            />
          ))}
        </div>
      </div>
      <div className='btn__container'>
        <Button
          variants={'secondary__btn'}
          site={'/projects'}
          text={'see all projects'}
        />
      </div>
    </section>
  );
}

export default Projects;
