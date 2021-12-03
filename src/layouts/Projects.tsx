import { Button } from '../utility/Button';
import Cards from '../components/Cards';
import clientPromise from '../../lib/mongo';

function Projects({}) {
  // console.log(posts);

  return (
    <section className="project">
      <div className="project__title">
        <h2>Featured Projects</h2>
        <p>
          Designed seamless interfaces, Built beautiful websites, & Composed
          inspiring animations.
        </p>
      </div>
      {/* <Cards /> */}
      <Button
        className={'secondary__btn'}
        site={'/projects'}
        text={'see more'}
      />
    </section>
  );
}
export default Projects;
