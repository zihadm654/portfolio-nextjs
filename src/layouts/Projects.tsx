import { Button } from "../utility/Button";
import { FeaturedCard } from "../components/Cards";
import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import { db } from "../../lib/firebase";

function Projects({ posts }) {
  return (
    <>
      <section className="project">
        <div className="project__title">
          <h2>Featured Projects</h2>
          <p>
            Designed seamless interfaces, Built beautiful websites, & Composed
            inspiring animations.
          </p>
        </div>
        <FeaturedCard posts={posts} />
      </section>
      <div className="btn__container">
        <Button
          className={"secondary__btn"}
          site={"/projects"}
          text={"see more"}
        />
      </div>
    </>
  );
}
export default Projects;

export const getStaticProps = async () => {
  const colRef = collection(db, "projects");
  const snap = await query(colRef, limit(6), orderBy("createdAt", "desc"));
  const res = await getDocs(snap);
  const posts = res?.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toMillis(),
    };
  });

  return {
    props: { posts },
  };
};
