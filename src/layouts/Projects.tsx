import { Button } from "../utility/Button";
import { FeaturedCard } from "../components/Cards";
import { motion } from "framer-motion";

function Projects({ posts, fadeIn, stagger }) {
  return (
    <section className="project">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="project__title"
      >
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p>Interface Design & Develop in order to make experience better.</p>
      </motion.div>
      <div className="project__container">
        <FeaturedCard posts={posts} stagger={stagger} fadeIn={fadeIn} />
      </div>
      <div className="btn__container">
        <Button
          variants={"secondary__btn"}
          site={"/projects"}
          text={"see all projects"}
        />
      </div>
    </section>
  );
}
export default Projects;
