import { useNavigate, useLocation } from "react-router-dom";

function Footer(){
    // Get the current year for copyright
    const d = new Date();
    let year = d.getFullYear();

    // Import necessary hooks from react-router-dom
    const navigate = useNavigate();
    const location = useLocation();

    return ( 
        <>
            <div style={{ backgroundColor: '#163033' }} 
                className="min-w-50 w-full lg:w-screen p-8 sm:p-15 flex flex-col gap-10 text-white overflow-x-auto">
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-7xl flex flex-col gap-10">

                            {/* Footer content */}
                            <div className="lg:w-full flex flex-col lg:flex-row gap-10 justify-between">
                                {/* Logo */}
                                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                                    <img className="w-30 sm:w-43" src="logo.svg" alt="logo" />
                                    <div className="">
                                        <h1 className="font-bold text-4xl sm:text-5xl sm:text-left text-center">Milimani<br/>Enterprises</h1>
                                        <p className="font-regular text-lg text-white sm:text-left text-center">Innovative Baking</p>    
                                    </div>
                                </div>
                                
                                {/* Company information */}
                                <div className="flex sm:flex-row flex-col sm:gap-15 gap-10 justify-center items-top text-center sm:text-left">

                                    {/* Contact us */}
                                    <div className="flex flex-col items-center sm:items-start gap-3">
                                        <p className="font-semibold text-xl">Contact</p>
                                        {/* Number */}
                                        <div className="flex gap-2">
                                            <img src="call.svg" alt="phone" />
                                            <p className="text1">+250 788 760 923</p>
                                        </div>
                                        {/* Email */}
                                        <div className="flex gap-2">
                                            <img src="mail.svg" alt="email" />
                                            <p className="text1">info@milimani.rw</p>
                                        </div>
                                        {/* Social media */}
                                        <div className="flex sm:justify-start justify-center gap-3">
                                            <a
                                                href="https://www.instagram.com/milimani.enterprises/?hl=en"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img 
                                                    src="facebook.svg"
                                                    alt="facebook"
                                                    className="hover:scale-110 transition-transform duration-200 cursor-pointer" 
                                                />
                                            </a>
                                            
                                            <a
                                                href="https://www.facebook.com/milimani.biz/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="instagram.svg"
                                                    alt="instagram"
                                                    className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                                                />
                                            </a>
                                            
                                        </div>
                                    </div>

                                    {/* Address us */}
                                    <div className="flex flex-col items-center sm:items-start gap-3">
                                        <p className="font-semibold text-xl">Address</p>
                                        {/* Shop address */}
                                        <div className="flex items-start gap-2">
                                            <img src="store.svg" alt="store" />
                                            <p className="text1">Kigali, Rwanda<br/>KN 1 Rd</p>
                                        </div>
                                        {/* Factory address */}
                                        <div className="flex items-start gap-2">
                                            <img src="factory.svg" alt="factory" />
                                            <p className="text1">Kigali, Rwanda<br/>Industrial Area</p>
                                        </div>
                                    </div>

                                    {/* Pages */}
                                    <div className="flex flex-col items-center sm:items-start gap-3">
                                        <p className="font-semibold text-xl">Pages</p>
                                        <li onClick={() => navigate("/")} className="list-none cursor-pointer hover:scale-105 transition-transform duration-200 ">
                                            <a className="text1">Home</a>
                                        </li>
                                        <li onClick={() => navigate("/aboutUs")} className="list-none cursor-pointer hover:scale-105 transition-transform duration-200 ">
                                            <a className="text1">About Us</a>
                                        </li>
                                        <li onClick={() => navigate("/contactUs")} className="list-none cursor-pointer hover:scale-105 transition-transform duration-200 ">
                                            <a className="text1">Contact Us</a>
                                        </li>    
                                    </div>

                                </div>
                            </div>                

                            {/* Divider */}
                            <hr className="footerDivider" />

                            {/* Copyright */}
                            <p className="text1 text-white text-center lg:text-left lg:w-full">
                                &copy; {year} Milimani Enterprises. All rights reserved.
                            </p>
                        </div>
                    </div>
                    
                
            
            </div>
        </>
    );
}
export default Footer;

// Change color of the social media icons on hover wet to sand sand
// Underline on the page links