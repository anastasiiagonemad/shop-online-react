import React, { useState, useEffect } from 'react';
import './cart.css';
import trash from '../../assets/images/trash.png';
import arrow from '../../assets/images/arrow-right.png';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [isPromoValid, setIsPromoValid] = useState(false);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedItems = items.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
      totalPrice:
        item.totalPrice ||
        parseFloat(item.price.replace(',', '.').replace('€', '').trim()),
    }));
    setCartItems(updatedItems);
  }, []);

  const handleOpenPromo = () => {
    setIsOpen((prevState) => !prevState);
  };

  const btnIncrement = (product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product === product) {
          const priceNumber = parseFloat(
            item.price.replace(',', '.').replace('€', '').trim(),
          );
          const newQuantity = item.quantity + 1;
          if (newQuantity <= item.avaliable) {
            return {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * priceNumber,
            };
          }
        }
        return item;
      }),
    );
  };

  const btnDecrement = (product) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product === product) {
          const priceNumber = parseFloat(
            item.price.replace(',', '.').replace('€', '').trim(),
          );
          const newQuantity = item.quantity - 1;
          if (newQuantity >= 1) {
            return {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * priceNumber,
            };
          }
        }
        return item;
      }),
    );
  };

  const removeItem = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product !== product,
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    console.log('item removed');
  };

  const handlePromoChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleApplyPromo = () => {
    if (promoCode === 'EXTRA') {
      setIsPromoValid(true);
      setDiscount(0.2);
    } else {
      setIsPromoValid(false);
      setDiscount(0);
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const discountedTotalPrice = totalPrice - totalPrice * discount;

  return (
    <div>
      <div className="cart">
        <div className="cart__title">
          <h2>
            My shopping cart{' '}
            <span className="cart__title-span">({cartItems.length})</span>
          </h2>
        </div>

        <div className="cart__goods">
          {cartItems.map((item) => (
            <div key={item.product} className="cart__goods-container">
              <div className="cart__goods-container-image">
                <img src={item.img} alt={item.product} />
              </div>

              <div className="cart__goods-container-description">
                <div>
                  <h2 className="cart__goods-container-description-title">
                    {item.product}
                  </h2>
                  <p className="cart__goods-container-description-color">
                    <span>Color:</span> {item.color}
                  </p>
                  <p className="cart__goods-container-description-size">
                    <span>Size:</span> {item.size}
                  </p>
                  <p className="cart__goods-container-description-number">
                    <span>Style number:</span> {item.style}
                  </p>
                </div>
                <div className="cart__goods-container-quantity">
                  <button
                    className="cart__goods-container-quantity-btn"
                    onClick={() => btnDecrement(item.product)}
                  >
                    -
                  </button>
                  <p className="cart__goods-container-quantity-number">
                    {item.quantity}
                  </p>
                  <button
                    className="cart__goods-container-quantity-btn"
                    onClick={() => btnIncrement(item.product)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart__goods-container-conclusion">
                <div className="cart__goods-container-conclusion-price">
                  {isPromoValid ? (
                    <>
                      <p className="cart__goods-container-conclusion-price-original">
                        {item.totalPrice.toFixed(2)} €
                      </p>
                      <p className="cart__goods-container-conclusion-price-discounted">
                        {(item.totalPrice * (1 - discount)).toFixed(2)} €
                      </p>
                    </>
                  ) : (
                    <p className="cart__goods-container-conclusion-price-text">
                      {item.totalPrice.toFixed(2)} €
                    </p>
                  )}
                </div>
                <div
                  className="cart__goods-container-conclusion-trash"
                  onClick={() => removeItem(item.product)}
                >
                  <img src={trash} alt="icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__goods-container-promo">
          <div
            onClick={handleOpenPromo}
            className="cart__goods-container-promo-title"
          >
            <p>Apply a Promo Code</p>
            <img
              className={
                isOpen
                  ? `cart__goods-container-promo-arrow-opened`
                  : `cart__goods-container-promo-arrow-closed`
              }
              src={arrow}
              alt="icon"
            />
          </div>
          {isOpen && (
            <div className="cart__goods-container-promo-opened">
              <div className="cart__goods-container-promo-opened-title">
                <p>Enter a Promo Code</p>
              </div>
              <div className="cart__goods-container-promo-opened-input">
                <input
                  type="text"
                  value={promoCode}
                  onChange={handlePromoChange}
                />
                <button onClick={handleApplyPromo}>Apply</button>
              </div>
            </div>
          )}
        </div>
        <div className="cart__goods-container-total">
          <p className="cart__goods-container-total-title">Total</p>
          <p className="cart__goods-container-total-price">
            {isPromoValid ? (
              <>
                <span className="cart__goods-container-total-price-original">
                  {totalPrice.toFixed(2)} €
                </span>
                <span className="cart__goods-container-total-price-discounted">
                  {discountedTotalPrice.toFixed(2)} €
                </span>
              </>
            ) : (
              totalPrice.toFixed(2) + ' €'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
