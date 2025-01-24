import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import '../../src/App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-white text-3xl md:text-4xl bg-black/70 rounded-full p-2 cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

// Custom Previous Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-white text-3xl md:text-4xl bg-black/70 rounded-full p-2 cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

// Slider Settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// Images from Lorem Picsum
const images = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
  'https://picsum.photos/800/600?random=4',
  'https://picsum.photos/800/600?random=5',
  'https://picsum.photos/800/600?random=6',
];

const ImageSlider = () => {
  return (
    <div className="relative max-w-7xl mx-auto mb-3 mt-8 px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative group w-full h-[50vh] sm:h-[70vh] outline-none border-none ">
            <img
              src={image}
              alt={`slide-${index}`}
              className="w-full h-full border-none outline-none object-fill transition-transform duration-500"
            />
          </div>
        ))}
      </Slider>
      {/* Dots Styling */}
      <style>
        {`
          .slick-dots {
            bottom: -25px; /* Adjust dots position */
          }
          .slick-dots li button:before {
            font-size: 12px;
            color: #aaa; /* Default dot color */
          }
          .slick-dots li.slick-active button:before {
            color: #000; /* Active dot color */
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider;
