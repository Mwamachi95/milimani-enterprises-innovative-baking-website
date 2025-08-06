import { motion } from 'framer-motion';
function AboutUsHero(){
    return(
        <div className="flex justify-center p-8 sm:p-15">
            <div className="w-full max-w-7xl">
                <div className="w-full flex justify-between gap-10 overscroll-x-none">
                    <div className="flex flex-col justify-between w-min gap-20">
                        <p className="text-[#66BF3C] font-medium sm:font-regular tracking-wide text-[45px] sm:text-7xl md:text-5xl lg:text-6xl xl:text-7xl w-fit">Baking<br/>Innovatively</p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col items-start gap-6">
                                <p className="text-[#143E45] text-sm lg:text-lg">Milimani Enterprises supplies quality baking ingredients and equipment across Rwanda. We blend innovation with a personal touch to help bakers succeed.</p>
                                <a href="#our-values">
                                    <button className="cursor-pointer pr-[25px] pl-[25px] pt-[15px] pb-[15px] sm:pl-[50px] sm:pr-[50px] sm:pt-[20px] sm:pb-[20px] bg-[#66BF3C] rounded-[10px] duration-200 hover:bg-white border-[#66BF3C] border-[2px] hover:text-[#66BF3C]">Learn more</button>      
                                </a>
                            </div>
                        </motion.div>
                        
                        
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-80 h-100 lg:w-100 xl:w-150 xl:h-150 rounded-lg bg-[#66BF3C] hidden md:block">
                            <img src="aboutUsHero.jpg" alt="Man Baking" className="w-full h-full object-cover object-center rounded-lg" />
                        </div>    
                    </motion.div>
                          
                </div>
            </div>

            
            
        </div>
    );
}

export default AboutUsHero;