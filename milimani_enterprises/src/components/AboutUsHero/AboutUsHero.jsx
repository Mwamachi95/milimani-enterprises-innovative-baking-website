function AboutUsHero(){
    return(
        <>
        <div className="lg:pl-15 lg:pr-0 lg:pt-15 lg:pb-15 pl-8 pr-8 pt-40 pb-40">

            <div className="sm:w-full flex items-center justify-between md:gap-5 xl:gap-40 xl:justify-center overflow-hidden">

                {/* Text Section */}
                <div className="flex flex-col gap-4 items-start text-[#143e45]">
                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-wider max-w-160">Where We Bake Innovatively</h1>
                    <p className="text-sm md:text1 max-w-155">Milimani Enterprises supplies quality baking ingredients and equipment across Rwanda. We blend innovation with a personal touch to help bakers succeed.</p>
                    {/* Learn more button */}
                    <a href="#our-values">
                        <button className="relative group bg-dark-hunter-green text-white font-sora font-bold rounded-xl overflow-hidden text-base md:text-lg px-6 py-3 md:px-8 md:py-4 flex items-center justify-center gap-4 transition-all duration-300">
                            {/* Sliding background */}
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-luscious-lime group-hover:h-full transition-all duration-400 ease-out" />
                            
                            {/* Text Stack Animation */}
                            <div className="relative z-10 overflow-hidden">
                                <div className="transform group-hover:-translate-y-full transition-transform duration-300">
                                    Learn more
                                </div>
                                <div className="absolute top-full transform group-hover:-translate-y-full transition-transform duration-300">
                                    Learn more
                                </div>
                            </div>

                            {/* Arrow Icon */}
                            <div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M3 12H21M21 12L14 5M21 12L14 19"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </button>
                    </a>
                    
                </div>

                {/* Image Section */}
                <img src="baker.svg" alt="Baker illustration" className="hidden lg:block"/>
                
            </div>

        </div>
        </>
    );
}

export default AboutUsHero;