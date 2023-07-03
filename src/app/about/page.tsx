'use client';
import Link from 'next/link';
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiGithub,
  SiGit,
  SiFirebase,
  SiGreensock,
  SiNextdotjs,
} from 'react-icons/si';
// import Testimonial from "../../src/layouts/Testimonial";
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../../utility/Animation';
const AboutPage = () => {
  return (
    <>
      <motion.section exit={{ opacity: 0 }} className="about__page">
        <motion.div
          className="about__description"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h5 variants={fadeIn}>A FEW WORDS ABOUT ME</motion.h5>
          <motion.h3 variants={fadeIn}>
            I&apos;m Abdul Malek, a{' '}
            <span>Front-end-developer & UI/UX designer </span> who focuses on
            telling stories visually, through <span>minimalistic </span> and
            clear way. I design and develop <span>responsive websites </span>and
            functional user friendly interfaces.
          </motion.h3>
          <motion.p variants={fadeIn}>
            Over the past 3 years I have been working and as a rising startups
            around the world as a developer and designer, working solo. In my
            spare time I enjoy to see sunset and adventures.
          </motion.p>
        </motion.div>
        <div className="experience">
          <h5>EXPERIENCE</h5>
          <h3>Over 3 years of experience</h3>
          <p>
            I&apos;ve been lucky enough to establish relationships with amazing
            clients from all over the world, ranging from individual clients,
            through up-and-coming startups, to multinational companies. For more
            details, head over to my{' '}
            <Link href={'https://www.linkedin.com/in/zihadm654'}>
              LinkedIn profile
            </Link>
            .
          </p>
        </div>
        <div className="language__container">
          <div className="language__title">
            <h4>LANGUAGES & TOOLS I DO USE</h4>
          </div>
          <div className="languages">
            <SiNextdotjs className="language next-js" />
            <SiReact className="language react" />
            <SiHtml5 className="language html" />
            <SiJavascript className="language javascript" />
            <SiSass className="language scss" />
            <SiCss3 className="language css" />
            <SiGreensock className="language gsap" />
            <SiFirebase className="language firebase" />
            <SiGithub className="language" />
            <SiGit className="language git" />
          </div>
        </div>
        <div className="services">
          <h5 className="title">Services I do Provide?</h5>

          <div className="tools">
            <div className="tools__left">
              <h5>DEVELOPER SERVICES</h5>
              <h4>Website / Frontend / Responsive / Animation / Functional</h4>
            </div>
            <div className="tools__middle">
              <h5>DESIGN SERVICES</h5>
              <h4>
                Art direction / Web & Mobile / UX & UI / Redesign / Interface
              </h4>
            </div>
            <div className="tools__right">
              <h5>TOOLS I USE</h5>
              <h4>VS code / Figma / Photoshop / Adobe XD / Pen & paper</h4>
            </div>
          </div>
        </div>
        {/* <Testimonial /> */}
        <div className="principle">
          <h5 className="title">Principles I do use?</h5>
          <div className="content">
            <h4>For design purposes</h4>
            <article>
              <h5>Grid System</h5>
              <p>
                I use mostly grid system. <span>Grid system</span> is a way
                which can make your design so much clean and align can be so
                much perfect. I use the <span>12 grid.</span> So, it helps me to
                divide the design into<span> 3 parts.</span>
              </p>
            </article>
            <article>
              <h5>Component Style</h5>
              <p>
                I like to use small components and resuse most of the time. That
                way i can be consistent with design and make work easier. And
                most importantly this approach can save time{' '}
                <span>small components</span> And component is like varible if i
                change one it will be changed all at one.
              </p>
            </article>
            <h4>For Development purposes</h4>
            <article>
              <h5>Bem naming convention</h5>
              <p>
                In development part. When i write Html i probably use{' '}
                <span>BEM</span> naming convention to call the classes of html
                elements. It helps me when i style website with SCSS. I can use
                nested style and <span>& percentage</span> .
              </p>
            </article>
            <article>
              <h5>Small components</h5>
              <p>
                By Small components i ment simply dividing my big problems into
                small parts. Simpilicity is the king in every aspect of our
                life. <span>small components</span> saves a lot of time and make
                work more productive.
              </p>
            </article>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutPage;

export const metadata = {
  title: 'About',
  description:
    'This about page holds all the necessary information about Abdul Malek',
};
