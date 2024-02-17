'use client';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';

function Skills() {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('show');
  //   }
  // }, [controls, inView]);

  return (
    <motion.section
      // ref={ref}
      // initial="hidden"
      // animate={controls}
      // variants={stagger}
      className='skills__container'
    >
      <div className='skills__description'>
        <motion.h5
        // ref={ref} variants={fadeIn}
        >
          SERVICES
        </motion.h5>
        <motion.h2
        //  ref={ref} variants={fadeIn}
        >
          We build digital brand & experiences that makes value
        </motion.h2>
        <motion.p
        // ref={ref} variants={fadeIn}
        >
          Whatever the challenge you&apos;re facing, we are there to help you
          out & stand out on digital platforms.
        </motion.p>
      </div>
      <motion.div
        // variants={stagger}
        // ref={ref}
        // initial="initial"
        // animate={controls}
        className='skills__cards'
      >
        {data.map((skill, i) => {
          return (
            <motion.div
              key={i}
              // ref={ref}
              // initial="initial"
              // animate={controls}
              // variants={fadeIn}
              className='skill'
            >
              <Image src={skill.img} alt={skill.img} height={500} width={500} />
              <h5>{skill.title}</h5>
              <hr />
              {skill.values.map((item, i) => (
                <div key={i} className='values'>
                  <p>{item}</p>
                  <hr />
                </div>
              ))}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default Skills;

// import { useEffect } from 'react';
import { fadeIn, stagger } from '../../utility/Animation';
const data = [
  {
    img: '/assets/UI.svg',
    title: 'Our Values',
    values: [
      'Development',
      'Quality Communication',
      'Fully Functional',
      'Web Security',
      'Full Stack Solution',
    ],
  },
  {
    title: 'UI Design',
    img: '/assets/development.svg',
    values: [
      'UI/UX design',
      'Responsive design',
      'Interactive UI',
      'User Friendly Design',
      'Hierarchy',
    ],
  },
  {
    img: '/assets/user.svg',
    title: 'User Experience',
    values: [
      'Cross Platform',
      'Secured',
      'Interaction',
      'Cross Devices',
      'Progressive web app',
    ],
  },
  {
    img: '/assets/animation.svg',
    title: 'Tools & Animation',
    values: [
      'Nextjs / Reactjs, TYPESCRIPT',
      'HTML, CSS, JS, SCSS, TAILWINDCSS',
      'GIT, GITHUB, GITLAB, VERCEL',
      'MONGODB, FIREBASE, PRISMA, NEXTAUTH, REDUX,',
      'FIGMA, STYLE COMPS, JSON, ',
    ],
  },
];
