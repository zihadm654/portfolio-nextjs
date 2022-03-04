import { motion } from "framer-motion";
import Image from "next/image";
import Available from "../../public/assets/available.svg";
import { Button } from "../utility/Button";
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
          I am a self-taught Front-end-developer and UI/UX designer. Crafting
          Website Based on <strong>Simplicity and Performance</strong> that are
          conversions-focused, brand-accurate,
          <strong> user-friendly, and performent.</strong>
        </p>
        <Button
          className="primary__btn"
          text="Book a free consultation"
          site="/contact"
        />
      </div>
      <div className="hero__right">
        <img src="" alt="img" />
      </div>
    </section>
  );
}

export default Hero;
