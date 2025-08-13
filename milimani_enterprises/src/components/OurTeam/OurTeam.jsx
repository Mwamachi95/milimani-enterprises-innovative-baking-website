import { AnimatedSection, AnimatedGrid } from '../animations';
import { fadeInUp } from '../animations';
import { motion } from 'framer-motion';

// Skeleton component for loading state
const TeamCardSkeleton = () => (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="w-full h-80 xl:h-96 bg-gray-200 animate-pulse"></div>
        <div className="p-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>
        </div>
    </div>
);

// Lazy-loaded team card component
const LazyTeamCard = ({ imageSrc, imageAlt, name, role, objectPosition, isVisible = true }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg"
    >
        {isVisible ? (
            <>
                {/* Image */}
                <div className="w-full h-80 xl:h-96 overflow-hidden relative z-20">
                    <img 
                        src={imageSrc} 
                        alt={imageAlt} 
                        className={`w-full h-full object-cover ${objectPosition}`}
                        loading="lazy" 
                        decoding="async" 
                    />
                </div>
                
                {/* Title Section with Sliding Background */}
                <div className="relative">
                    {/* Sliding Background - only covers text area */}
                    <div className="absolute inset-0 bg-dark-hunter-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
                    
                    {/* Title Content */}
                    <div className="relative z-20 flex flex-col p-4">
                        <h2 className="text-base font-semibold text-black group-hover:text-white transition-colors duration-500">{name}</h2>
                        <p className="text-gray-600 group-hover:text-white transition-colors duration-500">{role}</p>
                    </div>
                </div>
            </>
        ) : (
            <TeamCardSkeleton />
        )}
    </motion.div>
);

function OurTeam (){
    return (
        <>
            <div className="min-w-50 w-full sm:w-screen p-8 sm:p-15 flex flex-col gap-20 overflow-x-auto">
                {/* Title */}
                <AnimatedSection variants={fadeInUp} className="flex flex-col gap-4 sm:items-center">
                    <h1 className="text-4xl font-semibold text-black sm:text-center text-left">We are the people who make up</h1>
                    <h1 className="text-4xl font-semibold text-left sm:text-center text-left"> 
                        <span className="text-center font-bold text-white pl-2 pr-2" style={{backgroundColor: '#7cbf00'}}>
                           Milimani Enterprises
                        </span>
                    </h1>
                </AnimatedSection>

                {/* Team Members */}
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-7xl">
                        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                            {/* Founder */}
                            <LazyTeamCard
                                imageSrc="owner.jpg"
                                imageAlt="Founder/CEO"
                                name="Patricia Toroitich"
                                role="Founder"
                                objectPosition="object-[center_40%] xl:object-[center_45%]"
                            />

                            {/* Managing director */}
                            <LazyTeamCard
                                imageSrc="operations.jpg"
                                imageAlt="Managing director"
                                name="Eric Nshimiyimana"
                                role="Managing Director"
                                objectPosition="object-[center_65%] sm:object-[center_85%] xl:object-[center_65%]"
                            />

                            {/* Head of operations */}
                            <LazyTeamCard
                                imageSrc="md.jpg"
                                imageAlt="Head of operations"
                                name="Judy Uwase"
                                role="Head Of Operations"
                                objectPosition="object-[center_45%] xl:object-[center_45%]"
                            />

                            {/* Head of marketing */}
                            <LazyTeamCard
                                imageSrc="marketing.jpg"
                                imageAlt="Head of marketing"
                                name="Jean Habimana"
                                role="Head Of Marketing"
                                objectPosition="object-[center_65%] sm:object-[center_85%] xl:object-[center_70%]"
                            />

                            {/* Head of finance */}
                            <LazyTeamCard
                                imageSrc="finance.jpg"
                                imageAlt="Head of finance"
                                name="Aline Umutoni"
                                role="Head Of Finance"
                                objectPosition="object-[center_65%] sm:object-[center_85%] xl:object-[center_70%]"
                            />

                            {/* Head of production */}
                            <LazyTeamCard
                                imageSrc="production.jpg"
                                imageAlt="Head of production"
                                name="Claude Uwimana"
                                role="Head Of Production"
                                objectPosition="object-[center_60%] sm:object-[center_70%] xl:object-[center_65%]"
                            />

                            {/* Production team member */}
                            <div className="hidden lg:flex">
                                <LazyTeamCard
                                    imageSrc="productionTeam.jpg"
                                    imageAlt="Production team member"
                                    name="David Kagabo"
                                    role="Production Team"
                                    objectPosition="object-top sm:object-[center_85%] xl:object-[center_70%]"
                                />
                            </div>

                            <div className="hidden lg:flex">
                                <LazyTeamCard
                                    imageSrc="productionTeamMember2.jpg"
                                    imageAlt="Production team member"
                                    name="Patrick Mugisha"
                                    role="Production Team"
                                    objectPosition="object-top sm:object-[center_85%] xl:object-[center_70%]"
                                />
                            </div>

                        </AnimatedGrid> 
                    </div>   
                </div>
                
            </div>
        </>
    );
}
export default OurTeam;
