import { Button } from "../utility/Button";
import { FeaturedCard } from "../components/Cards";

function Projects({ posts, fadeIn, stagger }) {
  return (
    <>
      <section className="project">
        <div className="project__title">
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>Interface Design & Develop in order to make experience better.</p>
        </div>
        <div className="project__container">
          <FeaturedCard posts={posts} stagger={stagger} fadeIn={fadeIn} />
        </div>
        <div className="btn__container">
          <Button
            className={"secondary__btn"}
            site={"/projects"}
            text={"see all projects"}
          />
        </div>
      </section>
    </>
  );
}
export default Projects;
