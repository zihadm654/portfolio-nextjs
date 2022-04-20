import { Icon } from '../utility/Button';
// import { HorizontalScroll } from '../helpers/Animation'
import Image from 'next/image';
import me from '../../public/assets/IMG_20220101_115612.jpg';
function About() {
  return (
    <>
      <div className="about">
        <div className="about__wrapper">
          <div className="img__wrapper">
            <Image src={me} alt="me" layout="fill" objectFit="cover" />
          </div>
          <div className="about__description">
            <p>Hi, I&#39;m Abdul Malek</p>
            <h3>Frontend-developer & UI/UX designer Crafting projects</h3>
            <p>
              My journey from an Arts Student to a Front-end developer with
              designing experience.
            </p>
            <Icon site={'/about'} text={'More about me'} />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
