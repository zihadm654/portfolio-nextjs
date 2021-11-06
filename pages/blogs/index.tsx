import { useState, useEffect } from 'react';
import Link from 'next/link';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../src/lib/firebase';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  // const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onSnapshot(collection(db, 'blogs'), (snap) => {
      setPosts(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });
  }, []);
  if (loading) return <div>loading...</div>;
  console.log(posts);
  // console.log(article);

  return (
    <>
      <div className="blog__page">
        <h3>Blog</h3>
        <p>
          I&apos;ve been writing online since 2014, mostly about web development
          and tech careers. In total, I&apos;ve written 68 articles on this
          site. Use the search below to filter by title.
        </p>
        <div className="container">
          <h3>All Posts</h3>
          {!posts
            ? loading
            : posts.map((blog) => {
                return (
                  <article className="content" key={blog.id}>
                    <Link href="/blogs/[slug]" as={'/blogs/' + blog.title}>
                      <a>
                        <div className="description">
                          <h5>{blog.title}</h5>
                          <p>{blog.subTitle}</p>
                        </div>
                      </a>
                    </Link>
                  </article>
                );
              })}
        </div>
      </div>
    </>
  );
};
export default BlogPage;

// export const getStaticProps = async () => {
//   let blogs = [];
//   const querySnapshot = await collection(db, 'blogs'),
//   (snap).forEach(snap)=>{
//   // console.log(doc.data().title);

// }
// return (
//   {

//   }
// )
// };
// export const getStaticProps = async () => {
//   let posts = [];
//   try {
//     // await the promise
//     const querySnapshot = await collection(db, 'posts')
//     // "then" part after the await
//     (snap)=>{
//       snap.forEach({
//         console.log(doc.data().title);
//         console.log(doc.data().pid);
//         posts.push({
//           pid: doc.data().pid,
//           title: doc.data().title,
//         });
//       })
//     }

//     console.log(posts);
//   } catch (error) {
//     // catch part using try/catch
//     console.log('Error getting documents: ', error);
//     // return something else here, or an empty props, or throw an exception or whatever
//   }

//   return {
//     props: {
//       posts,
//     },
//   };
// };
