import React from "react";
import { FaPlane, FaBus, FaHotel, FaPassport } from "react-icons/fa";
import { FaClock } from 'react-icons/fa';

const HajjPackages = () => {
  const packages = [
    {
      name: "Budget Package",
      duration: "15 Days / 14 Nights",
      services: [
        { icon: <FaPassport />, text: "Umrah E-Visa" },
        { icon: <FaPlane />, text: "Tickets - Direct Airline" },
        { icon: <FaHotel />, text: "Medina Hotel - Safa Tower or Similar" },
        { icon: <FaHotel />, text: "Makka Hotel - Kiswah Tower or Similar" },
        { icon: <FaBus />, text: "Transport - Luxury Bus" },
      ],
      image: "https://via.placeholder.com/300", // Replace with your image URL
    },
    {
      name: "Economy Package",
      duration: "15 Days / 14 Nights",
      services: [
        { icon: <FaPassport />, text: "Umrah E-Visa" },
        { icon: <FaPlane />, text: "Tickets - Direct Airline" },
        { icon: <FaHotel />, text: "Makka Hotel - Voco or Similar" },
        { icon: <FaHotel />, text: "Medina Hotel - Teif Nibras or Similar" },
        { icon: <FaBus />, text: "Transport - Luxury Bus" },
      ],
      image: "https://via.placeholder.com/300", // Replace with your image URL
    },
    {
      name: "Economy Plus",
      duration: "15 Days / 14 Nights",
      services: [
        { icon: <FaPassport />, text: "Umrah E-Visa" },
        { icon: <FaPlane />, text: "Tickets - Direct Airline" },
        { icon: <FaHotel />, text: "Makka Hotel - Le Meridien Tower " },
        { icon: <FaHotel />, text: "Medina Hotel - Arkn Al Manar or Similar" },
        { icon: <FaBus />, text: "Transport - Luxury Bus" },
      ],
      image: "https://via.placeholder.com/300", // Replace with your image URL
    },
  ];

  return (
    <div className="">
      {/* Custom container with increased width */}
      <div className="container mx-auto px-6 lg:max-w-screen-xl pt-8">
      <div className="text-center mb-8">
      <h1 className="text-[clamp(2rem,5vw,3rem)] lg:text-5xl font-bold text-center text-gray-800 mb-2 tracking-tight">
        HAJJ PACKAGES
      </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center  max-w-2xl mx-auto">
        Choose from our exclusive Hajj packages tailored to provide comfort, convenience, and an unforgettable spiritual experience.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg pb-4 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-60 object-cover"
                />
             <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-md shadow flex items-center space-x-2">
      <FaClock className="text-white" />
      <span>{pkg.duration}</span>
    </span>
              </div>

              {/* Content Section */}
              <div className="px-6">
                <h3 className="text-2xl font-semibold py-2 text-gray-700">
                  {pkg.name}
                </h3>
                <ul className="space-y-1">
                  {pkg.services.map((service, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <span className="text-blue-600 text-lg">
                        {service.icon}
                      </span>
                      <span className="text-gray-600">{service.text}</span>
                    </li>
                  ))}
                </ul>
                {/* Call-to-Action Button */}
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HajjPackages;
