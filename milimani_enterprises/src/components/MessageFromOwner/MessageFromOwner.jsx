import ownerImage from '../../assets/images/home/owner/Message_from_owner.jpg';

const MessageFromOwner = () => {
  return (
    <section className="bg-whisper-white px-8 sm:px-15 py-16 md:py-20 lg:py-24">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.6fr_1fr] xl:grid-cols-[1.8fr_1fr] gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Text Content Section */}
          <div className="max-w-2xl md:max-w-none">
            {/* Heading */}
            <h2 className="text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-sora text-dark-hunter-green leading-tight mb-6 md:mb-6 lg:mb-8">
              A Message From The Owner
            </h2>
            
            {/* Message Content */}
            <p className="text-base md:text-sm lg:text-base xl:text-lg leading-relaxed text-bokara-grey mb-8 md:mb-6 lg:mb-8 xl:mb-10">
              Welcome to Milimani Enterprises, where passion for baking meets unwavering commitment to quality. For over a decade, we have been East Africa's trusted partner in delivering premium baking ingredients and equipment that empower bakeries to create exceptional products. Our journey began with a simple belief: that every baker deserves access to the finest ingredients and reliable support to bring their culinary visions to life. Today, we continue to innovate and grow alongside our valued clients, building lasting partnerships that drive success across the entire baking industry.
            </p>
            
            {/* Owner Information */}
            <div>
              <h3 className="font-sora font-semibold text-lg md:text-base lg:text-lg xl:text-xl text-dark-hunter-green mb-2">
                Patricia Torotich
              </h3>
              <p className="text-base md:text-sm lg:text-base xl:text-lg text-bokara-grey">
                Founder & CEO
              </p>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center md:justify-end lg:justify-end">
            <div className="relative max-w-xs md:max-w-xs lg:max-w-sm xl:max-w-md w-full aspect-[3/4]">
              <img
                src={ownerImage}
                alt="Patricia Torotich, Founder & CEO of Milimani Enterprises"
                className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ imageRendering: 'auto', backfaceVisibility: 'hidden' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromOwner;