import Image from 'next/image';
import Available from '../assets/available.svg';
import { Button } from '../utility/Button';

function Hero() {
  return (
    <section id="hero" className="hero__wrapper">
      <div className="hero__container">
        <div className="circle__text">
          <Image src={Available} alt="available" />
        </div>
        <h5>
          Hello,I am Abdul Malik
          <svg width="40px" height="1" color="#8f00ff">
            <path fillRule="evenodd" d="M0 0h66v4H0z" />
          </svg>
          Available For Freelance Work
        </h5>
        <h1>Less is more, Simple is clearity</h1>
        <p>
          I am a self-taught Front-end-developer and UI/UX designer. Crafting
          Website Based on Simplicity and Performance that are
          <span>
            {' '}
            conversions-focused, brand-accurate, user-friendly, performance and
            minimalistic based.
          </span>
        </p>
        <Button
          className="primary__btn"
          text="Book a free consultation"
          site="/contact"
        />
      </div>
    </section>
  );
}

export default Hero;
