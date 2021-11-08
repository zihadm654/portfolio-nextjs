import Image from 'next/image';
import Available from '../../public/assets/available.svg';
import { Button } from '../utility/Button';
import { motion } from 'framer-motion';
function Hero() {
  return (
    <section id="hero" className="hero__wrapper">
      <motion.div
        className="hero__container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="circle__text">
          <Image src={Available} alt="available" />
        </div>
        <motion.h5 variants={items}>
          Hello, I am Abdul Malik
          <svg width="40px" height="1" color="#8f00ff">
            <path fillRule="evenodd" d="M0 0h66v4H0z" />
          </svg>
          🚀 Available For Freelance Work
        </motion.h5>
        <motion.h1 variants={items}>
          Taking your vision and serving as a reality
        </motion.h1>
        <p>
          I am a self-taught Front-end-developer and UI/UX designer. Crafting
          Website Based on Simplicity and Performance that are{' '}
          <span>
            conversions-focused, brand-accurate, user-friendly, performance and
            minimalistic based.
          </span>
        </p>
        <Button
          className="primary__btn"
          text="Book a free consultation"
          site="/contact"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
};
const items = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
