import { useState, useEffect } from 'react';
import { db, store } from '../../firebase';
import { Icon } from '../utility/Button';
import { SiGithub, SiDribbble } from 'react-icons/si';
import Link from 'next/link';
// import { cardData } from '../../data/projectData';
import Image from 'next/image';
const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    db.collection('projects').onSnapshot((snapshot) => {
      setCards(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="cards">
      {cards.map((card) => {
        return (
          <div className="wrapper" key={card.name}>
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
                {/* <Image src={card.Img} alt={card.name} /> */}
              </div>
            </div>
            <div className="card__text">
              <h5>{card.name}</h5>
              <p>{card.description}</p>
              <Icon site="/cards/slug" text="see case study" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
