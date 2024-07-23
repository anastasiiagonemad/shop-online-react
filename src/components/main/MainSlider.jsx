import React, { useRef, useState } from 'react';
import './main.css';
import bmwPants from '../../assets/images/BMW-M-Motorsport-ESS-Fleece-Pants.avif';
import hoodie from '../../assets/images/DARE-TO-Womens-Oversized-Hoodie.avif';
import sneakers1 from '../../assets/images/Mayze-Sneakers-Women.avif';
import sneakers2 from '../../assets/images/PUMA-Doublecourt-PRM.avif';
import sneakers3 from '../../assets/images/RS-X-Efekt-PRM-Sneakers.avif';
import tShort from '../../assets/images/RUN-FAVORITE-Mens-Tee.avif';

const MainSlider = () => {
  const items = [
    {
      id: 1,
      src: hoodie,
      alt: 'puma',
      text: "DARE TO Women's Oversized Hoodie",
      price: '34,95€',
      oldPrice: 'RRP: 69,95€',
    },
    {
      id: 2,
      src: sneakers1,
      alt: 'puma',
      text: 'RS-X Efekt PRM Sneakers',
      price: '59,95€',
      oldPrice: 'RRP: 119,95€',
    },
    {
      id: 3,
      src: bmwPants,
      alt: 'puma',
      text: 'BMW M Motorsport ESS Fleece Pants',
      price: '31,95€',
      oldPrice: 'RRP: 64,95€',
    },
    {
      id: 4,
      src: sneakers2,
      alt: 'puma',
      text: 'Mayze Sneakers Women',
      price: '65,95€',
      oldPrice: 'RRP: 109,95€',
    },
    {
      id: 5,
      src: sneakers3,
      alt: 'puma',
      text: 'PUMA Doublecourt PRM',
      price: '76,95€',
      oldPrice: 'RRP: 95,95€',
    },
    {
      id: 6,
      src: tShort,
      alt: 'puma',
      text: "RUN FAORITE Men's TEE",
      price: '17,95€',
      oldPrice: 'RRP: 29,95€',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDraggin, setIsDraggin] = useState(false);
  const slideRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 2 : prevIndex - 1,
    );
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDraggin(true);
  };

  const handleMouseMove = (e) => {
    if (!isDraggin) return;
    const currentX = e.clientX;
    if (startX - currentX > 50) {
      nextSlide();
      setIsDraggin(false);
    } else if (currentX - startX > 50) {
      prevSlide();
      setIsDraggin(false);
    }
  };

  const handleMouseUp = () => {
    setIsDraggin(false);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDraggin(true);
  };

  const handleTouchMove = (e) => {
    if (!isDraggin) return;
    const currentX = e.touches[0].clientX;
    if (startX - currentX > 50) {
      nextSlide();
      setIsDraggin(false);
    } else if (currentX - startX > 50) {
      prevSlide();
      setIsDraggin(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDraggin(false);
  };

  return (
    <div
      className="main__carousel"
      ref={slideRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="main__carousel-items">
        {items.slice(currentIndex, currentIndex + 2).map((item) => (
          <div className="main__carousel-item" key={item.id}>
            <img src={item.src} alt="" />
            <p className="main__carousel-item_title">{item.text}</p>
            <p className="main__carousel-item_price">{item.price}</p>
            <p className="main__carousel-item_oldprice">{item.oldPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSlider;
