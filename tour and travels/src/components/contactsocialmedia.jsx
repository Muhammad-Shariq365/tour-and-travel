import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const ContactSocialMedia = () => {
  return (
    <section className="mt-10 mb-12">
      <div className="container mx-auto text-center">
        {/* Animated heading */}
        <motion.h2
          className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-black uppercase mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUpVariants}
        >
          OUR SOCIAL MEDIA
        </motion.h2>
        
        {/* Static social media icons */}
        <div className="flex flex-wrap justify-center items-center gap-20">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-4 rounded-full text-7xl">
              <FaFacebookF />
            </div>
            <p className="mt-2 text-lg font-semibold">Facebook</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white p-4 rounded-full text-7xl">
              <FaInstagram />
            </div>
            <p className="mt-2 text-lg font-semibold">Instagram</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-red-500 text-white p-4 rounded-full text-7xl">
              <FaYoutube />
            </div>
            <p className="mt-2 text-lg font-semibold">YouTube</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-600 text-white p-4 rounded-full text-7xl">
              <FaWhatsapp />
            </div>
            <p className="mt-2 text-lg font-semibold">WhatsApp</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black text-white p-4 rounded-full text-7xl">
              <FaTiktok />
            </div>
            <p className="mt-2 text-lg font-semibold">TikTok</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 text-white p-4 rounded-full text-7xl">
              <FaTwitter />
            </div>
            <p className="mt-2 text-lg font-semibold">Twitter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSocialMedia;
