import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

const GetAQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    tourTo: '',
    tripDuration: '',
    tourCategory: '',
    numberOfPersons: '',
    roomSharing: '',
    numberOfRooms: '',
    tentativeDate: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div
    className="flex items-center justify-center  py-28 bg-cover object-fill bg-center "
    style={{
      backgroundImage: "url('https://i.postimg.cc/XNRJHq3q/hero4.jpg')", // Corrected here
      backgroundSize: 'cover', // Ensure the image covers the container
      backgroundAttachment: 'fixed', // Make the background fixed during scroll
    }}
  >
      <div className="bg-white   bg-opacity-80 shadow-lg rounded-lg  px-6 pb-12 container  w-full max-w-5xl">
      <h1 className="text-[clamp(2rem,5vw,3rem)] lg:text-5xl font-bold pt-10 pb-6 text-center text-black-800  tracking-tight">
        GET QUOTE
      </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name "
              className="w-full placeholder-black border border-black-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-black-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-10 placeholder-black border border-black-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
              Phone Number
            </label>
            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-3 text-black-500" />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full pl-10 border border-black-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tourTo">
              Tour To
            </label>
            <input
              type="text"
              id="tourTo"
              name="tourTo"
              value={formData.tourTo}
              onChange={handleChange}
              placeholder="Select Tour"
              className="w-full border border-black-300 placeholder-black rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tripDuration">
              Trip Duration
            </label>
            <input
              type="number"
              id="tripDuration"
              name="tripDuration"
              value={formData.tripDuration}
              onChange={handleChange}
              placeholder="No. of Days"
              className="w-full border border-black-300 placeholder-black rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tourCategory">
              Select Tour Category
            </label>
            <div className="relative">
              <select
                id="tourCategory"
                name="tourCategory"
                value={formData.tourCategory}
                onChange={handleChange}
                className="w-full appearance-none placeholder-black border border-black-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Select Tour Category"
              >
              
                <option value="Adventure">Adventure</option>
                <option value="Leisure">Leisure</option>
                <option value="Cultural">Cultural</option>
              </select>
              <FaChevronDown className="absolute right-3 top-3 text-black-500 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="numberOfPersons">
              Number Of Persons
            </label>
            <input
              type="number"
              id="numberOfPersons"
              name="numberOfPersons"
              value={formData.numberOfPersons}
              onChange={handleChange}
              placeholder="Select Number of Travelers"
              className="w-full border placeholder-black border-black-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="roomSharing">
              Room Sharing
            </label>
            <div className="relative">
              <select
                id="roomSharing"
                name="roomSharing"
                value={formData.roomSharing}
                onChange={handleChange}
                className="w-full appearance-none border border-black-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="">Select Room Sharing</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
              </select>
              <FaChevronDown className="absolute right-3 top-3 text-black-500 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="numberOfRooms">
              Desired Number of Rooms
            </label>
            <input
              type="number"
              id="numberOfRooms"
              name="numberOfRooms"
              value={formData.numberOfRooms}
              onChange={handleChange}
              placeholder="Select Number of Rooms"
              className="w-full border placeholder-black border-black-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tentativeDate">
              Tentative Date of Traveling
            </label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-black-500" />
              <input
                type="date"
                id="tentativeDate"
                name="tentativeDate"
                value={formData.tentativeDate}
                onChange={handleChange}
                className="w-full pl-10 border border-black-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1" htmlFor="additionalInfo">
              Anything Else We Should Know?
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Anything Else We Should Know?"
              className="w-full border border-black-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2 pt-5">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetAQuoteForm;