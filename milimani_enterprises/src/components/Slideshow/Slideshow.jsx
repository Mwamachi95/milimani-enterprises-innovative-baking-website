import React, { useState, useEffect } from 'react';

const images = [
  'products.jpg',
  'customerService.jpg',
  'innovation.jpg',
];

const descriptions = [
    {
      title: 'Quality Products',
      description:
        'Supplying fresh, reliable, and affordable baking ingredients and tools to help bakers create their best work—every time. Trusted by home bakers and professionals alike.',
    },
    {
      title: 'Customer Success',
      description:
        'We are committed to ensuring our customers achieve their desired outcomes with our products.',
    },
    {
      title: 'Innovation Everyday',
      description:
        'We foster a culture of continuous improvement and encourage our team to think outside the box.',
    },

  ];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const triggerFade = (nextIndexFn) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(nextIndexFn);
      setFade(true);
    }, 500); // fade duration matches Tailwind transition
  };

  const goNext = () => {
    triggerFade((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    triggerFade((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex justify-center p-0 sm:p-15">
      <div className="w-full max-w-7xl">
        <div className="relative w-full h-[729px] overflow-hidden sm:rounded-lg bg-black">
          <div
            data-testid="slide-background"
            className={`flex justify-center w-full h-full bg-center bg-cover transition-opacity duration-500 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-50'
            }`}
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="z-10 flex flex-col items-left justify-end text-center w-fit text-white pr-20 pl-20 md:pr-40 md:pl-40 absolute bottom-20">
                    <h1 className="text-[50px] md:text-[60px] font-bold mb-4">{descriptions[currentIndex].title}</h1>
                    <p className="text-sm md:text-lg max-w-2xl">{descriptions[currentIndex].description}</p>
                </div>  
            
          </div>

          {/* Prev button */}
          <button
            onClick={goPrev}
            className="absolute left-5 sm:left-10 top-1/2 transform -translate-y-1/2 bg-[#67bf3b] bg-opacity-50 text-white p-2 sm:p-3 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            <img src="arrowRight.svg" alt="Previous" className="rotate-180" />
          </button>

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-5 sm:right-10 top-1/2 transform -translate-y-1/2 bg-[#67bf3b] bg-opacity-50 text-white p-2 sm:p-3 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            <img src="arrowRight.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
