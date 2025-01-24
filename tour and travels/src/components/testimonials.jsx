import React from 'react';
import { motion } from 'framer-motion';

// Animation Variants
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

const VideoCards = () => {
  // Random video URLs as placeholders
  const videos = [
    'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4',
    'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4',
    'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_15mb.mp4',
    'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4',
    'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_25mb.mp4',
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 pt-12 mb-14 xl:max-w-8xl">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: false, amount: 0.9 }}
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] text-center font-extrabold text-gray-800 uppercase">
            TESTIMONIALS
          </h2>
        </motion.div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-2xl md:mx-auto">
          We take immense pride in delivering exceptional travel experiences, and nothing speaks louder than the words
        </p>
      </div>
      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:max-w-[80%] mx-auto md:grid-cols-3 gap-14 bg-white border-none outline-none">
        {videos.map((url, index) => (
          <div
            key={index}
            className="flex justify-center items-center mx-auto h-[70vh] border-none outline-none bg-white rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            style={{ aspectRatio: '9/16' }}
          >
            <video
              src={url}
              controls
              className="w-full h-full bg-white border-none outline-none"
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;
