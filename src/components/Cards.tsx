import { Icon } from "../utility/Button";
import Link from "next/link";

import Image from "next/image";

const Cards = ({ projects }) => {
  return (
    <div className="cards">
      {projects?.map((card) => {
        return (
          <div className="wrapper" key={card.id}>
            <Link href={`/projects/${card.id}`} passHref>
              <div className="card">
                <Image src={card.img} alt={card.img} layout="fill" />
              </div>
            </Link>
            <div className="card__text">
              <p>{card.time}</p>
              <h5>{card.name}</h5>
              <Icon site={`/projects/${card.id}`} text="see case study" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

export const FeaturedCard = ({ posts }) => {
  return (
    <>
      <div className="cards">
        {posts?.map((card) => {
          return (
            <div className="wrapper" key={card.id}>
              <Link href={`/projects/${card.id}`} passHref>
                <div className="card">
                  <Image src={card.img} alt={card.img} layout="fill" />
                </div>
              </Link>
              <div className="card__text">
                <p>{card.time}</p>
                <h5>{card.name}</h5>
                <Icon site={`/projects/${card.id}`} text="see case study" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
