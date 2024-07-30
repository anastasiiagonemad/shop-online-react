import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import puma from '../../assets/images/puma.png';
import heartlogo from '../../assets/images/heart.png';
import cartlogo from '../../assets/images/cart.png';
import closebtn from '../../assets/images/close.png';
import arrowRight from '../../assets/images/arrow-right.png';
import loginRegister from '../../assets/images/login_register.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <Link to="/shop-online-react">
              <img src={puma} alt="logo" />
            </Link>
          </div>
          <div className="header__nav"></div>
          <div className="header__icons">
            <img
              className="header__icons-heart"
              src={heartlogo}
              alt="heartlogo"
            />
            <Link to="/cart">
              <img
                className="header__icons-cart"
                src={cartlogo}
                alt="cartlogo"
              />
            </Link>
            <div className="header__icons-burger">
              <span onClick={handleOpenMenu}>Menu</span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="header__menu open">
          <div className="header__menu-close">
            <img onClick={handleCloseMenu} src={closebtn} alt="close" />
          </div>
          <div className="header__menu-links">
            <div>
              <Link
                to="/woman"
                onClick={handleCloseMenu}
                className="header__menu-links_link"
              >
                Ladies
              </Link>
              <img
                className="header__menu-links_arrow"
                src={arrowRight}
                alt="arrow"
              />
            </div>
            <div>
              <Link
                to="/man"
                onClick={handleCloseMenu}
                className="header__menu-links_link"
              >
                Men's
              </Link>
              <img
                className="header__menu-links_arrow"
                src={arrowRight}
                alt="arrow"
              />
            </div>
            <div>
              <Link
                to="/child"
                onClick={handleCloseMenu}
                className="header__menu-links_link"
              >
                Children
              </Link>
              <img
                className="header__menu-links_arrow"
                src={arrowRight}
                alt="arrow"
              />
            </div>
            <div>
              <Link
                to="/fenty"
                onClick={handleCloseMenu}
                className="header__menu-links_link"
              >
                FENTY x PUMA
              </Link>
              <img
                className="header__menu-links_arrow"
                src={arrowRight}
                alt="arrow"
              />
            </div>
            <div>
              <Link
                to="/sale"
                onClick={handleCloseMenu}
                className="header__menu-links_link"
              >
                Sale
              </Link>
              <img
                className="header__menu-links_arrow"
                src={arrowRight}
                alt="arrow"
              />
            </div>
          </div>
          <div className="header__menu-footer">
            <div className="header__menu-footer_sign">
              <img src={loginRegister} alt="icon" />
              <Link className="header__menu-footer_sign-link">Login</Link>
              <span>/</span>
              <Link className="header__menu-footer_sign-link">Register</Link>
            </div>
            <div className="header__menu-footer_text">
              <Link className="header__menu-footer_text-link">
                Don't have an account yet? Register
              </Link>
              <span className="header__menu-footer_text-span">
                now and get
                <span className="header__menu-footer_text-discount">15%</span>
                off your first order.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
