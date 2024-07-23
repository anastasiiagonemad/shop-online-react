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
          <div className="footer__support-title">
            <p>Support</p>
            <img onClick={handleSupportOpen} src={arrowRight} alt="icon" />
          </div>
          {isSupportOpen && (
            <div className="footer__support-other">
              <p>Contact Us</p>
              <p>FAQ</p>
              <p>Check Gift Card Balance</p>
              <p>Purchase a Gift Card</p>
              <p>Check Order</p>
              <p>Delivery</p>
              <p>Find a Puma store</p>
              <p>Size Guide</p>
              <p>Return Policy</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Right & Withdrawal</p>
              <p>*Promo Terms</p>
              <p>Student Discount</p>
              <p>Refer a Friend</p>
              <p>Became an Affilate Partner</p>
              <p>Digital Services Act Information</p>
            </div>
          )}
        </div>
        <div className="footer__about">
          <div className="footer__about-title">
            <p>About PUMA</p>
            <img onClick={handleAboutOpen} src={arrowRight} alt="icon" />
          </div>
          {isAboutOpen && (
            <div className="footer__about-other">
              <p>Company</p>
              <p>Corporate News</p>
              <p>Press Center</p>
              <p>Investors</p>
              <p>Sustainability</p>
              <p>Careers</p>
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
