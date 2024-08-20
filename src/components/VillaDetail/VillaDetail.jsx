import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './VillaDetail.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import VillasData from '../Villas/VillasData';
import { FaWifi } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaShower } from "react-icons/fa6";
import { FaTv } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import { BsBadgeWcFill } from "react-icons/bs";
import { MdOutlineLiving } from "react-icons/md";

// React Image Gallery imports
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const VillaDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const villa = location.state || VillasData.find(v => v.id === parseInt(id));

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const nights = calculateNights(checkInDate, checkOutDate);

  const imageGalleryItems = villa.images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const handleBookNow = () => {
    const whatsappNumber = '+38349100019'; // Replace with your WhatsApp number
    const message = encodeURIComponent(`Hello, I would like to book the villa: ${villa.title}`);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  // Calculate nights between two dates
  function calculateNights(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 0;
    const diffTime = new Date(checkOut) - new Date(checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  const nightlyRate = 39;
  const totalCost = nightlyRate * nights;
  const weeklyDiscount = nights >= 7 ? 31 : 0;
  const airbnbServiceFee = 50; // Example static value

  const totalBeforeTaxes = totalCost - weeklyDiscount;
  const finalTotal = totalBeforeTaxes + airbnbServiceFee;

  return (
    <div>
      <Header />
      <div className="villa-detail">
        <div className="villa-header">
          <h1>{villa.title}</h1>
          <div className="rating">
            <span className="rating-score">9.2</span>
            <span className="rating-text">Wonderful</span>
            <span className="reviews">(36 reviews)</span>
          </div>
        </div>
        <div className="villa-gallery">
          <ImageGallery
            items={imageGalleryItems}
            showThumbnails={true}
            showPlayButton={false}  // Remove the play button
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
  <div className="booking-summary">
    <h2>Booking Summary</h2>
    <div className="booking-details">
      {/* <label>
        Check-in
        <input 
          type="date" 
          value={checkInDate} 
          onChange={(e) => setCheckInDate(e.target.value)} 
        />
      </label>
      <label>
        Check-out
        <input 
          type="date" 
          value={checkOutDate} 
          onChange={(e) => setCheckOutDate(e.target.value)} 
        />
      </label> */}
      <div className="price-details">
        {/* <p>${nightlyRate} per night</p>
        <p>Night(s): {nights}</p>
        <p>Total cost: ${totalCost}</p>
        {nights >= 7 && <p>Weekly stay discount: -${weeklyDiscount}</p>}
        <p>Airbnb service fee: ${airbnbServiceFee}</p>
        <p>Total before taxes: ${totalBeforeTaxes}</p>
        <p>Total: ${finalTotal}</p> */}
        <h3>Click book now to contact us in whatsapp for more information about reservation.</h3>
      </div>
    </div>
    <div className="book-now">
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  </div>
</div>
        {/* <div className="villa-amenities">
          <div className="amenity"><span>Free Wifi</span></div>
          <div className="amenity"><span>Free on-site parking</span></div>
          <div className="amenity"><span>Balcony</span></div>
          <div className="amenity"><span>Private Bathroom</span></div>
          <div className="amenity"><span>Pet friendly</span></div>
          <div className="amenity"><span>View</span></div>
          <div className="amenity"><span>Shower</span></div>
          <div className="amenity"><span>Kitchen</span></div>
          <div className="amenity"><span>Washing machine</span></div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default VillaDetail;
