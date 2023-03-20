import React, { useState } from "react";

import people from "../data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const { id, img, name, job, text } = people[index];

  const nextPerson = () => {
    // if (index >= people.length - 1) {
    //   const newIndex = 0;
    //   setIndex(newIndex);
    // } else {
    //   const newIndex = index + 1;
    //   setIndex(newIndex);
    // }
    index >= people.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const prevPerson = () => {
    //   if (index <= 0) {
    //     const newIndex = people.length - 1;
    //     setIndex(newIndex);
    //   } else {
    //     const newIndex = index - 1;
    //     setIndex(newIndex);
    //   }
    index <= 0 ? setIndex(people.length - 1) : setIndex(index - 1);
  };

  const randomPerson = () => {
    const newIndex = Math.trunc(Math.random() * people.length);
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={img} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h3 className="author">{name}</h3>
      <h4 className="job">{job}</h4>

      <p className="text">{text}</p>
      <div className="button-container">
        <button type="button" className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button type="button" className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button type="btn" className="random-btn" onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Slider;
