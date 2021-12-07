import Image from 'next/image';
import { db } from '../../lib/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

function BlogDetails({ blog }) {
  console.log(blog);

  return (
    <div className="blog__details">
      <div className="conclution">
        {blog && (
          <article key={blog.id}>
            <h3>{blog.title}</h3>
            <div className="description">
              <div className="author__container">
                <div className="info__left">
                  <div className="author__img"></div>
                  <p>{blog.author}</p>
                  <span>/</span>
                  <p>{new Date(blog.createdAt).toDateString()}</p>
                </div>
                <div className="info__right">
                  <p>*12 min read</p>
                  <p>{blog.location}</p>
                </div>
              </div>
              <div className="img__container">
                <Image src={blog.img} alt={blog.img} layout="fill" />
              </div>
            </div>
          </article>
        )}
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
  const blog = {
    ...docSnap.data(),
    id: docSnap.id,
    createdAt: docSnap.data().createdAt.toMillis(),
  };

  return {
    props: { blog },
  };
};
