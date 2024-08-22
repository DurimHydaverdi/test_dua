import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../Assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open', !isOpen); // Optional: Add a class to the body
  };
  

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the menu after clicking a link
    }
  };

  const handleNavigate = (id) => {
    if (window.location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate('/', { state: { scrollToId: id } });
    }
  };

  return (
    <header className="header">
      <Link to='/'><img className='logo_img' src={logo} alt='dua-village-logo' /></Link>
      {/* <div className="logo">Dua Village</div> */}
      <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><a onClick={() => handleNavigate('about')}>About</a></li>
          <li><a onClick={() => handleNavigate('amenities')}>Amenities</a></li>
          <li><a onClick={() => handleNavigate('contact')}>Contact</a></li>
          <li><Link to="/villas" className="bookButton">Book Now</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
