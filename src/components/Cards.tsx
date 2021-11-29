import { Icon } from '../utility/Button';
import { SiGithub, SiDribbble } from 'react-icons/si';
import Link from 'next/link';
import { db } from '../../lib/firebase';
import Image from 'next/image';
import { getDocs, collection } from 'firebase/firestore';

const Cards = ({ projects }) => {
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

// export const getStaticProps = async () => {
//   const res = await getDocs(collection(db, 'projects'));
//   const projects = res.docs.map((doc) => {
//     return {
//       ...doc.data(),
//       createdAt: doc.data().createdAt.toMillis(),
//       id: doc.id,
//     };
//   });

//   console.log(projects);
//   return {
//     props: { projects },
//   };
// };
