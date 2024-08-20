import React from "react";
import { Link } from "react-router-dom";
import VillasData from "./VillasData";
import "./Villas.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import p3 from '../Assets/p3.jpg'

const Villas = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      {/* <h1 className="h1-v">Choose Your Villa</h1> */}
      <img className='background' src={p3} alt='background' />
      <h1 className="h1-v">Choose Your Villa</h1>
      <section className="villas">
        {VillasData.map((villa) => (
          <Link
            key={villa.id}
            to={`/villas/${villa.id}`}
            className="villa-card"
          >
            <div className="villa-image-container">
              <img src={villa.images[0]} alt={villa.title} />
            </div>
            <div className="villa-content">
              <h2>{villa.title}</h2>
              <p>{villa.description}</p>
              <span></span>
              <button className="book-now" onClick={handleScrollToTop}>BOOK NOW</button>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Villas;
