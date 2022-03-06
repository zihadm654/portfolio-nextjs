import { motion } from "framer-motion";
import Image from "next/image";
// import img from "../../public/assets/IMG_20220101_115612-removebg-preview (1).png";
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__left">
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeInOut" },
          }}
        >
          We Design & Develop<span></span>
        </motion.h5>
        <h1>Taking your vision and serving it as a reality</h1>
        <p>
          We help brands in building beautiful websites, web apps and helping
          them carve their stories through engaging digital art experiences.
        </p>
      </div>
      <div className="hero__right">{/* <Image src={img} alt="me" /> */}</div>
    </section>
  );
}

export default Hero;
