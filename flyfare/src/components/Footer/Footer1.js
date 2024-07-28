import React from 'react';
import './Footer1.css';
import { FaTwitterSquare, FaInstagram, FaYoutubeSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const Footer1 = () => {
  return (
    <footer123 className="footerm">
      <div className='footerr'>
        <div className="footer-links2">
          <ul>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Contact us</li>
            <li>Terms & Conditions</li>
            <li>Support</li>
          </ul>
          <p className="address2">
            Address: 11th floor, Brigade Signature Towers, Kattamnallur, Bangalore 560049
          </p>
          <div className="social-media2">
            <FaFacebookSquare />
            <FaYoutubeSquare />
            <FaTwitterSquare />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <p className="copyright2">
            © Fly Fare Technologies LLP 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer123>
  );
};

export default Footer1;
