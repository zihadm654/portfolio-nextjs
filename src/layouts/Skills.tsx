import Image from 'next/image';
import celebration from '../assets/celebration.svg';
import ui from '../assets/UI.svg';
import user from '../assets/user.svg';
import animation from '../assets/animation.svg';
import development from '../assets/development.svg';
import { Icon } from '../utility/Button';
function Skills() {
  return (
    <div className="skills__container">
      <div className="skills__description">
        <Image src={celebration} alt="celebration" />
        <h3>3 years of Experience</h3>
        <p>
          I can help you successfully take your business online while assisting
          you throughout the building process. Building the best experiences &
          bringing value to the table through my animation expertise.
        </p>
        <Icon site="/about" text="learn more" />
      </div>
      <div className="skills__cards">
        {data.map((skill, index) => {
          return (
            <div key={index} className="skill">
              <Image src={skill.img} alt={skill.img} />
              <h5>{skill.title}</h5>
              <p>{skill.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
const data = [
  {
    title: 'User Interface Design',
    img: ui,
    description: 'Mobile App & Web UI Design Micro-Interactions animation',
  },
  {
    img: development,
    title: 'Website Development',
    description:
      'custom Crafting Beautiful website redesign recreate from scretch',
  },
  {
    img: user,
    title: 'User Experience',
    description: 'User Research UX Enhancements UX Audit',
  },
  {
    img: animation,
    title: 'Motion & Animation',
    description: '3D Animation Website Product design and website mockup',
  },
];
