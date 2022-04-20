import { motion } from 'framer-motion';
import Head from 'next/head';
import { fadeIn, stagger } from '../../src/utility/Animation';
const New = () => {
  return (
    <>
      <Head>
        <title>Tranding || Abdul Malek</title>
        <meta
          name="Tranding page "
          content="this page is responsible for all the Tranding stuff & information for this website"
        />
      </Head>
      <motion.section exit={{ opacity: 0 }} className="tranding">
        <motion.div
          className="recent"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h4 variants={fadeIn}>Recently Added</motion.h4>
          <motion.p variants={fadeIn}>coming soon...</motion.p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default New;
