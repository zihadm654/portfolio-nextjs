import { Icon } from "../utility/Button";
// import { HorizontalScroll } from '../helpers/Animation'

function About() {
  return (
    <>
      <div className="about">
        <div className="about__wrapper">
          <div className="img__wrapper"></div>
          <div className="about__description">
            <h5>Hi, I’m Abdul Malek</h5>
            <h3>Frontend-developer & UI/UX designer Crafting projects</h3>
            <p>
              My journey from an Arts Student to a Front-end developer with
              designing experience.
            </p>
            <Icon site={"/about"} text={"More about me"} />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
