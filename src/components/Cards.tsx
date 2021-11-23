import { useState, useEffect } from 'react';
import { Icon } from '../utility/Button';
import { SiGithub, SiDribbble } from 'react-icons/si';
import Link from 'next/link';

import Image from 'next/image';
const Cards = ({ projects }) => {
  const [cases, setCases] = useState([]);

  return (
    <div className="cards">
      {projects &&
        projects.map((card) => {
          return (
            <div className="wrapper" key={card.name}>
              <div className="card">
                <Image src={card.img} alt={card.img} layout="fill" />
              </div>
              <div className="card__text">
                <h5>{card.name}</h5>
                <p>{card.description}</p>
                <Icon site={`/projects/${card.slug}`} text="see case study" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
