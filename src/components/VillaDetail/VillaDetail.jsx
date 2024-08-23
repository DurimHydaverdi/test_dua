import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './VillaDetail.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import VillasData from '../Villas/VillasData';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import p1 from '../Assets/p1.jpg';
import { FaWifi, FaParking, FaShower, FaTv } from 'react-icons/fa';
import { MdBalcony, MdOutlineBathroom, MdOutlineBedroomParent, MdOutlineLiving } from 'react-icons/md';
import { FaKitchenSet } from 'react-icons/fa6';
import { GiWashingMachine } from 'react-icons/gi';
import { BsBadgeWcFill } from 'react-icons/bs';

const VillaDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const villa = location.state || VillasData.find(v => v.id === parseInt(id));

  // Filter out duplicate images
  const uniqueImageUrls = Array.from(new Set(villa.images));
  const imageGalleryItems = uniqueImageUrls.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const handleContact = () => {
    const whatsappNumber = '+38349100019';
    const message = encodeURIComponent(`Hello, I am interested in the villa: ${villa.title}`);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <Header />
      <div className="villa-detail">
        <div className="villa-header">
          <h1>{villa.title}</h1>
          {/* <div className="rating">
            <span className="rating-score">9.2</span>
            <span className="rating-text">Wonderful</span>
            <span className="reviews">(36 reviews)</span>
          </div> */}
        </div>
        <div className="villa-gallery">
          <ImageGallery
            items={imageGalleryItems}
            showThumbnails={true}
            showPlayButton={false}
          />
        </div>
        <div className="villa-content">
          <div className="villa-info">
            <div className="villa-description">
              <p>{villa.description}</p>
            </div>
            <div className="villa-amenities">
              <div className="amenity"><FaWifi className='desp-icon' /><span>Free Wifi</span></div>
              <div className="amenity"><FaParking className='desp-icon' /><span>Free on-site parking</span></div>
              <div className="amenity"><MdBalcony className='desp-icon' /><span>Balcony</span></div>
              <div className="amenity"><MdOutlineBathroom className='desp-icon' /><span>Private Bathroom</span></div>
              <div className="amenity"><FaTv className='desp-icon' /><span>50 - Inch Tv</span></div>
              <div className="amenity"><MdOutlineBedroomParent className='desp-icon' /><span>Rooms</span></div>
              <div className="amenity"><FaShower className='desp-icon' /><span>Shower</span></div>
              <div className="amenity"><FaKitchenSet className='desp-icon' /><span>Kitchen</span></div>
              <div className="amenity"><GiWashingMachine className='desp-icon' /><span>Washing machine</span></div>
              <div className="amenity"><MdOutlineLiving className='desp-icon' /><span>Living room</span></div>
              <div className="amenity"><BsBadgeWcFill className='desp-icon' /><span>Toilets</span></div>
            </div>
          </div>
          <div className="property-summary">
            <div className="property-details">
              <p>Prishtinë, Keçekollë - Dua Village</p>
              <div className="details-container">
                <div className="detail-items">
                  <div className="detail-item"><span>Contact us in whatsapp</span></div>
                </div>
              </div>
            </div>
            <div className="villas-info">
              {/* <img src={p1} alt="Villas" className="villas-photo" /> */}
              <div className="villas-details">
                <button onClick={handleContact} className="contact">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VillaDetail;
