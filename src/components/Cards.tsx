import Image from 'next/image';
import Link from 'next/link';

const Cards = ({ projects }) => {
  return (
    <div className="cards">
      {projects.map((project) => {
        return (
          <div className="card__wrapper" key={project.name}>
            <div className="image__container"></div>
            <div className="card__text">
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <Link href="/">
                <a>see case study</a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
