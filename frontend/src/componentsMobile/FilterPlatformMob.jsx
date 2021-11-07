import React, { useRef } from "react";

const FilterPlatformMob = ({ setLoading, setPlatform }) => {
  // REFS
  const accGenPlatform = useRef();

  // HANDLERS
  const toggleAccordion = (accordion) => {
    accordion.current.classList.toggle("active");
  };

  const platformMobileHandler = (e) => {
    setLoading(true);
    setPlatform(e.target.id);
    setLoading(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="accordion-general-mobile"
      ref={accGenPlatform}
      onClick={() => toggleAccordion(accGenPlatform)}
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
            onClick={platformMobileHandler}
          />
          <label htmlFor="PS5" onClick={stopPropagation}>
            PS5
          </label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="PS4"
            name="platform"
            onClick={platformMobileHandler}
          />
          <label htmlFor="PS4" onClick={stopPropagation}>
            PS4
          </label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="Xbox Series X|S"
            name="platform"
            onClick={platformMobileHandler}
          />
          <label htmlFor="Xbox Series X|S" onClick={stopPropagation}>
            Xbox Series X|S
          </label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="Xbox One"
            name="platform"
            onClick={platformMobileHandler}
          />
          <label htmlFor="Xbox One" onClick={stopPropagation}>
            Xbox One
          </label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="Nintendo Switch"
            name="platform"
            onClick={platformMobileHandler}
          />
          <label htmlFor="Nintendo Switch" onClick={stopPropagation}>
            Nintendo Switch
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPlatformMob;
