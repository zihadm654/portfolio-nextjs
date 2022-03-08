import { motion } from "framer-motion";
const Index = () => {
  return (
    <motion.section exit={{ opacity: 0 }} className="tranding">
      <div className="recent">
        <h4>Recently Added</h4>
        <p>coming soon...</p>
      </div>
    </motion.section>
  );
};

export default Index;
