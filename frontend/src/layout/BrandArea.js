import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/BrandArea.css';

import brand1 from '../img/brand/brand-01.jpg';
import brand2 from '../img/brand/brand-02.jpg';
import brand3 from '../img/brand/brand-03.jpg';
import brand4 from '../img/brand/brand-04.jpg';
import brand5 from '../img/brand/brand-05.jpg';

const BrandArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Detect the screen width to conditionally render slider or grid
  const isMobileView = window.innerWidth <= 768;

  return (
    <section className="brand-area pt-110 pb-120">
      <div className="container">
        {isMobileView ? (
          <div className="brand-grid-vertical">
            <div className="single-brand">
              <img src={brand1} alt="Brand 1" />
            </div>
            <div className="single-brand">
              <img src={brand2} alt="Brand 2" />
            </div>
            <div className="single-brand">
              <img src={brand3} alt="Brand 3" />
            </div>
            <div className="single-brand">
              <img src={brand4} alt="Brand 4" />
            </div>
            <div className="single-brand">
              <img src={brand5} alt="Brand 5" />
            </div>
          </div>
        ) : (
          <Slider {...settings} className="brand-active">
            <div className="single-brand">
              <img src={brand1} alt="Brand 1" />
            </div>
            <div className="single-brand">
              <img src={brand2} alt="Brand 2" />
            </div>
            <div className="single-brand">
              <img src={brand3} alt="Brand 3" />
            </div>
            <div className="single-brand">
              <img src={brand4} alt="Brand 4" />
            </div>
            <div className="single-brand">
              <img src={brand5} alt="Brand 5" />
            </div>
          </Slider>
        )}
      </div>
    </section>
  );
};

export default BrandArea;
