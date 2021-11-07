import React, { useRef } from "react";

const FilterPriceMob = ({ setLoading, setPrice }) => {
  // REFS
  const accGenPrice = useRef();

  // HANDLERS
  const toggleAccordion = (accordion) => {
    accordion.current.classList.toggle("active");
  };

  const priceMobileHandler = (e) => {
    e.stopPropagation();
    setLoading(true);
    setPrice(e.target.id);
    setLoading(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="accordion-general-mobile"
      ref={accGenPrice}
      onClick={() => toggleAccordion(accGenPrice)}
    >
      <div className="filter-label">
        <h4>Price</h4>
        <svg width="15" height="10" viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="filter-options">
        <div className="input-group">
          <input
            type="radio"
            name="price"
            id="0-500"
            onClick={priceMobileHandler}
          />
          <label htmlFor="0-500" onClick={stopPropagation}>
            0 - 500
          </label>
        </div>
        <div className="input-group">
          <input
            type="radio"
            name="price"
            id="500-1000"
            onClick={priceMobileHandler}
          />
          <label htmlFor="500-1000" onClick={stopPropagation}>
            500 - 1000
          </label>
        </div>
        <div className="input-group">
          <input
            type="radio"
            name="price"
            id="1000-1500"
            onClick={priceMobileHandler}
          />
          <label htmlFor="1000-1500" onClick={stopPropagation}>
            1000 - 1500
          </label>
        </div>
        <div className="input-group">
          <input
            type="radio"
            name="price"
            id="1500-2000"
            onClick={priceMobileHandler}
          />
          <label htmlFor="1500-2000" onClick={stopPropagation}>
            1500 - 2000
          </label>
        </div>
        <div className="input-group">
          <input
            type="radio"
            name="price"
            id="2000+"
            onClick={priceMobileHandler}
          />
          <label htmlFor="2000+" onClick={stopPropagation}>
            2000+
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPriceMob;
