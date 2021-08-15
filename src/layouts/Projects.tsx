import { Button } from '../utility/Button';
function Projects() {
  return (
    <section className="project">
      <div className="project__title">
        <h2>Selected Projects</h2>
        <p>
          Designed seamless interfaces, Built beautiful websites, & Composed
          inspiring animations.
        </p>
      </div>
      <Button
        className={'secondary__btn'}
        site={'/project'}
        text={'see more'}
      />
    </section>
  );
}
export default Projects;
