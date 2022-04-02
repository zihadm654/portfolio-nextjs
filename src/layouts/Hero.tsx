import { motion } from "framer-motion";
import { Button } from "../utility/Button";
// import Image from "next/image";

function Hero({ stagger, fadeIn }) {
  return (
    <section id="hero" className="hero">
      <motion.div variants={stagger} className="hero__left">
        <motion.p variants={fadeIn}>
          We Design & Develop <span>Branding </span>
          <span>Commerce </span>
          <span>UI/UX </span>
        </motion.p>
        <motion.h1 variants={fadeIn}>
          Taking your vision and serving it as a reality
        </motion.h1>
        <motion.p variants={fadeIn}>
          We help brands in building beautiful websites, web apps and helping
          them carve their stories through engaging digital art experiences.
        </motion.p>
        <Button
          site="/contact"
          variants="primary__btn"
          text="Book a free Consultation"
        />
      </motion.div>
      <div className="hero__right">{/* <Image src={img} alt="me" /> */}</div>
    </section>
  );
}

export default Hero;
