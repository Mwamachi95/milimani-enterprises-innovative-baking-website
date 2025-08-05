import { useState, useEffect } from 'react';
import vanillaCreamCakeMix from '../../assets/images/home/hero/Vanilla_cream_cake_mix.jpg';
import vanillaVelvet from '../../assets/images/home/hero/Vanilla_velvet.jpg';
import vanillaPoundCake from '../../assets/images/home/hero/Vanilla_pound_cake_mix.jpg';
import vanillaSpongeCakeMix from '../../assets/images/home/hero/Vanilla_Sponge_cake_mix.jpg';

const SelectedProducts = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = ["Modern Tastes", "Fresh Mornings", "Storytelling Crumbs"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      name: "Vanilla Cream Cake Mix",
      image: vanillaCreamCakeMix,
      tag: "Premium",
    },
    {
      id: 2,
      name: "Vanilla Velvet",
      image: vanillaVelvet,
      tag: "Best Seller",
    },
    {
      id: 3,
      name: "Vanilla Pound Cake",
      image: vanillaPoundCake,
      tag: "New",
    },
    {
      id: 4,
      name: "Vanilla Sponge Cake Mix",
      image: vanillaSpongeCakeMix,
      tag: "Popular",
    },
  ];

  return (
    <section className="bg-whisper-white py-[106px] px-8 md:px-12 lg:px-16">
      {/* Header Section */}
      <div className="text-center">
        {/* Subtitle */}
        <p className="text-sm md:text-base uppercase tracking-wider text-bokara-grey mb-4 font-bold">
          SELECTED PRODUCTS
        </p>
        
        {/* Main Heading with Rotating Text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-sora text-bokara-grey">
            Innovative Baking For
          </h2>
          <div className="bg-dark-hunter-green text-white px-4 py-2 rounded-lg inline-block min-w-[200px] md:min-w-[240px]">
            <span className="text-2xl md:text-4xl lg:text-5xl font-bold font-sora transition-all duration-500">
              {rotatingTexts[currentTextIndex]}
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:cursor-pointer flex flex-col"
          >
            {/* Sliding Background */}
            <div className="absolute inset-0 bg-bokara-grey transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
            
            {/* Card Content */}
            <div className="relative z-20 flex flex-col h-full">
              {/* Product Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-500"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                {/* Product Name */}
                <h3 className="font-sora font-semibold text-bokara-grey group-hover:text-white transition-colors duration-500 mb-4">
                  {product.name}
                </h3>
                
                {/* Tag/Badge */}
                <div className="flex justify-start">
                  <span className="bg-whisper-white group-hover:bg-white text-bokara-grey px-3 py-1 rounded-full text-xs font-medium transition-colors duration-500">
                    {product.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedProducts;