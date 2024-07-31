import React, { useState, useEffect } from 'react';
import './wishlist.css';
import trash from '../../assets/images/trash.png';

const Wishlist = () => {
  const [likedItems, setLikedItems] = useState([]);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const likedCart = JSON.parse(localStorage.getItem('likedItems')) || [];
    setLikedItems(likedCart);
  }, []);

  const removeItem = (product) => {
    const updatedLikedItems = likedItems.filter(
      (item) => item.product !== product,
    );
    setLikedItems(updatedLikedItems);
    localStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));
    console.log('item removed');
  };

  const addItemToCart = (product) => {
    const movedItem = likedItems.find((item) => item.product === product);

    if (movedItem) {
      if (movedItem.avaliable > 0) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(movedItem);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setMessages((prevMessages) => ({
          ...prevMessages,
          [product]: 'Item moved to cart',
        }));
      } else {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [product]: 'No available positions at the moment.',
        }));
      }
    }
  };

  return (
    <div>
      <div className="wishlist">
        <div className="wishlist__title">
          <h2>
            Wishlist{' '}
            <span className="wishlist__title-span">({likedItems.length})</span>
          </h2>
        </div>

        <div className="wishlist__items">
          {likedItems.map((item) => (
            <div key={item.product} className="wishlist__item">
              <div className="wishlist__item-img">
                <img src={item.img} alt={item.product} />
              </div>

              <div className="wishlist__item-title">
                <h3>{item.product}</h3>
                <p className="wishlist__item-title-size">
                  Size: <span>{item.size}</span>
                </p>
                <p className="wishlist__item-title-color">
                  Color: <span>{item.color}</span>
                </p>
                <p className="wishlist__item-title-style">
                  Style: <span>{item.style}</span>
                </p>
              </div>

              <div className="wishlist__item-price">
                <p>{item.price}</p>
                <img
                  onClick={() => removeItem(item.product)}
                  src={trash}
                  alt="icon"
                />
              </div>

              <div className="wishlist__item-btn-to-cart">
                <button onClick={() => addItemToCart(item.product)}>
                  {messages[item.product] || 'Move to cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
