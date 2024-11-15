import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const portfolioItems = [
    { imgSrc: 'image1.jpg', title: 'Project One' },
    { imgSrc: 'image2.jpg', title: 'Project Two' },
    { imgSrc: 'image3.jpg', title: 'Project Three' },
    { imgSrc: 'image4.jpg', title: 'Project Four' },
  ];

  return (
    <div className="portfolio-carousel">
      <h2>Our Portfolio</h2>
      <Slider {...settings}>
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.imgSrc} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
