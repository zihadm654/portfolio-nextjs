import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '@/utility/Animation';

export default function Index({ data, menu, setSelectedIndicator, hide }) {
  const { title, href, index } = data;

  return (
    <motion.div
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
      className='link'
    >
      <motion.div
        variants={scale}
        animate={menu ? 'open' : 'closed'}
        className='indicator'
      ></motion.div>
      <Link href={href} onClick={hide}>
        {title}
      </Link>
    </motion.div>
  );
}
