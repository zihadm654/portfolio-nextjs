'use client';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import { motion } from 'framer-motion';
import Blogs from '../sections/Blogs';
import { ProjectsTypes, BlogTypes } from '../utility/Types';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/projects', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};

// interface Data {
//   data: ProjectsTypes[];
// }

const Home = async () => {
  // const data = await getData();
  // console.log(data);
  return (
    <motion.div className="container">
      <Hero />
      {/* <Projects posts={posts} /> */}
      {/* <Blogs /> */}
      <Skills />
      <About />
    </motion.div>
  );
};
export default Home;

// export const metaData = {
//   title: 'HomePage',
//   description:
//     'The portfolio site describes who is Abdul Malek Zihad and what he is specialized in. A self taught Frontend Reactjs/Nextjs developer',
// };
