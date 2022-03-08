import { motion } from "framer-motion";
// import Image from "next/image";
// import img from "../../public/assets/IMG_20220101_115612-removebg-preview (1).png";
function Hero({ stagger, fadeIn }) {
  return (
    <section id="hero" className="hero">
      <motion.div variants={stagger} className="hero__left">
        <motion.h5 variants={fadeIn}>
          We Design & Develop<span></span>
        </motion.h5>
        <motion.h1 variants={fadeIn}>
          Taking your vision and serving it as a reality
        </motion.h1>
        <motion.p variants={fadeIn}>
          We help brands in building beautiful websites, web apps and helping
          them carve their stories through engaging digital art experiences.
        </motion.p>
      </motion.div>
      <div className="hero__right">{/* <Image src={img} alt="me" /> */}</div>
    </section>
  );
}

export default Hero;
