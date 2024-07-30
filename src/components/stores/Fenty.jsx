import React from 'react';
import './stores.css';
import store from '../../store.json';
import riri from '../../assets/images/riri.avif';
import riri2 from '../../assets/images/fenty_riri.avif';
import fenty1 from '../../assets/images/fenty1.avif';
import fenty2 from '../../assets/images/fenty2.avif';
import { Link } from 'react-router-dom';

const Fenty = () => {
  const fenty = store.fenty;
  return (
    <div>
      <div className="product">
        <div className="product__main_mob">
          <div className="product__main_mob_img">
            <img src={riri} alt="pic" />
          </div>
          <div>
            <p className="product__main_mob-title">Fenty x Puma</p>
            <p className="product__main_mob-text">
              THE CREEPER PHATTY IN SESSION
            </p>
          </div>
        </div>
        <div className="product__main_laptop">
          <div className="product__main_laptop-img">
            <img src={riri2} alt="pic" />
          </div>
          <div className="product__main_laptop-absolute">
            <p className="product__main_laptop-title">Fenty x Puma</p>
            <p className="product__main_laptop-text">
              THE CREEPER PHATTY IN SESSION
            </p>
          </div>
        </div>
        <div className="product__title">
          <p>Fenty x Puma</p>
        </div>
        <div className="product__cards">
          {fenty.map((item) => {
            const image = require(`../../assets/images/store/fenty/id${item.id}.avif`);
            return (
              <Link
                to={`/fenty/${item.id}`}
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
          <div className="product__card-img">
            <img src={fenty1} alt="" />
          </div>
          <div className="product__card-img">
            <img src={fenty2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fenty;
