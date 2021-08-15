import { useState } from 'react';
import { slidedata } from '../data/slidedata';
function Slider() {
  const [activeItem, setActiveItem] = useState(0);

  const nextHandler = () => {
    setActiveItem(activeItem === slidedata.length - 1 ? 0 : activeItem + 1);
  };
  const prevHandler = () => {
    setActiveItem(activeItem === 0 ? slidedata.length - 1 : activeItem - 1);
  };
  return (
    <section className="slider">
      <div className="clientInfo">
        <h4>{slidedata[activeItem].name}</h4>
        <p>{slidedata[activeItem].title}</p>
      </div>
      <div className="slideContent">
        <div className="quotation">
          {/* <ImQuotesLeft className="left-quote" /> */}
          <p>{slidedata[activeItem].quote}</p>
          {/* <ImQuotesRight className="right-quote" /> */}
        </div>
      </div>
      <div className="wrapper__btn">
        <button className="btn prev" onClick={prevHandler}>
          {/* <BsArrowLeft /> */}
        </button>
        <button className="btn next" onClick={nextHandler}>
          {/* <BsArrowRight /> */}
        </button>
      </div>
    </section>
  );
}

export default Slider;
