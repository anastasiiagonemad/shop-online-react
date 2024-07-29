import React from 'react';
import './stores.css';
import store from '../../store.json';
import { Link } from 'react-router-dom';

const Child = () => {
  const kids = store.child;
  return (
    <div>
      <div className="product">
        <div className="product__title">
          <p>Kids</p>
        </div>
        <div className="product__cards">
          {kids.map((item) => {
            const image = require(`../../assets/images/store/child/id${item.id}.avif`);
            return (
              <Link
                to={`/child/${item.id}`}
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

export default Child;
