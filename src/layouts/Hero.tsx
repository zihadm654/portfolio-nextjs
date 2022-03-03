import { motion } from "framer-motion";
import Image from "next/image";
import Available from "../../public/assets/available.svg";
import { Button } from "../utility/Button";
function Hero() {
  return (
    <section id="hero" className="hero__wrapper">
      <div className="hero__container">
        <div className="circle__text">
          <Image src={Available} alt="available" />
        </div>
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeInOut" },
          }}
        >
          Hello, I am Abdul Malek
          <svg width="40px" height="1" color="#8f00ff">
            <path fillRule="evenodd" d="M0 0h66v4H0z" />
          </svg>
          🚀 Available For Freelance Work
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
    </section>
  );
}

export default Hero;
