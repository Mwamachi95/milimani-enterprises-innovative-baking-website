function OurTeam (){
    return (
        <>
            <div className="min-w-50 w-full sm:w-screen p-8 sm:p-15 flex flex-col gap-20 overflow-x-auto">
                {/* Title */}
                <div className="flex flex-col gap-4 sm:items-center">
                    <h1 className="text-4xl font-semibold text-black sm:text-center text-left">We are the people who make up</h1>
                    <h1 className="text-4xl font-semibold text-left sm:text-center text-left"> 
                        <span className="text-center font-bold text-white pl-2 pr-2" style={{backgroundColor: '#7cbf00'}}>
                           Milimani Enterprises
                        </span>
                    </h1>
                </div>

                {/* Team Members */}
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-7xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                            {/* Founder */}
                            <div className="flex flex-col group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <div className="w-full h-80 xl:h-96 overflow-hidden relative z-20">
                                    <img src="owner.jpg" alt="Founder/CEO" className="w-full h-full object-cover object-[center_40%] xl:object-[center_45%]" />
                                </div>
                                
                                {/* Title Section with Sliding Background */}
                                <div className="relative">
                                    {/* Sliding Background - only covers text area */}
                                    <div className="absolute inset-0 bg-dark-hunter-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
                                    
                                    {/* Title Content */}
                                    <div className="relative z-20 flex flex-col p-4">
                                        <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors duration-500">Patricia Toroitich</h2>
                                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Founder</p>
                                    </div>
                                </div>
                            </div>

                            {/* Managing director */}
                            <div className="flex flex-col group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <div className="w-full h-80 xl:h-96 overflow-hidden relative z-20">
                                    <img src="md.jpg" alt="Managing director" className="w-full h-full object-cover object-[center_45%] xl:object-[center_45%]" />
                                </div>
                                
                                {/* Title Section with Sliding Background */}
                                <div className="relative">
                                    {/* Sliding Background - only covers text area */}
                                    <div className="absolute inset-0 bg-dark-hunter-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
                                    
                                    {/* Title Content */}
                                    <div className="relative z-20 flex flex-col p-4">
                                        <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors duration-500">Eric Nshimiyimana</h2>
                                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Managing Director</p>
                                    </div>
                                </div>
                            </div>

                            {/* Head of operations */}
                            <div className="flex flex-col group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <div className="w-full h-80 xl:h-96 overflow-hidden relative z-20">
                                    <img src="operations.jpg" alt="Head of operations" className="w-full h-full object-cover object-[center_65%] sm:object-[center_85%] xl:object-[center_65%]" />
                                </div>
                                
                                {/* Title Section with Sliding Background */}
                                <div className="relative">
                                    {/* Sliding Background - only covers text area */}
                                    <div className="absolute inset-0 bg-dark-hunter-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
                                    
                                    {/* Title Content */}
                                    <div className="relative z-20 flex flex-col p-4">
                                        <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors duration-500">Judy Uwase</h2>
                                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Head Of Operations</p>
                                    </div>
                                </div>
                            </div>

                            {/* Head of marketing */}
                            <div className="flex flex-col group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <div className="w-full h-80 xl:h-96 overflow-hidden relative z-20">
                                    <img src="marketing.jpg" alt="Head of marketing" className="w-full h-full object-cover object-[center_65%] sm:object-[center_85%] xl:object-[center_70%]" />
                                </div>
                                
                                {/* Title Section with Sliding Background */}
                                <div className="relative">
                                    {/* Sliding Background - only covers text area */}
                                    <div className="absolute inset-0 bg-dark-hunter-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
                                    
                                    {/* Title Content */}
                                    <div className="relative z-20 flex flex-col p-4">
                                        <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors duration-500">Jean Habimana</h2>
                                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Head Of Marketing</p>
                                    </div>
                                </div>
                            </div>

                            {/* Head of finance */}
                            <div className="flex flex-col group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <div className="w-full h-80 xl:h-96 overflow-hidden relative z-20">
                                    <img src="finance.jpg" alt="Head of finance" className="w-full h-full object-cover object-[center_65%] sm:object-[center_85%] xl:object-[center_70%]" />
                                </div>
                                
                                {/* Title Section with Sliding Background */}
                                <div className="relative">
                                    {/* Sliding Background - only covers text area */}
                                    <div className="absolute inset-0 bg-dark-hunter-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
                                    
                                    {/* Title Content */}
                                    <div className="relative z-20 flex flex-col p-4">
                                        <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors duration-500">Aline Umutoni</h2>
                                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Head Of Finance</p>
                                    </div>
                                </div>
                            </div>

                            {/* Head of production */}
                            <div className="flex flex-col group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <div className="w-full h-80 xl:h-96 overflow-hidden relative z-20">
                                    <img src="production.jpg" alt="Head of production" className="w-full h-full object-cover object-[center_60%] sm:object-[center_70%] xl:object-[center_65%]" />
                                </div>
                                
                                {/* Title Section with Sliding Background */}
                                <div className="relative">
                                    {/* Sliding Background - only covers text area */}
                                    <div className="absolute inset-0 bg-dark-hunter-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
                                    
                                    {/* Title Content */}
                                    <div className="relative z-20 flex flex-col p-4">
                                        <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors duration-500">Claude Uwimana</h2>
                                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Head Of Production</p>
                                    </div>
                                </div>
                            </div>

                            {/* Production team member */}
                            <div className="flex flex-col hidden lg:flex group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <div className="w-full h-80 xl:h-96 overflow-hidden relative z-20">
                                    <img src="productionTeam.jpg" alt="Production team member" className="w-full h-full object-cover object-top sm:object-[center_85%] xl:object-[center_70%]" />
                                </div>
                                
                                {/* Title Section with Sliding Background */}
                                <div className="relative">
                                    {/* Sliding Background - only covers text area */}
                                    <div className="absolute inset-0 bg-dark-hunter-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
                                    
                                    {/* Title Content */}
                                    <div className="relative z-20 flex flex-col p-4">
                                        <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors duration-500">David Kagabo</h2>
                                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Production Team</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col hidden lg:flex group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <div className="w-full h-80 xl:h-96 overflow-hidden relative z-20">
                                    <img src="productionTeamMember2.jpg" alt="Production team member" className="w-full h-full object-cover object-top sm:object-[center_85%] xl:object-[center_70%]" />
                                </div>
                                
                                {/* Title Section with Sliding Background */}
                                <div className="relative">
                                    {/* Sliding Background - only covers text area */}
                                    <div className="absolute inset-0 bg-dark-hunter-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
                                    
                                    {/* Title Content */}
                                    <div className="relative z-20 flex flex-col p-4">
                                        <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors duration-500">Patrick Mugisha</h2>
                                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Production Team</p>
                                    </div>
                                </div>
                            </div>

                        </div> 
                    </div>   
                </div>
                
            </div>
        </>
    );
}
export default OurTeam;
