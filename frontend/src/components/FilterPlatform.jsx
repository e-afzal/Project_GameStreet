import React, { useRef } from "react";

const FilterPlatform = ({ setLoading, setPlatform }) => {
  // REFS
  const platformAccordion = useRef();

  // HANDLERS
  const toggleAccordion = (accordion) => {
    accordion.current.classList.toggle("active");
  };

  const platformHandler = (e) => {
    setLoading(true);
    setPlatform(e.target.id);
    setLoading(false);
  };

  return (
    // FILTER - PLATFORM
    <div
      className="accordion-general"
      ref={platformAccordion}
      onClick={() => toggleAccordion(platformAccordion)}
    >
      <div className="filter-label">
        <h4>Platform</h4>
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
            id="PS5"
            name="platform"
            onClick={platformHandler}
          />
          <label htmlFor="PS5">PS5</label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="PS4"
            name="platform"
            onClick={platformHandler}
          />
          <label htmlFor="PS4">PS4</label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="Xbox Series X|S"
            name="platform"
            onClick={platformHandler}
          />
          <label htmlFor="Xbox Series X|S">Xbox Series X|S</label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="Xbox One"
            name="platform"
            onClick={platformHandler}
          />
          <label htmlFor="Xbox One">Xbox One</label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="Nintendo Switch"
            name="platform"
            onClick={platformHandler}
          />
          <label htmlFor="Nintendo Switch">Nintendo Switch</label>
        </div>
      </div>
    </div>
  );
};

export default FilterPlatform;
