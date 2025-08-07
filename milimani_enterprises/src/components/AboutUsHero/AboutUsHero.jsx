import { motion } from 'framer-motion';

function AboutUsHero(){
    return(
        <>
        <div className="lg:pl-15 lg:pr-0 lg:pt-15 lg:pb-15 px-6 md:px-8 pt-32 pb-16 md:pt-40 md:pb-40">

            <div className="w-full flex items-center justify-between md:gap-5 xl:gap-40 xl:justify-center">

                {/* Text Section */}
                <div className="flex flex-col gap-4 items-start text-[#143e45]">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight max-w-full md:max-w-160">Where We Bake Innovatively</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <p className="text-base md:text-lg leading-relaxed max-w-full md:max-w-155">Milimani Enterprises supplies quality baking ingredients and equipment across Rwanda. We blend innovation with a personal touch to help bakers succeed.</p>
                    </motion.div>
                    {/* Learn more button */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <button 
                            onClick={() => {
                                document.getElementById('our-values')?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                            className="relative group bg-dark-hunter-green text-white font-sora font-bold rounded-xl overflow-hidden text-base md:text-lg px-6 py-3 md:px-8 md:py-4 flex items-center justify-center gap-4 transition-all duration-300"
                        >
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
                    </motion.div>
                    
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    <img src="baker.svg" alt="Baker illustration" className="hidden lg:block" loading="lazy" decoding="async"/>
                </motion.div>
                
            </div>

        </div>
        </>
    );
}

export default AboutUsHero;