function AboutUsHero(){
    return(
        <>
        <div className="lg:pl-15 lg:pr-0 lg:pt-15 lg:pb-15 pl-8 pr-8 pt-40 pb-40">

            <div className="xl:w-screen sm:w-full flex items-center justify-between md:gap-5 xl:gap-40 xl:justify-center overflow-hidden">

                {/* Text Section */}
                <div className="flex flex-col gap-4 items-start text-[#143e45]">
                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-wider max-w-160">Where We Bake Innovatively</h1>
                    <p className="text-sm md:text1 max-w-155">Milimani Enterprises supplies quality baking ingredients and equipment across Rwanda. We blend innovation with a personal touch to help bakers succeed.</p>
                    {/* Learn more button */}
                    <div className="p-3 rounded-sm flex gap-2 cursor-pointer bg-[#67a650] hover:bg-[#5b9b4e] transition duration-300">
                        <p className="text-white">Learn more</p>
                        <img src="arrowRight.svg" alt="Arrow right"></img>
                    </div>
                </div>

                {/* Image Section */}
                <img src="baker.svg" alt="Baker illustration" className="hidden lg:block"/>
                
            </div>

        </div>
        </>
    );
}

export default AboutUsHero;

// TO DO: Create unit testing for this component