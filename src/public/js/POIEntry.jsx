import React, { Component } from 'react';

class POIEntry extends Component {
 
  render() {
    const { expand, onClick } = this.props; 
    
    return (
      <li className="itinerary--stop">
        <span className="itinerary--title">Name Of Attraction</span>
        <div>
          <span className="itinerary--duration">
            Stop: 4 hours
          </span>
          -
          <span className="admission">
            Admission included
          </span>
        </div>

        <span>See details &amp; photo</span>

        <div>
          <div className="rating">
            # reviews
          </div>

          <img
            src="#"
            alt="alt text"
          />
          <span>
            Description of the location goes here.
          </span>

          <span>Read more|less</span>

          <button type="button">
            More About Name Of Attraction
          </button>
        </div>
      </li>
    );
  }
}

export default POIEntry;
