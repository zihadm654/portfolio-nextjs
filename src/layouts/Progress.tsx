import { Icon } from '../utility/Button';
function Progress() {
  return (
    <section className="progress">
      <div className="progress__description">
        <h5>How i go with projects?</h5>
        <h2>Going beyond what’s possible</h2>
        <div className="list">
          <h4>Concept</h4>
          <span>
            <svg className="line" width="40px" height="1" color="#8f00ff">
              <path fillRule="evenodd" d="M0 0h66v4H0z" />
            </svg>
          </span>
          <h4>Strategy</h4>
          <span>
            <svg className="line" width="40px" height="1" color="#8f00ff">
              <path fillRule="evenodd" d="M0 0h66v4H0z" />
            </svg>
          </span>
          <h4>Design</h4>
          <span>
            <svg className="line" width="40px" height="1" color="#8f00ff">
              <path fillRule="evenodd" d="M0 0h66v4H0z" />
            </svg>
          </span>
          <h4>Develpement</h4>
        </div>
        <p>
          Whatever the challenge, {`we'll`} deliver solution you will love it.
        </p>
        <Icon site={'/about'} text={'learn more'} />
      </div>
    </section>
  );
}

export default Progress;
