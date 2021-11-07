import { useState, useEffect } from 'react';
import { Icon } from '../utility/Button';
import { SiGithub, SiDribbble } from 'react-icons/si';
import Link from 'next/link';
// import { projectData } from '../../data/projectData';
import { db } from '../../lib/firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import Image from 'next/image';
const Cards = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onSnapshot(collection(db, 'projects'), (snap) => {
      setCases(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });
  }, []);

  if (loading) return <div>loading...</div>;
  return (
    <div className="cards">
      {!cases
        ? loading
        : cases.map((card) => {
            return (
              <div className="wrapper" key={card.name}>
                <div className="card">
                  {/* <Image src={card.img} alt={card.img} layout="fill" /> */}
                  <img src={card.img} alt={card.img} />
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
