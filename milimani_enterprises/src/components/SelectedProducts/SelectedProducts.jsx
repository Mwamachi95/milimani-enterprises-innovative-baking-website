import { useState, useEffect } from 'react';
import { AnimatedSection, AnimatedGrid } from '../animations';
import { motion } from 'framer-motion';
import vanillaPoundCakeMix from '../../assets/images/home/hero/Vanilla_pound_cake_cake_mix.jpg';
import redVelvetCakeMix from '../../assets/images/home/hero/red_velvet_cake_mix.jpg';
import pastryMargarine from '../../assets/images/home/hero/pastry_margarine.jpg';
import whippingCreamPowder from '../../assets/images/home/hero/whipping_cream_powder.jpg';

// Skeleton component for loading state
const ProductCardSkeleton = () => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
    <div className="aspect-[3/4] bg-gray-200 animate-pulse"></div>
    <div className="p-6 flex flex-col justify-between h-full min-h-[120px]">
      <div className="h-5 bg-gray-200 rounded animate-pulse mb-4"></div>
      <div className="h-6 bg-gray-200 rounded animate-pulse w-16"></div>
    </div>
  </div>
);

// Lazy-loaded product card component
const LazyProductCard = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:cursor-pointer flex flex-col h-full"
  >
    {/* Product Image */}
    <div className="aspect-[3/4] overflow-hidden relative z-20">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
    
    {/* Product Info Section with Sliding Background */}
    <div className="relative flex-1">
      {/* Sliding Background - only covers text area */}
      <div className="absolute inset-0 bg-bokara-grey transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
      
      {/* Product Info Content */}
      <div className="relative z-20 p-6 flex flex-col justify-center h-full min-h-[120px]">
        {/* Product Name */}
        <h3 className="font-sora font-semibold text-bokara-grey group-hover:text-white transition-colors duration-500">
          {product.name}
        </h3>
      </div>
    </div>
  </motion.div>
);

const SelectedProducts = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = ["Modern Tastes", "Fresh Mornings", "Storytelling Crumbs"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const products = [
    {
      id: 1,
      name: "Vanilla Pound Cake Mix",
      image: vanillaPoundCakeMix,
    },
    {
      id: 2,
      name: "Red Velvet Cake Mix",
      image: redVelvetCakeMix,
    },
    {
      id: 3,
      name: "Pastry Margarine",
      image: pastryMargarine,
    },
    {
      id: 4,
      name: "Whipping Cream Powder",
      image: whippingCreamPowder,
    },
  ];

  return (
    <section className="bg-whisper-white py-[106px] px-8 sm:px-15">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          {/* Header Section */}
          <AnimatedSection className="text-center" delay={0.3}>
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
      </AnimatedSection>

      {/* Product Grid */}
      <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16" staggerDelay={0.1}>
        {products.map((product) => (
          <LazyProductCard
            key={product.id}
            product={product}
          />
        ))}
      </AnimatedGrid>
        </div>
      </div>
    </section>
  );
};

export default SelectedProducts;