import React, { useState } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5, // Adjust the delay as needed
        ease: "easeOut",
      },
    },
  };

  const images = [
    "https://picsum.photos/id/1/500/300",
    "https://picsum.photos/id/2/500/300",
    "https://picsum.photos/id/3/500/300",
    "https://picsum.photos/id/4/500/300",
    "https://picsum.photos/id/5/500/300",
    "https://picsum.photos/id/6/500/300",
    "https://picsum.photos/id/7/500/300",
    "https://picsum.photos/id/8/500/300",
    "https://picsum.photos/id/9/500/300",
    "https://picsum.photos/id/10/500/300",
    "https://picsum.photos/id/11/500/300",
    "https://picsum.photos/id/12/500/300",
    "https://picsum.photos/id/13/500/300",
    "https://picsum.photos/id/14/500/300",
    "https://picsum.photos/id/15/500/300",
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);

    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);

    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <div className="max-w-6xl mx-auto pt-10">
      {/* Heading and Paragraph */}
      <div className="text-center mb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: false, amount: 0.9 }}
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] text-center font-extrabold text-gray-800 uppercase">
            OUR GALLERY
          </h2>
        </motion.div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-2xl px-4 md:mx-auto">
          Explore our collection of stunning images, showcasing moments of beauty and creativity.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative cursor-pointer">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg w-[90%] sm:max-w-[600px] h-auto sm:h-[90%] flex flex-col justify-center items-center overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black rounded-full p-2 sm:p-3 focus:outline-none z-10"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            {/* Image Carousel */}
            <div className="relative w-full h-full flex items-center overflow-hidden">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full focus:outline-none hover:scale-110 transition-transform z-10"
                aria-label="Previous"
              >
                <FaArrowLeft size={20} />
              </button>

              {/* Slide Effect */}
              <div
                className="w-full h-full flex justify-center items-center overflow-hidden"
                onTransitionEnd={handleTransitionEnd}
              >
                <div
                  className="w-full h-full flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                  }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 ">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-fill rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full focus:outline-none hover:scale-110 transition-transform z-10"
                aria-label="Next"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
