import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';


function Footer() {
  return (
    <div className="footer-bar">
      <div className="operation-hours">
        <h3><b>Operation Hours</b></h3>
        <p>Monday - Sunday
        <p>12:00 PM - 2:00 AM</p>
        </p>      
      </div>

      <div className="contact-info">
        <h3><b>Contact Us</b></h3>
        <p>Phone: +60 11-1628 1524
        <p>Email: ppbycw@gmail.com</p>
        </p>
        <div className="social-icons">
          <a href="https://www.instagram.com/projectplaybycw/" rel="noopener noreferrer" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://wa.me/601116281524" rel="noopener noreferrer" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="hiring">
        <h3><b>Join Us</b></h3>
        <p>Are you keen on joining our team? </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWnzarY6xwSnDLG53cP9TNWO-lzu8nsY9-5AFEE510WmfvmQ/viewform" target="_blank" className="hbutton">
            <h4 className="montserrat-bold">APPLY HERE</h4>
            </a>     
      </div>

      <div className="location-text">
        <h3><b>Find Us</b></h3>
        <p><b>Project Play by CW</b></p>
        <p>70, Jalan PJS 11/7,
        <p>Bandar Sunway, 47500,
        <p>Subang Jaya, Selangor
        </p>
        </p>
        </p>
      </div>

      

      <div className="location-info">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31737.702276204226!2d101.5996466504807!3d3.073553994907396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b0214d3a77b%3A0xd30100d50fe650b0!2s70%2C%20Jalan%20PJS%2011%2F7%2C%20Bandar%20Sunway%2C%2047500%20Subang%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1699279814492!5m2!1sen!2smy"
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>

      </div>

      <div className="footer-copyright">
        <p>Copyright &copy; {new Date().getFullYear()} Project Play By CW | All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
