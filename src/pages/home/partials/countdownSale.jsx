import React, { useState, useEffect } from 'react';
import Images from '../../../constant/images'

const CountdownSalePage = () => {
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => (prev > 0 ? prev - 1 : 59));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <section id="countdown" className="bg-[#f2f2f2] min-h-[480px] sm:min-h-[580px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="relative bg-white overflow-hidden flex items-center justify-center h-[350px] sm:h-[430px]">
                        <div className="absolute inset-0">
                            <img
                                src={Images.banner08}
                                alt="Lookbook"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
                            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 drop-shadow-lg">The Beauty</h2>
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 tracking-wide drop-shadow-lg">LOOKBOOK</h1>
                            <a
                                href='/shop'
                                className="text-white text-base sm:text-lg tracking-widest drop-shadow-lg border-b-2 border-transparent hover:border-white transition-all duration-300"
                            >
                                VIEW COLLECTION
                            </a>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col items-center justify-center h-[350px] sm:h-[430px] p-6 sm:p-8 relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-contain transition-transform duration-300 hover:scale-105"
                            style={{ backgroundImage: `url(${Images.shopItem09})`, zIndex: 1 }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-end z-10 w-full h-full text-center pb-20 sm:pb-24">
                            <div>
                                <div className="text-gray-700 text-sm sm:text-base mb-1">Boxy2 T-Shirt with Roll Sleeve</div>
                                <div className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-9">$20.00</div>
                            </div>
                        </div>
                        <div className="relative z-20 flex gap-3 sm:gap-4 mt-auto w-full justify-center">
                            <div className="flex flex-col items-center justify-center border px-4 sm:px-6 py-2 rounded shadow-sm bg-white/90">
                                <span className="text-gray-500 text-base sm:text-lg">2</span>
                                <span className="text-xs sm:text-sm text-gray-400 mt-1">days</span>
                            </div>
                            <div className="flex flex-col items-center justify-center border px-4 sm:px-6 py-2 rounded shadow-sm bg-white/90">
                                <span className="text-gray-500 text-base sm:text-lg">8</span>
                                <span className="text-xs sm:text-sm text-gray-400 mt-1">hrs</span>
                            </div>
                            <div className="flex flex-col items-center justify-center border px-4 sm:px-6 py-2 rounded shadow-sm bg-white/90">
                                <span className="text-gray-500 text-base sm:text-lg">6</span>
                                <span className="text-xs sm:text-sm text-gray-400 mt-1">mins</span>
                            </div>
                            <div className="flex flex-col items-center justify-center border px-4 sm:px-6 py-2 rounded shadow-sm bg-white/90">
                                <span className="text-gray-500 text-base sm:text-lg">{seconds < 10 ? `0${seconds}` : seconds}</span>
                                <span className="text-xs sm:text-sm text-gray-400 mt-1">secs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CountdownSalePage;