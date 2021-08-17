import { useState, useEffect } from 'react';
import { db, store } from '../../src/firebase';
import {Icon} from '../utility/Button'
const Cards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.collection('projects').onSnapshot((snapshot) => {
      setProjects(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="cards">
      {projects.map((project) => {
        return (
          <div className="card__wrapper" key={project.name}>
            <div className="image__container">
            </div>
            <div className="card__text">
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <Icon
                  site='/projects/slug'
                  text='see case study'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
