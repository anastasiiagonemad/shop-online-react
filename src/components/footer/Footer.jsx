import React, { useState } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import arrowRight from '../../assets/images/arrow-rightW.png';

const Footer = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleSupportOpen = () => {
    setIsSupportOpen(!isSupportOpen);
    setIsAboutOpen(false);
  };
  const handleAboutOpen = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsSupportOpen(false);
  };
  return (
    <div>
      <div className="footer">
        <div className="footer__support">
          <div onClick={handleSupportOpen} className="footer__support-title">
            <p>Support</p>
            <img src={arrowRight} alt="icon" />
          </div>
          {isSupportOpen && (
            <div className="footer__support-other">
              <ul>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Check Gift Card Balance</li>
                <li>Purchase a Gift Card</li>
                <li>Check Order</li>
                <li>Delivery</li>
                <li>Find a Puma store</li>
                <li>Size Guide</li>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Right & Withdrawal</li>
                <li>*Promo Terms</li>
                <li>Student Discount</li>
                <li>Refer a Friend</li>
                <li>Became an Affilate Partner</li>
                <li>Digital Services Act Information</li>
              </ul>
            </div>
          )}
        </div>
        <div className="footer__about">
          <div onClick={handleAboutOpen} className="footer__about-title">
            <p>About PUMA</p>
            <img src={arrowRight} alt="icon" />
          </div>
          {isAboutOpen && (
            <div className="footer__about-other">
              <ul>
                <li>Company</li>
                <li>Corporate News</li>
                <li>Press Center</li>
                <li>Investors</li>
                <li>Sustainability</li>
                <li>Careers</li>
              </ul>
            </div>
          )}
        </div>
        <div className="footer__discount">
          <p>Sign up and get 15% off your first order</p>
          <Link className="footer__discount-link">sign up for newsletter</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
