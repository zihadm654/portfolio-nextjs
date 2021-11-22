// import Image from 'next/image';
import { db } from '../../lib/firebase';
import { collection, getDoc, doc, getDocs } from 'firebase/firestore';
function BlogDetails({ blogProps }) {
  const blog = JSON.parse(blogProps);
  let time = new Date(blog.timestamp.seconds * 1000).toDateString();

  return (
    <div className="blog__details">
      <div className="conclution">
        <article>
          <h3>{blog.title}</h3>
          <div className="description">
            <div className="author__container">
              <div className="info__left">
                <div className="author__img"></div>
                <p>{blog.author}</p>
                <span>/</span>
                <p>{time}</p>
              </div>
              <div className="info__right">
                <p>*12 min read</p>
                <p>{blog.location}</p>
              </div>
            </div>
            <div className="img__container">
              {/* <Image src={blog.Img} alt={blog.id} layout="fill" /> */}
            </div>
          </div>
          {/* {article.map((i) => (
              <article key={i.title}>
                <h5>{i.title}</h5>
                <p>{i.body}</p>
              </article>
            ))} */}
        </article>
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

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, 'blogs'));
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { slug: doc.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.slug;
  const docRef = doc(db, 'blogs', id);
  const docSnap = await getDoc(docRef);
  return {
    props: { blogProps: JSON.stringify(docSnap.data()) || null },
  };
};
