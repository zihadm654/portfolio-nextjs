import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../../src/utility/Animation';
const TrandingPage = () => {
  return (
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
  );
};

export default TrandingPage;
