import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { db } from '../../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const CaseDetails = () => {
  const [caseDetail, setCaseDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const q = query(collection(db, 'projects'), where('slug', '==', slug));
    const post = [];
    const getData = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        post.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setCaseDetail(post);
      setLoading(false);
    };
    getData();
  }, [slug]);

  console.log(caseDetail);

  if (loading) return <div>loading...</div>;
  return (
    <section className="case__details">
      <div className="case__study">
        <h3>Case Study</h3>
        <p>Dividing projects into parts</p>
      </div>
      {!caseDetail
        ? loading
        : caseDetail.map((i) => (
            <div className="container" key={i.id}>
              <div className="img__wrapper">
                <Image src={i.img} alt={i.img} layout="fill" />
              </div>
              <div className="content">
                <h4>{i.name}</h4>
                <p>{i.description}</p>
              </div>
            </div>
          ))}
    </section>
  );
};

export default CaseDetails;
