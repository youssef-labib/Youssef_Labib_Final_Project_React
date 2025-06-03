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
        <section id="countdown" className="bg-[#f2f2f2] h-[580px] flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="relative bg-white overflow-hidden flex items-center justify-center h-[430px]">
                    <div className="absolute inset-0">
                        <img
                            src={Images.banner08}
                            alt="Lookbook"
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center pointer-events-none">
                        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-2">The Beauty</h2>
                        <h1 className="text-white text-6xl md:text-6xl font-extrabold mb-4 tracking-wide">LOOKBOOK</h1>
                        <a href='/shop' className="text-white text-lg tracking-widest mb-2 drop-shadow-lg border-b-2 border-transparent hover:border-white transition-all duration-200">VIEW COLLECTION</a>
                    </div>
                </div>

                <div className="bg-white flex flex-col items-center justify-center h-[430px] p-8 relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-contain pointer-events-none"
                        style={{ backgroundImage: `url(${Images.shopItem09})`, zIndex: 1 }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-end z-10 w-full h-full text-center pb-23">
                        <div>
                            <div className="text-gray-700 text-sm mb-1">Boxy2 T-Shirt with Roll Sleeve</div>
                            <div className="text-gray-700 text-base mb-9">$20.00</div>
                        </div>
                    </div>
                    <div className="relative z-20 flex gap-4 mt-auto w-full justify-center pt-8" style={{ bottom: 0 }}>
                        <div className="border px-6 py-2 rounded text-gray-500 text-lg text-center">
                            2
                            <div className="text-xs mt-1">days</div>
                        </div>
                        <div className="border px-6 py-2 rounded text-gray-500 text-lg text-center">
                            8
                            <div className="text-xs mt-1">hrs</div>
                        </div>
                        <div className="border px-6 py-2 rounded text-gray-500 text-lg text-center">
                            6
                            <div className="text-xs mt-1">mins</div>
                        </div>
                        <div className="border px-6 py-2 rounded text-gray-500 text-lg text-center">
                            {seconds < 10 ? `0${seconds}` : seconds}
                            <div className="text-xs mt-1">secs</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountdownSalePage;