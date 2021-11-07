import React, { useRef } from "react";

const FilterAvailMob = ({ setLoading, setAvailability }) => {
  // REFS
  const accGenAvail = useRef();

  // HANDLERS
  const toggleAccordion = (accordion) => {
    accordion.current.classList.toggle("active");
  };

  const availabilityMobileHandler = (e) => {
    setLoading(true);
    setAvailability(e.target.id);
    setLoading(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="accordion-general-mobile"
      ref={accGenAvail}
      onClick={() => toggleAccordion(accGenAvail)}
    >
      <div className="filter-label">
        <h4>Availability</h4>
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
            id="In Stock"
            name="type"
            onClick={availabilityMobileHandler}
          />
          <label htmlFor="In Stock" onClick={stopPropagation}>
            In Stock
          </label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="Out Of Stock"
            name="type"
            onClick={availabilityMobileHandler}
          />
          <label htmlFor="Out Of Stock">Out of Stock</label>
        </div>
      </div>
    </div>
  );
};

export default FilterAvailMob;
