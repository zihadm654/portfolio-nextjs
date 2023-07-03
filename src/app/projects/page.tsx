'use client';
// import { db } from '../../lib/firebase';
// import { getDocs, collection } from 'firebase/firestore';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../../utility/Animation';
import { ProjectsTypes } from '../../utility/Types';
import Cards from '../../components/Cards';

const ProjectPage = async () => {
  return (
    <>
      <motion.section exit={{ opacity: 0 }} className="projects">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="projects__title"
        >
          <motion.h3 variants={fadeIn}>
            Shaping world class websites,
            <br /> designs and experiences
          </motion.h3>
          <motion.p variants={fadeIn}>
            I can help you successfully take your business online while
            assisting you throughout the building process.
          </motion.p>
        </motion.div>
        <div className="container">
          <motion.h3 variants={fadeIn}>Featured Projects</motion.h3>
          {/* <Cards projects={data} /> */}
        </div>
      </motion.section>
    </>
  );
};

export default ProjectPage;

export const metadata = {
  title: 'projects',
  description:
    'This project page holds all the projects completed for showcase.',
};
