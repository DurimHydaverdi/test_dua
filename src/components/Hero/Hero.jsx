import React from 'react';
import './Hero.scss';
import background from '../Assets/outside.jpg';
import Header from '../Header/Header'; 

const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <img className='background' src={background} alt='background' />
      <div className="heroText">
        <h1>Dua Village</h1>
        <p>Private Resort</p>
      </div>
    </section>
  );
};

export default Hero;