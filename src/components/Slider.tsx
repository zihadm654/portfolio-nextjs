import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { useState } from 'react';
import slidedata from '../../data/slidedata.json';
function Slider() {
  const [activeItem, setActiveItem] = useState(0);

  const nextHandler = () => {
    setActiveItem(activeItem === slidedata.length - 1 ? 0 : activeItem + 1);
  };
  const prevHandler = () => {
    setActiveItem(activeItem === 0 ? slidedata.length - 1 : activeItem - 1);
  };
  const moveDot = (i) => {
    setActiveItem(i);
  };
  return (
    <section className="slider">
      <div className="clientInfo">
        <h4>{slidedata[activeItem].name}</h4>
        <p>{slidedata[activeItem].title}</p>
      </div>
      <div className="slideContent">
        <div className="quotation">
          <ImQuotesLeft className="left-quote" />
          <p>{slidedata[activeItem].quote}</p>
          <ImQuotesRight className="right-quote" />
        </div>
      </div>
      <div className="wrapper__btn">
        <button className="btn prev" onClick={prevHandler}>
          <BsArrowLeft />
        </button>
        <button className="btn next" onClick={nextHandler}>
          <BsArrowRight />
        </button>
      </div>
      <div className="dots">
        {Array.from({ length: 4 }).map((item, i) => (
          <div
            key={i}
            onClick={() => moveDot(i)}
            className={activeItem === i ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
