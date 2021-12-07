import { Button } from '../utility/Button';
import { FeaturedCards } from '../components/Cards';

function Projects({ posts }) {
  console.log(posts);

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
        <FeaturedCards posts={posts} />
      </section>
      <div className="btn__container">
        <Button
          className={'secondary__btn'}
          site={'/projects'}
          text={'see more'}
        />
      </div>
<<<<<<< HEAD
    </>
=======
      <Cards />
      <Button
        className={'secondary__btn'}
        site={'/projects'}
        text={'see more'}
      />
    </section>
>>>>>>> parent of 8ee4bca (firebase setup finding solution of  ng solutions of maps)
  );
}
export default Projects;
