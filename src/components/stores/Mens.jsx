import React from 'react';
import './stores.css';
import store from '../../store.json';
import { Link } from 'react-router-dom';
import arrowright from '../../assets/images/arrow-right.png';

const Mens = () => {
  const man = store.man;
  return (
    <div>
      <div className="product">
        <Link to="/shop-online-react" className="product__item-back">
          <img src={arrowright} alt="pic" />
          <p>Home</p>
        </Link>
        <div className="product__title">
          <p>Men's</p>
        </div>
        <div className="product__cards">
          {man.map((item) => {
            const image = require(`../../assets/images/store/man/id${item.id}.avif`);
            return (
              <Link
                to={`/shop-online-react/man/${item.id}`}
                key={item.id}
                className="product__card-item"
              >
                <img
                  className="product__card-item_img"
                  src={image}
                  alt={item.art}
                />
                <div className="product__card-item_desc">
                  <div className="product__card-item_desc-price">
                    <p className="product__card-item_desc-art">{item.art}</p>
                  </div>
                  <div>
                    <p className="product__card-item_price">{item.price}</p>
                    <p className="product__card-item_rrp">{item.rrp}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mens;
