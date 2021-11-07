import React, { useRef } from "react";

const FilterCategoryMob = ({ setLoading, setCategory }) => {
  // REFS
  const accGenType = useRef();

  // HANDLERS
  const toggleAccordion = (accordion) => {
    accordion.current.classList.toggle("active");
  };

  const typeMobileHandler = (e) => {
    e.stopPropagation();
    setLoading(true);
    setCategory(e.target.id);
    setLoading(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="accordion-general-mobile"
      ref={accGenType}
      onClick={() => toggleAccordion(accGenType)}
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
            onClick={typeMobileHandler}
          />
          <label htmlFor="accessories" onClick={stopPropagation}>
            Accessories
          </label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="consoles"
            name="type"
            onClick={typeMobileHandler}
          />
          <label htmlFor="consoles" onClick={stopPropagation}>
            Consoles & Bundles
          </label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="games"
            name="type"
            onClick={typeMobileHandler}
          />
          <label htmlFor="games" onClick={stopPropagation}>
            Games
          </label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="merchandises"
            name="type"
            onClick={typeMobileHandler}
          />
          <label htmlFor="merchandises" onClick={stopPropagation}>
            Merchandises
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterCategoryMob;
