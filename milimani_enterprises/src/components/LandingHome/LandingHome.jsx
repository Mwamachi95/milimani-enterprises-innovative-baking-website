import landingImage from '../../assets/images/home/Landing_Image_Home_Page.jpg';
import { AnimatedSection } from '../animations';
import { motion } from 'framer-motion';

const LandingHome = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with integrated overlay using CSS gradient */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${landingImage})`,
        }}
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      ></motion.div>
      
      {/* Content positioned to be entirely visible above fold on mobile */}
      <div className="absolute bottom-40 md:bottom-28 lg:bottom-32 left-0 right-0 p-8 sm:p-15">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl text-center">
            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-luscious-lime font-sora leading-tight mb-4 md:mb-6">
                Milimani Enterprises
              </h1>
            </motion.div>
            
            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-whisper-white leading-relaxed">
                East Africa's Trusted Manufacturer & Supplier Of Baking Ingredients
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;