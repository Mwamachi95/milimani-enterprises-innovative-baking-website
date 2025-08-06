import landingImage from '../../assets/images/home/Landing_Image_Home_Page.jpg';

const LandingHome = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with integrated overlay using CSS gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${landingImage})`,
        }}
      ></div>
      
      {/* Content positioned to be entirely visible above fold on mobile */}
      <div className="absolute bottom-40 md:bottom-28 lg:bottom-32 left-0 right-0 p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-luscious-lime font-sora leading-tight mb-4 md:mb-6">
            Milimani Enterprises
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-whisper-white leading-relaxed">
            East Africa's Trusted Manufacturer & Supplier Of Baking Ingredients
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;