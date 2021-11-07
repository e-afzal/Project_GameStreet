import React, { useRef } from "react";

const FilterAvail = ({ setLoading, availability, setAvailability }) => {
  // REFS
  const availableAccordion = useRef();

  // HANDLERS
  const toggleAccordion = (accordion) => {
    accordion.current.classList.toggle("active");
  };

  const availabilityHandler = (e) => {
    setLoading(true);
    setAvailability(e.target.id);
    setLoading(false);
  };
  return (
    // FILTER - AVAILABILITY
    <div
      className="accordion-general"
      ref={availableAccordion}
      onClick={() => toggleAccordion(availableAccordion)}
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
            name="availability"
            onClick={availabilityHandler}
          />
          <label htmlFor="In Stock">In Stock</label>
        </div>

        <div className="input-group">
          <input
            type="radio"
            id="Out of Stock"
            name="availability"
            onClick={availabilityHandler}
          />
          <label htmlFor="Out of Stock">Out of Stock</label>
        </div>
      </div>
    </div>
  );
};

export default FilterAvail;
