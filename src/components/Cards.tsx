// import { useState, useEffect } from 'react';
// import { db, store } from '../../src/firebase';
import { Icon } from '../utility/Button';
import { SiGithub, SiDribbble } from 'react-icons/si';
import Link from 'next/link';
import { projectData } from '../data/projectData';
import Image from 'next/image';
const Cards = () => {
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   db.collection('projects').onSnapshot((snapshot) => {
  //     setProjects(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);
  return (
    <div className="cards">
      {projectData.map((project) => {
        return (
          <div className="wrapper" key={project.name}>
            <div className="card">
              <div className="image__container">
                <div className="overlay">
                  <div className="site">
                    <Link href="https://github.com/zihadm654/landing-page">
                      <a>
                        <SiGithub style={{ fontSize: '4rem', color: '#fff' }} />
                        <h4>Github</h4>
                      </a>
                    </Link>
                  </div>
                  <hr />
                  <div className="site">
                    <Link href="/">
                      <a>
                        <SiDribbble
                          style={{ fontSize: '4rem', color: '#fff' }}
                        />
                        <h4>Dribble</h4>
                      </a>
                    </Link>
                  </div>
                </div>
                <Image src={project.Img} alt={project.name} />
              </div>
            </div>
            <div className="card__text">
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <Icon site="/projects/slug" text="see case study" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
