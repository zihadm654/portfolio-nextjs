import React, { useEffect } from 'react'
// import { SlideData } from "../components/SlideData"
// import Loader from "../components/Loader"
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiGithub,
  SiGit,
  SiWebpack,
  SiGreensock,
  SiStyledComponents,
} from 'react-icons/si'
const AboutPage = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section className="about__page">
      <div className="about__description">
        <h5>A FEW WORDS ABOUT ME</h5>
        <h3>
          I’m Abdul Malik, a <span>Front-end-developer & UI/UX designer </span> who focuses on
          telling stories visually, through <span>minimalistic </span> and clear way. I design and develop <span>responsive websites </span>and functional user friendly interfaces.
        </h3>
        <p>
          Over the past 3 years I have been working and as a rising startups
          around the world as a developer and designer, working solo. In my
          spare time I enjoy to see sunset and adventures.
        </p>
      </div>
      <div
        className="about__slider">
      </div>

      <div className="language__container">
        <div className="language__title">
          <h3>LANGUAGES & TOOLS I DO USE</h3>
        </div>
        <div className="languages">
          <SiHtml5 className="language html" />
          <SiCss3 className="language css" />
          <SiSass className="language scss" />
          <SiJavascript className="language javascript" />
          <SiReact className="language react" />
          <SiGithub className="language" />
          <SiGit className="language git" />
          <SiWebpack className="language webpack" />
          <SiGreensock className="language gsap" />
          <SiStyledComponents className="language styled" />
        </div>
      </div>
      <div className="tools">
        <div className="tools__left">
          <h5>DEVELOPER SERVICES</h5>
          <h4>
            Web & mobile / Front-end / Responsive / Animation / Functional
          </h4>
        </div>
        <div className="tools__middle">
          <h5>DESIGN SERVICES</h5>
          <h4>
            Art direction / Web & Mobile / UX & UI / Typography / Interface
          </h4>
        </div>
        <div className="tools__right">
          <h5>TOOLS I USE</h5>
          <h4>VS code / Figma / Photoshop / Adobe XD / Pen & paper</h4>
        </div>
      </div>
      <div className="experience">
        <h5>EXPERIENCE</h5>
        <h3>Over 3 years of experience</h3>
        <p>
          I’ve been lucky enough to establish relationships with amazing clients
          from all over the world, ranging from individual clients, through
          up-and-coming startups, to multinational companies. For more details,
          head over to my<span> LinkedIn profile</span>.
        </p>
      </div>
    </section >
  )
}

export default AboutPage
