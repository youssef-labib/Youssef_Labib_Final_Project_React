import React, { useEffect } from 'react';
import Images from '../../../constant/images'
import { Carousel } from 'flowbite';

const HeroSection = () => {
    useEffect(() => {
        const carouselElement = document.getElementById('default-carousel');
        const carousel = new Carousel(carouselElement);
    }, []);

    return (
        <>
            <div id="default-carousel" className="relative w-full group" data-carousel="slide">

                <div className="relative overflow-hidden rounded-lg h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">

                    <div
                        className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 flex flex-col items-center justify-center text-center space-y-6"
                        data-carousel-item="active"
                        style={{ backgroundImage: `url(${Images.carousel1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <p className="text-white text-sm sm:text-lg tracking-widest uppercase mb-2">Women Collection 2018</p>
                        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase drop-shadow-lg mb-6">New Arrivals</h1>
                        <button className="bg-white text-black rounded-full px-5 sm:px-7 py-2 sm:py-3 font-medium shadow text-xs sm:text-sm hover:bg-[#e65540] hover:text-white transition-colors duration-300">SHOP NOW</button>
                    </div>

                    <div
                        className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full flex flex-col items-center justify-center text-center space-y-6"
                        data-carousel-item
                        style={{ backgroundImage: `url(${Images.carousel2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <p className="text-white text-sm sm:text-lg tracking-widest uppercase mb-2">Women Collection 2018</p>
                        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase drop-shadow-lg mb-6">New Arrivals</h1>
                        <button className="bg-white text-black rounded-full px-5 sm:px-7 py-2 sm:py-3 font-medium shadow text-xs sm:text-sm hover:bg-[#e65540] hover:text-white transition-colors duration-300">SHOP NOW</button>
                    </div>

                    <div
                        className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full flex flex-col items-center justify-center text-center space-y-6"
                        data-carousel-item
                        style={{ backgroundImage: `url(${Images.carousel3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <p className="text-white text-sm sm:text-lg tracking-widest uppercase mb-2">Women Collection 2018</p>
                        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase drop-shadow-lg mb-6">New Arrivals</h1>
                        <button className="bg-white text-black rounded-full px-5 sm:px-7 py-2 sm:py-3 font-medium shadow text-xs sm:text-sm hover:bg-[#e65540] hover:text-white transition-colors duration-300">SHOP NOW</button>
                    </div>
                </div>
                
                <button
                    type="button"
                    className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 -translate-y-1/2 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-[#e65540] transition-colors opacity-70 hover:opacity-100"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-full h-full">
                        <svg className="w-1 h-4 text-white" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 -translate-y-1/2 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-[#e65540] transition-colors opacity-70 hover:opacity-100"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-full h-full">
                        <svg className="w-1 h-4 text-white" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>
    );
};

export default HeroSection;