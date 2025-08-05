import { useState } from 'react';

function OurValues (){
    // Create a function for showing and hiding the drop down content.

    return (
        <>
            <div className="w-full lg:w-screen min-w-50 p-8 sm:p-15 bg-[#66BF3C]" id="our-values">
                
                <div className="max-w-7xl mx-auto">

                    <div className="w-full flex flex-col gap-20 overflow-x-auto">

                        {/* Heading */}
                        <h1 className="heading1">Our Values</h1>

                        {/* Values dropdown */}
                        <div className="max-w-7xl">
                            {/* Quality */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-2xl font-semibold">Quality First</p>
                                    <img src="arrowDown.svg" alt="arrow" className="flex w-10 cursor-pointer"/>
                                </div>
                                <div className="">
                                        <p className="text1">We never compromise on the standard of the product, every product we is test for consistency, performance and freshness</p>
                                </div>
                            </div>

                            {/* Separator */}
                            <hr className="border-white-900 my-5"/>

                            {/* Customer success */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-2xl font-semibold">Customer Success</p>
                                    <img src="arrowDown.svg" alt="arrow" className="flex w-10 cursor-pointer"/>
                                </div>
                                <div className="">
                                    <p className="text1">We are committed to ensuring our customers achieve their desired outcomes with our products.</p>
                                </div>
                            </div>

                            {/* Separator */}
                            <hr className="border-white-900 my-5"/>

                            {/* Quality */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-2xl font-semibold">Innovation Everyday</p>
                                    <img src="arrowDown.svg" alt="arrow" className="flex w-10 cursor-pointer"/>
                                </div>
                                <div className="">
                                        <p className="text1">We foster a culture of continuous improvement and encourage our team to think outside the box.</p>
                                </div>
                            </div>

                            {/* Separator */}
                            <hr className="border-white-900 my-5"/>

                            {/* Quality */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-2xl font-semibold">Integrity Always</p>
                                    <img src="arrowDown.svg" alt="arrow" className="flex w-10 cursor-pointer"/>
                                </div>
                                <div className="">
                                    <p className="text1">We uphold the highest standards of integrity in all our actions.</p>
                                </div>
                            </div>

                        </div>     
                    </div>
                       
                </div>
                
            </div>
        </>
    );
}
export default OurValues;

// TO DO: Add a dropdown functionality to the values section so that when the user clicks the button, the description is shown or hidden.
// TO DO: When the user clicks the button, the arrow icon should rotate to indicate the dropdown state.