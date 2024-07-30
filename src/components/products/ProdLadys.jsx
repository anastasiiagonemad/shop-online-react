import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import store from '../../store.json';
import { Link } from 'react-router-dom';
import arrowright from '../../assets/images/arrow-right.png';
import './product.css';
import heart from '../../assets/images/like-black.png';
import open from '../../assets/images/plus-icon.png';
import close from '../../assets/images/minus-icon.png';

const ProdLadys = () => {
  const [isOpenDesc, setIsOpenDesc] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  const handleDescOpen = () => {
    setIsOpenDesc((prevState) => !prevState);
    setIsOpenInfo(false);
  };

  const handleInfoOpen = () => {
    setIsOpenDesc(false);
    setIsOpenInfo((prevState) => !prevState);
  };

  const { id } = useParams();
  const product = store.woman.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not in stock</div>;
  }

  const choosenSizeAndArt = (event) => {
    const size = document.querySelectorAll('.size');
    size.forEach((item) => {
      item.style.backgroundColor = '';
      item.style.color = '';
    });

    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';

    const selectedSize = event.target.textContent;

    localStorage.setItem('selectedSize', selectedSize);
  };

  const addToCart = (e) => {
    if (product.available <= 0) {
      e.preventDefault();
      const cartBtn = document.querySelector('.product__item-btns_cart-btn');
      cartBtn.innerHTML = 'Out Of Stock';
      cartBtn.disabled = true;
    } else {
      const selectedSize = localStorage.getItem('selectedSize');

      if (selectedSize) {
        console.log(`${selectedSize} added to cart.`);

        const cartItemsString = localStorage.getItem('cartItems');
        let cartItems;
        const imgUrl = require(`../../assets/images/store/woman/id${product.id}.png`);

        try {
          cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
        } catch (err) {
          cartItems = [];
          console.error('Error parsing items from LocalStorage', err);
        }

        cartItems.push({
          id: product.id,
          size: selectedSize,
          product: product.art,
          price: product.price,
          color: product.colour,
          style: product.style,
          img: imgUrl,
          avaliable: product.available,
        });

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      } else {
        alert('Choose you size before adding to cart');
      }
    }
  };

  const addToLiked = () => {
    const selectedSize = localStorage.getItem('selectedSize');

    if (selectedSize) {
      console.log(`${selectedSize} added to liked.`);

      const likedItemsString = localStorage.getItem('likedItems');
      let likedItems;
      const imgUrl = require(`../../assets/images/store/woman/id${product.id}.png`);

      try {
        likedItems = likedItemsString ? JSON.parse(likedItemsString) : [];
      } catch (err) {
        likedItems = [];
        console.error('Error parsing items from LocalStorage', err);
      }

      likedItems.push({
        id: product.id,
        size: selectedSize,
        product: product.art,
        price: product.price,
        color: product.colour,
        style: product.style,
        img: imgUrl,
        avaliable: product.available,
      });

      localStorage.setItem('likedItems', JSON.stringify(likedItems));
    } else {
      alert('Choose you size before adding to liked');
    }
  };

  return (
    <div>
      <div className="product__item">
        <Link to="/woman" className="product__item-back">
          <img src={arrowright} alt="pic" />
          <p>Woman</p>
        </Link>

        <div className="product__item-title">
          <p>{product.art}</p>
        </div>

        <div className="product__item-price">
          <p>{product.price} €</p>
          <p>{product.rrp}</p>
        </div>

        <div className="product__item-img">
          <img
            src={require(`../../assets/images/store/woman/id${product.id}.png`)}
            alt={product.art}
          />
        </div>

        <div className="product__item-size">
          <p className="product__item-size_title">Size</p>
          <div className="product__item-size_grid">
            {product.size.map((item) => (
              <p key={item} onClick={choosenSizeAndArt} className="size">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="product__item-btns">
          <div className="product__item-btns_quantity">
            <p>Avaliable positions : {product.available}</p>
          </div>
          <div className="product__item-btns_cart">
            <button className="product__item-btns_cart-btn" onClick={addToCart}>
              Add To Cart
            </button>
          </div>
          <div className="product__item-btns_like">
            <button onClick={addToLiked}>
              <img src={heart} alt="" />
            </button>
          </div>
        </div>

        <div className="product__item-description">
          <div
            onClick={handleDescOpen}
            className="product__item-description_title"
          >
            <p>Description</p>
            <img src={isOpenDesc ? close : open} alt="icon" />
          </div>
          {isOpenDesc && (
            <div className="product__item-description_text">
              <p>{product.description}</p>
              <ul>
                <li>Style: {product.style}</li>
                <li>Color: {product.colour}</li>
              </ul>
            </div>
          )}
        </div>

        <div className="product__item-shipping">
          <div
            onClick={handleInfoOpen}
            className="product__item-shipping_title"
          >
            <p>Shipping Information</p>
            <img src={isOpenInfo ? close : open} alt="" />
          </div>
          {isOpenInfo && (
            <div className="product__item-shipping_text">
              <div>
                <p className="product__item-shipping_text-title">
                  Standard Delivery
                </p>
                <p className="product__item-shipping_text-other">
                  Delivery within 1-2 working days.
                </p>
              </div>
              <div>
                <p className="product__item-shipping_text-title">
                  Express Delivery<span>**</span>
                </p>
                <p className="product__item-shipping_text-other">
                  Order before 14:00 from Monday to Friday for next-day delivery
                  <span>*</span>.
                </p>
                <p className="product__item-shipping_text-other">
                  <span>**</span>Not available for personalized orders.
                </p>
              </div>
              <div>
                <p className="product__item-shipping_text-title">
                  Personalized article Delivery<span>*</span>
                </p>
                <p className="product__item-shipping_text-other">
                  For personalized items Standard delivery is extended up to 4-6
                  working days.
                </p>
                <p className="product__item-shipping_text-other">
                  <span>*</span>If you ordered several items, please note that
                  they will all be delivered with the personalized article.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="product__item-details">
          <div className="product__item-details_story">
            <p className="product__item-details_story-title">Product story</p>
            <p className="product__item-details_story-text">{product.story}</p>
          </div>

          <div className="product__item-details_info">
            <div className="product__item-details_info-details">
              <div className="product__item-details_info-details_title">
                <p>Details</p>
              </div>
              <div className="product__item-details_info-details_text">
                {product.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>
            <div className="product__item-details_info-information">
              <div className="product__item-details_info-information_title">
                <p>Material Information</p>
              </div>
              <div className="product__item-details_info-information_text">
                {product.info.map((inf) => (
                  <p key={inf}>{inf}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="product__item-rating">
          <div className="product__item-rating_title">
            <p>No Ratings</p>
          </div>
          <div className="product__item-rating_link">
            <p>Write A Review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdLadys;
