import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills({ stagger, fadeIn }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={controls}
      variants={stagger}
      className="skills__container"
    >
      <div className="skills__description">
        <motion.h5
          ref={ref}
          animate={controls}
          initial="initial"
          variants={fadeIn}
        >
          SERVICES
        </motion.h5>
        <motion.h2
          ref={ref}
          animate={controls}
          initial="initial"
          variants={fadeIn}
        >
          We build digital brand & experiences that makes value
        </motion.h2>
        <motion.p
          ref={ref}
          animate={controls}
          initial="initial"
          variants={fadeIn}
        >
          Whatever the challenge you&apos;re facing, we are there to help you
          out & stand out on digital platforms.
        </motion.p>
      </div>
      <motion.div
        // variants={stagger}
        // ref={ref}
        // initial="initial"
        // animate={controls}
        className="skills__cards"
      >
        {data.map((skill, i) => {
          return (
            <motion.div
              key={i}
              // ref={ref}
              // initial="initial"
              // animate={controls}
              // variants={fadeIn}
              className="skill"
            >
              <Image src={skill.img} alt={skill.img} />
              <h5>{skill.title}</h5>
              <hr />
              {skill.values.map((item, i) => (
                <div key={i} className="values">
                  <p>{item}</p>
                  <hr />
                </div>
              ))}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default Skills;

import ui from "../../public/assets/UI.svg";
import user from "../../public/assets/user.svg";
import animation from "../../public/assets/animation.svg";
import development from "../../public/assets/development.svg";
import { useEffect } from "react";
const data = [
  {
    img: ui,
    title: "Our Values",
    values: ["Brand strategy", "UI/UX design", "Branding", "Consulting"],
  },
  {
    title: "UI Design",
    img: development,
    values: [
      "UI/UX design",
      "Responsive design",
      "Frontend",
      "Testing",
      "Frontend Development",
    ],
  },
  {
    img: user,
    title: "User Experience",
    values: ["Mobile", "Tablet", "Laptop", "Destop", "Cross platform"],
  },
  {
    img: animation,
    title: "Motion & Animation",
    values: [
      "Simple animation",
      "Custom animation",
      "Interative animation",
      "Page Transition",
    ],
  },
];
