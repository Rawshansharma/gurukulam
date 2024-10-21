import React, { useState, useEffect } from 'react';

const images = [
  'https://scontent.fpat2-3.fna.fbcdn.net/v/t39.30808-6/382812864_741010551163792_7830191811820592622_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nS1a6EB-eq0Q7kNvgHu-9kA&_nc_zt=23&_nc_ht=scontent.fpat2-3.fna&_nc_gid=AVwpGQDhnshxgZaS1iO9DSZ&oh=00_AYDiwVn3cQeaj2BjVK0xVQOSRbEmAM2hrpoRy5R9iVi9ZQ&oe=671A97CF',
  'https://scontent.fpat2-3.fna.fbcdn.net/v/t39.30808-6/382785093_741010244497156_6443011724357772743_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LTyIKGENnxoQ7kNvgF03158&_nc_zt=23&_nc_ht=scontent.fpat2-3.fna&_nc_gid=AdJV5T5FV_qoMCdIKiizVBJ&oh=00_AYDS2DYIrEiyOvQo-YD17hmVHGv6RyjSKXmUeVp3syPZSA&oe=671AB002',
  'https://scontent.fpat2-3.fna.fbcdn.net/v/t39.30808-6/459589576_952251336706378_1732958194268561717_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-mOuKf7Nfz4Q7kNvgFKFZnT&_nc_zt=23&_nc_ht=scontent.fpat2-3.fna&_nc_gid=A6ReDh2l6v5EccdL38Rd0n7&oh=00_AYDG-pnK-apIUaIdD_LMmvKuoTqdosX7KLKSCLJmNxAj3w&oe=671AA7E6',
  'https://scontent.fpat2-4.fna.fbcdn.net/v/t39.30808-6/459035373_950482516883260_5146169671447232317_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3kqA-X3qpPAQ7kNvgECARbt&_nc_zt=23&_nc_ht=scontent.fpat2-4.fna&_nc_gid=AKXh1XWiWbGS9P0ph5KiOHn&oh=00_AYCW4wl35xK0qe664lNtghEhMmofNJiZi4bNLV1arrvR5g&oe=671A85FC',
  'https://scontent.fpat2-1.fna.fbcdn.net/v/t39.30808-6/459755781_952664769998368_3087342543996905624_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8ml6qwZhY5cQ7kNvgFJhbak&_nc_zt=23&_nc_ht=scontent.fpat2-1.fna&_nc_gid=AjBOrnWBp948KZfJ4w09tRU&oh=00_AYBUGoduoFtnDGwFa67eN7eosifEwpOjL3uDRVsdCxM49w&oe=671AA23A'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // 4 seconds for smoother transition

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-4">
      <div className="overflow-hidden relative h-72 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
        {/* Image Slider */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full transition-transform duration-1000 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full opacity-0'
            }`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Previous/Next Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-75 transition-all"
        onClick={goToPrevious}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-75 transition-all"
        onClick={goToNext}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-2 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
