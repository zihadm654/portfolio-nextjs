import { Icon } from '../utility/Button';
import { SiGithub, SiDribbble } from 'react-icons/si';
import Link from 'next/link';

import Image from 'next/image';
const Cards = ({ projects }) => {
  return (
    <div className="cards">
      {projects &&
        projects.map((card) => {
          return (
            <div className="wrapper" key={card.id}>
              <Link href={`/projects/${card.id}`}>
                {/* <a> */}
                <div className="card">
                  <Image src={card.img} alt={card.img} layout="fill" />
                  <div className="card__text">
                    <p>{card.time}</p>
                    <h5>{card.title}</h5>
                    <Icon site={`/projects/${card.id}`} text="see case study" />
                  </div>
                </div>
                {/* </a> */}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
