import React from 'react';
import { FaInstagram, FaWhatsapp, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-bar">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Sunday</p>
          <p>12:00 PM - 2:00 AM</p>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <p><FaPhone /> +60 11-1628 1524</p>
          <p><FaEnvelope /> ppbycw@gmail.com</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/projectplaybycw/" rel="noopener noreferrer" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://wa.me/601116281524" rel="noopener noreferrer" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Join Us</h3>
          <p>Passionate about gaming?</p>
          <p>Join our team!</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeWnzarY6xwSnDLG53cP9TNWO-lzu8nsY9-5AFEE510WmfvmQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="apply-button"
          >
            Apply Now
          </a>
        </div>

        <div className="location-section">
          <div className="location-info">
            <h3>Location</h3>
            <p>70, Jalan PJS 11/7</p>
            <p>Bandar Sunway, 47500</p>
            <p>Subang Jaya, Selangor</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31737.702276204226!2d101.5996466504807!3d3.073553994907396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b0214d3a77b%3A0xd30100d50fe650b0!2s70%2C%20Jalan%20PJS%2011%2F7%2C%20Bandar%20Sunway%2C%2047500%20Subang%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1699279814492!5m2!1sen!2smy"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Project Play By CW</p>
      </div>
    </div>
  );
}

export default Footer;
