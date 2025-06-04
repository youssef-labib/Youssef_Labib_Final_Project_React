import React from 'react';
import Images from '../../../constant/images'

const CategoriesPage = () => {
    return (
        <>

            <div className="w-full flex justify-center">
                <div className="container max-w-5xl py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col gap-6">
                            <div className="bg-black flex flex-col justify-end items-center w-full max-w-[320px] h-[380px] mx-auto" style={{ backgroundImage: `url(${Images.cards1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <button className="bg-white text-gray-900 shadow-md px-8 py-2.5 text-[10px] font-medium tracking-widest uppercase transition-colors duration-200 hover:bg-[#e65540] hover:text-white hover:shadow-lg focus:outline-none mb-6 cursor-pointer">DRESSES</button>
                            </div>
                            <div className="bg-black flex flex-col justify-end items-center w-full max-w-[320px] h-[280px] mx-auto" style={{ backgroundImage: `url(${Images.cards4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <button className="bg-white text-gray-900 shadow-md px-8 py-2.5 text-[10px] font-medium tracking-widest uppercase transition-colors duration-200 hover:bg-[#e65540] hover:text-white hover:shadow-lg focus:outline-none mb-6 cursor-pointer">SUNGLASSES</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="bg-black flex flex-col justify-end items-center w-full max-w-[320px] h-[280px] mx-auto" style={{ backgroundImage: `url(${Images.cards2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <button className="bg-white text-gray-900 shadow-md px-8 py-2.5 text-[10px] font-medium tracking-widest uppercase transition-colors duration-200 hover:bg-[#e65540] hover:text-white hover:shadow-lg focus:outline-none mb-6 cursor-pointer">WATCHES</button>
                            </div>
                            <div className="bg-black flex flex-col justify-end items-center w-full max-w-[320px] h-[380px] mx-auto" style={{ backgroundImage: `url(${Images.cards5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <button className="bg-white text-gray-900 shadow-md px-8 py-2.5 text-[10px] font-medium tracking-widest uppercase transition-colors duration-200 hover:bg-[#e65540] hover:text-white hover:shadow-lg focus:outline-none mb-6 cursor-pointer">FOOTERWEAR</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="bg-black flex flex-col justify-end items-center w-full max-w-[320px] h-[380px] mx-auto" style={{ backgroundImage: `url(${Images.cards3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <button className="bg-white text-gray-900 shadow-md px-8 py-2.5 text-[10px] font-medium tracking-widest uppercase transition-colors duration-200 hover:bg-[#e65540] hover:text-white hover:shadow-lg focus:outline-none mb-6 cursor-pointer">BAGS</button>
                            </div>
                            <div className="bg-black flex flex-col justify-end items-center w-full max-w-[320px] h-[280px] mx-auto" style={{ backgroundImage: `url(${Images.cards6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <button className="bg-white text-gray-900 shadow-md px-8 py-2.5 text-[10px] font-medium tracking-widest uppercase transition-colors duration-200 hover:bg-[#e65540] hover:text-white hover:shadow-lg focus:outline-none mb-6 cursor-pointer">ACCESSORIES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CategoriesPage;