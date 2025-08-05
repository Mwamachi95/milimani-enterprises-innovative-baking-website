function AboutUsWidgets(){

    return(
        <>
            <div className="flex justify-center p-8 sm:p-15">

                <div className="w-full max-w-7xl flex flex-col gap-20">

                        <div className="flex flex-col gap-4">
                            <p className="text-[40px] font-regular text-[#143E45] md:w-[695px]">Proudly supplying Rwanda with <span className="font-semibold text-[#67bf3b]">first class</span> baking products</p>   
                        </div>

                        <div className="flex gap-5 lg:flex-row flex-col">

                            <div className="flex gap-5 justify-between sm:flex-row flex-col">
                                <div className="flex justify-center items-center bg-[#143e45] xl:w-[250px] xl:h-[250px] lg:w-[210px] lg:h-[210px] sm:w-full h-[280px]">
                                    <div className="flex flex-col">
                                        <p className="font-bold text-[50px]">10+</p>
                                        <p className="font-normal text-md">Years in business</p>    
                                    </div>
                                </div>

                                <div className="flex justify-center items-center bg-[#67bf3b] xl:w-[250px] xl:h-[250px] lg:w-[210px] lg:h-[210px] w-full sm:w-[330px] h-[280px]">
                                    <div className="flex flex-col">
                                        <p className="font-bold text-[50px]">100+</p>
                                        <p className="font-normal text-md">Business supplied to</p>    
                                    </div>
                                </div>    
                            </div>
                            

                            <div className="flex gap-5 justify-between sm:flex-row flex-col">
                                <div className="flex justify-center items-center bg-[#143e45] xl:w-[250px] xl:h-[250px] lg:w-[210px] lg:h-[210px] w-full sm:w-[330px] h-[280px]">
                                    <div className="flex flex-col">
                                        <p className="font-bold text-[50px] w-fit">3</p>
                                        <p className="font-normal text-md">Nationaly recognised<br/> awards</p>    
                                    </div>
                                </div>

                                <div className="flex justify-center items-center bg-[#67bf3b] xl:w-[250px] xl:h-[250px] lg:w-[210px] lg:h-[210px] sm:w-full h-[280px]">
                                    <div className="flex flex-col">
                                        <p className="font-bold text-[50px]">20+</p>
                                        <p className="font-normal text-md">Milimani employees</p>    
                                    </div>
                                </div>    
                            </div>

                        </div>
                </div>
            </div>
        </>
    )

}

export default AboutUsWidgets;