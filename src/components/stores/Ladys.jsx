import React from 'react';
import './stores.css';
import store from '../../store.json';
import { Link } from 'react-router-dom';

const Ladys = () => {
  const woman = store.woman;
  return (
    <div>
      <div className="product">
        <div className="product__title">
          <p>Women's</p>
        </div>
        <div className="product__cards">
          {woman.map((item) => {
            const image = require(`../../assets/images/store/woman/id${item.id}.png`);
            return (
              <Link
                to={`/woman/${item.id}`}
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
                    <p className="product__card-item_price">{item.price} €</p>
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

export default Ladys;
