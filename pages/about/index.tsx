import { useEffect } from 'react';
// import { SlideData } from "../components/SlideData"
// import Loader from "../components/Loader"
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
  SiNextDotJs,
} from 'react-icons/si';

const AboutPage = () => {
  useEffect(() => {
    // window.scroll(0, 0);
  }, []);
  return (
    <>
      <section className="about__page">
        <div className="about__description">
          <h5>A FEW WORDS ABOUT ME</h5>
          <h3>
            I’m Abdul Malik, a{' '}
            <span>Front-end-developer & UI/UX designer </span> who focuses on
            telling stories visually, through <span>minimalistic </span> and
            clear way. I design and develop <span>responsive websites </span>and
            functional user friendly interfaces.
          </h3>
          <p>
            Over the past 3 years I have been working and as a rising startups
            around the world as a developer and designer, working solo. In my
            spare time I enjoy to see sunset and adventures.
          </p>
        </div>
        {/*<div className="about__slider"></div>*/}
        <div className="experience">
          <h5>EXPERIENCE</h5>
          <h3>Over 3 years of experience</h3>
          <p>
            I’ve been lucky enough to establish relationships with amazing
            clients from all over the world, ranging from individual clients,
            through up-and-coming startups, to multinational companies. For more
            details, head over to my{' '}
            <Link href={'https://www.linkedin.com/in/zihadm654'}>
              <a>LinkedIn profile</a>
            </Link>
            .
          </p>
        </div>
        <div className="language__container">
          <div className="language__title">
            <h4>LANGUAGES & TOOLS I DO USE</h4>
          </div>
          <div className="languages">
            <SiNextDotJs className="language next-js" />
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
        <div className="principle">
          <h4>Principles I do use?</h4>
          <div className="content">
            <h5>For design purposes</h5>
            <article>
              <h5>Grid System</h5>
              <p>
                I use mostly grid system. <span>Grid system</span> is a way
                which can make your design so much clean and align can be so
                much perfect. I use the <span>12 grid.</span> So, it helps me to
                divide the design into<span> 3 parts.</span>
              </p>
            </article>
            <h5>For Development purposes</h5>
            <article>
              <h5>Bem naming convention</h5>
              <p>
                In development part. When i write Html i probably use{' '}
                <span>BEM</span> naming convention to call the classes of html
                elements. It helps me when i style website with SCSS. I can use
                nested style and <span>& percentage</span> .
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
