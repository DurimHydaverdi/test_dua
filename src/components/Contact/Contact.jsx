import React, { useState } from 'react';
import './Contact.scss';
import maps from '../Assets/maps.jpeg';
import Modal from '../Modal/Modal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, phone, message } = formData;
    let errors = {
      name: '',
      phone: '',
      message: '',
    };

    // Function to count letters, ignoring non-letter characters
    const countLetters = (str) => {
      return (str.match(/[a-zA-Z]/g) || []).length;
    };

    // Full name validation (must have at least 3 letters)
    if (countLetters(name) < 3) {
      errors.name = 'Full Name should contain 3 or more letters.';
    }

    // Phone number validation (must contain only numbers, +, *, -)
    if (!/^[\d+\-*]+$/.test(phone)) {
      errors.phone = 'Phone number should only contain numbers, +, *, and -.';
    }

    // Message validation (must have at least 5 letters)
    if (countLetters(message) < 5) {
      errors.message = 'Message should contain 5 or more letters.';
    }

    setFormErrors(errors);

    // Return false if there are any errors
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        setFormErrors({ name: '', phone: '', message: '' }); // Clear errors
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
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
          
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
          {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
          
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {formErrors.message && <p className="error-message">{formErrors.message}</p>}
          
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
