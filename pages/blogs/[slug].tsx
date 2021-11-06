import { useEffect, useState } from 'react';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { db } from '../../src/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
function BlogDetails() {
  const [blog, setBlog] = useState([]);
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    // onSnapshot(collection(db, 'blogs', 'first-blog', 'articles'), (snap) => {
    //   setArticle(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   setLoading(false);
    // });
    const find = query(collection(db, 'blogs', 'first-blog', 'articles'));
    // console.log(find.map());
    const articles = [];
    const getArticle = async () => {
      const snap = await getDocs(find);
      snap.forEach((doc) => {
        articles.push({
          ...doc.data(),
          id: doc.id,
        });
        setArticle(articles);
      });
    };
    getArticle();

    const q = query(collection(db, 'blogs'), where('title', '==', slug));
    const post = [];
    const getData = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        post.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setBlog(post);
      setLoading(false);
    };
    getData();
  }, [slug]);
  if (loading) return <div>loading...</div>;
  return (
    <div className="blog__details">
      {!blog
        ? loading
        : blog.map((i) => (
            <article key={i.id}>
              <h3>{i.title}</h3>
              <div className="description">
                <div className="author__container">
                  <div className="info__left">
                    <div className="author__img"></div>
                    <p>{i.author}</p>
                    <span>/</span>
                    <p>{i.place}</p>
                  </div>
                  <div className="info__right">
                    <p>*12 min read</p>
                    <p>{i.location}</p>
                  </div>
                </div>
                <div className="img__container">
                  {/* <Image src={blog.Img} alt={blog.id} /> */}
                </div>
              </div>
              {article.map((i) => (
                <article key={i.title}>
                  <h5>{i.title}</h5>
                  <p>{i.body}</p>
                </article>
              ))}
            </article>
          ))}

      <div className="conclution">
        <h4>Conclusion:-</h4>
        <p>
          Learn by breaking things into parts and enjoying that you are doing
          that is the effective way to get going with programming. Because
          without understanding it you cant go long way. So, have fun
        </p>
        <h5>I am Abdul malik.</h5>
        <span> Front-end-developer & UI/UX designer</span>
        <p>I am there to make developer life easier.</p>
      </div>
    </div>
  );
}

export default BlogDetails;
