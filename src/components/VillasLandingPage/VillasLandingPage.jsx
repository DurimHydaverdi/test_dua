import React from 'react';
import './VillasLandingPage.scss';
import background from '../Assets/backgroundVillas.jpg';
import outside from '../Assets/outside.jpg';
import p1 from '../Assets/p1.jpg';
import collage from '../Assets/collage.png';
import { Link } from 'react-router-dom';

const VillasLandingPage = () => {

  // Function to handle scrolling to the top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="villas-landing-page">
      <div className="facilities-section">
        <h2>Explore Our Villas</h2>
        <ul className="facilities-list">
          <h2>Rooms</h2>
          <h2 className="active">Grill Area</h2>
          <h2>Balcony - Terrace</h2>
          <h2>Kitchen</h2>
          <Link to="/villas">
            <button className='view-more' onClick={handleScrollToTop}>
              View More
            </button>
          </Link>
        </ul>
      </div>
      <div className="images-section">
        <img src={background} alt="Lounge Area 1" />
        <img src={outside} alt="Lounge Area 2" />
        <img src={p1} alt="Lounge Area 3" />
        <img className='collage' src={collage} alt='Collage-Photo' />
      </div>
    </div>
  );
};

export default VillasLandingPage;
