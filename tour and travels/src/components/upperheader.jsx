import React from 'react';

const Header = () => {
  return (
    <header className="overflow-hidden bg-blue-600  text-white py-2 px-4 md:px-16  flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        <ContactItem href="tel:+92 340 1111216" icon="phone" text="+92 340 1111111" />
        <div className="hidden md:block border-l-2 border-white h-6 mx-4" /> {/* Vertical line */}
        <ContactItem href="tel:+92 330 8600160" icon="phone" text="+92 330 1111111" />
      </div>
      <ContactItem href="mailto:binjawedtourandtravels@gmail.com" icon="mail" text="binJawedtourandtravels@gmail.com" />
      <div className="hidden md:flex items-center space-x-4">
        <span>North karachi, Karachi,</span>
        <div className="hidden md:block border-l-2 border-white h-6 mx-4" /> {/* Vertical line between address and timings */}
        <span>Mon - Sat 11:00 AM - 07:00 PM</span>
      </div>
    </header>
  );
};

const ContactItem = ({ href, icon, text }) => {
  const icons = {
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    mail: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <a href={href} className="flex items-center space-x-1">
      {icons[icon]}
      <span>{text}</span>
    </a>
  );
};

export default Header;
