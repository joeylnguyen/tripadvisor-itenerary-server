import React, { Component } from 'react';
import Rating from './Rating';
const POIEntry = ({data, expand, stopIndex, onClick}) => {

  return (
    <li className="tour__item">
      <span className="tour__counter">{stopIndex}</span>
      <span className="tour__title">{data.name}</span>
      <div>
        <span className="tour__body">
          Stop: 4 hours
        </span>
        -
        <span className="admission">
          Admission included
        </span>
      </div>

      <span onClick={() => { onClick(stopIndex - 1); }}> See details &amp; photo</span>

      <div className={expand ? "tour__details" : "tour__details tour__details--hidden"}>
        <div className="rating">
          <Rating score={data.rating} />
          # reviews
        </div>

        <img
          src="#"
          alt="alt text"
        />
        <span>
          {data.description}
        </span>

        <span>Read more|less</span>

        <button type="button">
          More About Name Of Attraction
        </button>
      </div>
    </li>
  );
};


export default POIEntry;
