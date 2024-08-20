import React, { useState } from 'react';
import './Contact.scss';
import maps from '../Assets/maps.png';
import Modal from '../Modal/Modal'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        setModalContent('Message sent successfully!');
        setIsModalOpen(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setModalContent('Unexpected response format.');
        setIsModalOpen(true);
      }
    })
    .catch(error => {
      setModalContent('An error occurred: ' + error.message);
      setIsModalOpen(true);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <h3>Click the map to reveal the precise location</h3>
      <div className="mapContainer">
        <a href='https://tinyurl.com/yc6pvx65' target="_blank" rel="noreferrer">
          <img src={maps} alt="maps" />
        </a>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Notification">
        {modalContent}
      </Modal>
    </section>
  );
};

export default Contact;
