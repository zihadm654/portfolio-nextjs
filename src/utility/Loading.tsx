import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div initial={false} animate={{ y: 0 }} className="loading">
      <div className="circle">loading...</div>
    </motion.div>
  );
};

export default Loading;
