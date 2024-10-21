import React from 'react';

const Aboutus = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center p-10 text-orange-500 text-2xl font-bold">About Us</h1>

      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            className="p-5 w-full h-auto"
            src="https://www.sidco.co.in/storage/image/business_photo/IMG1693892069_230279271.jpeg"
            alt="hero-img"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-5 md:p-10">
          <p className="text-gray-500 text-base md:text-sm leading-relaxed">
            Our school focuses on individual learning abilities. Here every child is provided with opportunities to achieve
            academic success and to develop into confident and independent adults ready to face the challenge of this world. Our team
            of educators completely dedicated to the students helps them, guides them, and supports them. We provide an exceptionally
            caring and learning-focused environment for our students. Tiny tots of the primary wing play the perfect host when they
            dress up as community helpers during the Mini Parent Teacher Meeting. Children pay tribute to all the community helpers
            whose work makes our day-to-day lives easier.
          </p>

          <div className="text-orange-400 text-sm mt-6 md:mt-8">
            <p className="mb-4">Email: mrhariom.1986@gmail.com</p>
            <p>Phone: +91 7563878121</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
