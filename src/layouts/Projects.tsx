import { Button } from "../utility/Button";
import { FeaturedCard } from "../components/Cards";

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
        <div className="project__container">
          <FeaturedCard posts={posts} />
        </div>
        <div className="btn__container">
          <Button
            className={"secondary__btn"}
            site={"/projects"}
            text={"see more"}
          />
        </div>
      </section>
    </>
  );
}
export default Projects;
