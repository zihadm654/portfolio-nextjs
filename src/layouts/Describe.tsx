import { Button } from '../utility/Button';
function Describe() {
  return (
    <div className="describe">
      <div className="describe__left">
        <h2>
          Your website should turn<span> visitors</span> into{' '}
          <span>engaged</span> customers
        </h2>
        <h4>
          These two extra things make all the difference between a visit and a
          sale in your buiness.
        </h4>
      </div>
      <div className="describe__right">
        <p>
          When I say high-performing website, I don’t just mean a beautiful
          looking website; although that is most definitely a part of it.
        </p>
        <div className="line__img">
          <ul>
            <h5>What I mean by a high-performing website is:</h5>
            <li>LOOKING GOOD</li>
            <li>PLUS Getting discovered by your clients</li>
            <li>PLUS closing them</li>
          </ul>
        </div>
        <p>
          Your high-performing website will achieve this through the use of
          intentional design and on-the-pulse marketing tactics.
        </p>
        <p>
          <strong>
            A good, intentional design will position you as the expert and
            authority that you know you are, conveying trust among your
            visitors.
          </strong>
        </p>
        <p>
          If you want to discover how you stand out from the rest and be
          represented by a high-performing, 24/7 lead-generating website, then
          connect with me by booking your free, 30-minute call below.
        </p>
        <Button
          site={'/contact'}
          className="primary__btn"
          text="Book a free consultant"
        />
      </div>
    </div>
  );
}

export default Describe;
