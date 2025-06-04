import React from 'react';
import images from '../../constant/images';

const ErrorPage = () => {
    return (
        <>
            <div className="container flex flex-col items-center justify-center min-h-screen">
                <img src={images.notfound} alt="404" className="mx-auto" />
                <h1 className="text-center">OPPS! PAGE NOT FOUND</h1>
                <button 
                    onClick={() => window.history.back()} 
                    className="bg-[#2A2A2A] text-white px-6 py-3 mt-5 uppercase text-sm font-medium hover:bg-black transition-colors duration-300 w-52"
                >
                    BACK TO HOME PAGE
                </button>
            </div>
        </>
    );
};

export default ErrorPage;
