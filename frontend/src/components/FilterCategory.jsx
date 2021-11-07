import React, { useState, useRef, useEffect } from "react";

const FilterCategory = ({ setLoading, setCategory }) => {
  // REFS
  const productAccordion = useRef();

  // HANDLERS
  const toggleAccordion = (accordion) => {
    accordion.current.classList.toggle("active");
  };

  const typeHandler = (e) => {
    setLoading(true);
    setCategory(e.target.id);
    setLoading(false);
  };
  return (
    // FILTER - PRODUCT TYPE
    <div
      className="accordion-general"
      ref={productAccordion}
      onClick={() => toggleAccordion(productAccordion)}
    >
      <div className="filter-label">
        <h4>Product Type</h4>
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
            id="accessories"
            name="type"
            onClick={typeHandler}
          />
          <label htmlFor="accessories">Accessories</label>
        </div>

        <div className="input-group">
          <input type="radio" id="consoles" name="type" onClick={typeHandler} />
          <label htmlFor="consoles">Consoles & Bundles</label>
        </div>

        <div className="input-group">
          <input type="radio" id="games" name="type" onClick={typeHandler} />
          <label htmlFor="games">Games</label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="merchandises"
            name="type"
            onClick={typeHandler}
          />
          <label htmlFor="merchandises">Merchandises</label>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
