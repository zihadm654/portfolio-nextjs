/* eslint-disable @next/next/link-passhref */
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
            <div className="wrapper" key={card._id}>
              <Link href={`/projects/${card._id}`}>
                {/* <a> */}
                <div className="card">
                  <Image src={card.img} alt={card.img} layout="fill" />
                  <div className="card__text">
                    <h5>{card.title}</h5>
                    <p>{card.sub}</p>
                    <Icon
                      site={`/projects/${card._id}`}
                      text="see case study"
                    />
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
