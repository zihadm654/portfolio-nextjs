import { db } from '../../src/lib/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import Cards from '../../src/components/Cards';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../../src/utility/Animation';

const ProjectPage = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects page || Abdul Malek</title>
        <meta
          name="projects"
          content="This project page holds all the projects completed for showcase."
        ></meta>
      </Head>
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
          <Cards projects={projects} />
        </div>
      </motion.section>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async () => {
  const colRef = collection(db, 'projects');

  const res = await getDocs(colRef);
  const projects = res?.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toMillis(),
    };
  });
  return {
    props: { projects },
  };
};
