import React from 'react';
import './Amenities.scss'; // import SCSS file
import { FaWifi } from "react-icons/fa";
import { GiPoolTriangle } from "react-icons/gi";
import { FaParking } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";
import { GiWaterfall } from "react-icons/gi";
import { LuTrees } from "react-icons/lu";
import { FaTv } from "react-icons/fa";

const Amenities = () => {
  return (
    <section className="amenities" id="amenities">
      <h2>Enjoy. Unwind. Relax.</h2>
      <div className="amenitiesList">
        <div className="amenity">
          <i className="fas fa-wifi"></i>
          <FaWifi className='fa-icon' />
          <p>Wifi</p>
        </div>
        {/* <div className="amenity">
          <i className="fas fa-swimming-pool"></i>
          <GiPoolTriangle className='fa-icon' />
          <p>Private Pool</p>
        </div> */}
        <div className="amenity">
          <i className="fas fa-parking"></i>
          <FaParking className='fa-icon' />
          <p>Parking Space</p>
        </div>
        <div className="amenity">
          <i className="fas fa-shower"></i>
          <FaShower className='fa-icon' />
          <p>Shower</p>
        </div>
        <div className="amenity">
          <i className="fas fa-water-fall"></i>
          <GiWaterfall className='fa-icon' />
          <p>Water Fall</p>
        </div>
        <div className="amenity">
          <i className="fas fa-lu-trees"></i>
          <LuTrees className='fa-icon' />
          <p>Trees</p>
        </div>
        <div className="amenity">
          <i className="fas fa-tv"></i>
          <FaTv className='fa-icon' />
          <p>50 - INCH TV</p>
        </div>
      </div>
    </section>
  );
};

export default Amenities;