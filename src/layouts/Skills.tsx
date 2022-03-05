import Image from "next/image";
import celebration from "../../public/assets/celebration.svg";
import ui from "../../public/assets/UI.svg";
import user from "../../public/assets/user.svg";
import animation from "../../public/assets/animation.svg";
import development from "../../public/assets/development.svg";
function Skills() {
  return (
    <div className="skills__container">
      <div className="skills__description">
        <h5>SERVICES</h5>
        <h2>We build digital brand & experiences that makes value</h2>
        <p>
          Whatever the challenge you&apos;re facing, we are there to help you
          out & stand out on digital platforms.
        </p>
      </div>
      <div className="skills__cards">
        {data.map((skill, index) => {
          return (
            <div key={index} className="skill">
              <Image src={skill.img} alt={skill.img} />
              <h5>{skill.title}</h5>
              <hr />
              {skill.values.map((item, i) => (
                <div key={i} className="values">
                  <p>{item}</p>
                  <hr />
                </div>
              ))}
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
    img: development,
    title: "Our Values",
    values: ["Brand strategy", "UI/UX design", "Branding", "Consulting"],
  },
  {
    title: "UI Design",
    img: ui,
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
