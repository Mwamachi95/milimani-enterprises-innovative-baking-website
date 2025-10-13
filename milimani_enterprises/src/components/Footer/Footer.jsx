import { useNavigate } from "react-router-dom";
import { AnimatedSection } from '../animations';
import { fadeInUp } from '../animations';

function Footer(){
    // Get the current year for copyright
    const d = new Date();
    let year = d.getFullYear();

    // Import necessary hooks from react-router-dom
    const navigate = useNavigate();

    return ( 
        <>
            <AnimatedSection variants={fadeInUp}>
                <div style={{ backgroundColor: '#163033' }} 
                    className="w-full p-8 sm:p-15 flex flex-col gap-10 text-white">
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-7xl flex flex-col gap-10">

                            {/* Footer content */}
                            <div className="lg:w-full flex flex-col lg:flex-row gap-10 justify-between">
                                {/* Logo */}
                                <div className="flex flex-row gap-3 items-center justify-start sm:justify-center">
                                    <img className="w-20 sm:w-30 md:w-43" src="logo.svg" alt="logo" loading="lazy" decoding="async" />
                                    <div className="flex-shrink min-w-0">
                                        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-left leading-tight">Milimani<br/>Enterprises</h1>
                                        <p className="font-regular text-sm sm:text-lg text-white text-left">Innovative Baking</p>    
                                    </div>
                                </div>
                                
                                {/* Company information */}
                                <div className="flex flex-row sm:gap-15 gap-6 justify-start sm:justify-center items-top text-left flex-wrap">

                                    {/* Contact us */}
                                    <div className="flex flex-col items-start gap-3">
                                        <p className="font-semibold text-xl">Contact</p>
                                        {/* Number */}
                                        <a href="tel:+250788760923" className="flex gap-2 group hover:text-luscious-lime transition-colors duration-300 cursor-pointer">
                                            <img src="call.svg" alt="phone" className="group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:hue-rotate-90 transition-all duration-300" style={{filter: 'brightness(0) saturate(100%) invert(100%)'}} loading="lazy" decoding="async" />
                                            <span className="text-sm text-white group-hover:text-luscious-lime transition-colors duration-300">+250 788 760 923</span>
                                        </a>
                                        {/* Email */}
                                        <a href="mailto:info@milimani.rw" className="flex gap-2 group hover:text-luscious-lime transition-colors duration-300 cursor-pointer">
                                            <img src="mail.svg" alt="email" className="group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:hue-rotate-90 transition-all duration-300" style={{filter: 'brightness(0) saturate(100%) invert(100%)'}} loading="lazy" decoding="async" />
                                            <span className="text-sm text-white group-hover:text-luscious-lime transition-colors duration-300">info@milimani.rw</span>
                                        </a>
                                        {/* Social media */}
                                        <div className="flex justify-start gap-3">
                                            <a
                                                href="https://www.facebook.com/milimani.biz/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-bright-white hover:text-luscious-lime transition-colors duration-300 cursor-pointer"
                                            >
                                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                                </svg>
                                            </a>

                                            <a
                                                href="https://www.instagram.com/milimani.enterprises/?hl=en"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-bright-white hover:text-luscious-lime transition-colors duration-300 cursor-pointer"
                                            >
                                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                </svg>
                                            </a>

                                            <a
                                                href="https://www.linkedin.com/company/milimani-enterprises-ltd/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-bright-white hover:text-luscious-lime transition-colors duration-300 cursor-pointer"
                                            >
                                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </a>

                                        </div>
                                    </div>

                                    {/* Address us */}
                                    <div className="flex flex-col items-start gap-3">
                                        <p className="font-semibold text-xl">Address</p>
                                        {/* Shop address */}
                                        <div className="flex items-start gap-2">
                                            <img src="store.svg" alt="store" loading="lazy" decoding="async" />
                                            <p className="text-sm">Kigali, Rwanda<br/>KN 1 Rd</p>
                                        </div>
                                        {/* Factory address */}
                                        <div className="flex items-start gap-2">
                                            <img src="factory.svg" alt="factory" loading="lazy" decoding="async" />
                                            <p className="text-sm">Kigali, Rwanda<br/>Industrial Area</p>
                                        </div>
                                    </div>

                                    {/* Pages */}
                                    <div className="hidden xl:flex flex-col items-start gap-3">
                                        <p className="font-semibold text-xl">Pages</p>
                                        <li onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate("/");
                                        }} className="list-none cursor-pointer group">
                                            <a className="text-sm relative">
                                                Home
                                                <div className="absolute top-full left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                                            </a>
                                        </li>
                                        <li onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate("/aboutUs");
                                        }} className="list-none cursor-pointer group">
                                            <a className="text-sm relative">
                                                About Us
                                                <div className="absolute top-full left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                                            </a>
                                        </li>
                                        <li onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate("/contactUs");
                                        }} className="list-none cursor-pointer group">
                                            <a className="text-sm relative">
                                                Contact Us
                                                <div className="absolute top-full left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                                            </a>
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
            </AnimatedSection>
        </>
    );
}
export default Footer;

// Change color of the social media icons on hover wet to sand sand
// Underline on the page links
