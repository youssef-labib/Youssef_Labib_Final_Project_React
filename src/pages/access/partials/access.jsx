import React from 'react';

const Access = () => {
    return (
        <>
            <div className="container mx-auto max-w-[1300px] min-h-screen flex items-center justify-center">
                <div className="flex gap-10 px-5">

                    <div className="flex-1 max-w-[600px] border border-gray-300 p-8">
                        <h1 className="text-[32px] mb-4">New Customer</h1>
                        <h2 className="text-[15px] font-bold text-gray-600 mb-4">Register Account</h2>
                        <p className="text-[15px] font-normal text-gray-600 mb-6 leading-relaxed">
                            By creating an account you will be able to shop faster, be up to date
                            on an order's status, and keep track of the orders you have previously
                            made.
                        </p>
                        <button className="bg-gray-800 hover:bg-[#e65540] transition-colors text-white text-xs uppercase py-3 px-6">
                            Continue
                        </button>
                    </div>

                    <div className="flex-1 max-w-[600px] border border-gray-300 p-8">
                        <h1 className="text-[32px] mb-4">Returning Customer</h1>
                        <p className="text-[15px] text-gray-600 mb-6">I am a returning customer</p>
                        
                        <div className="mb-4">
                            <label className="block text-[15px] text-gray-800 mb-2">Email</label>
                            <input type="email" className="w-full p-2 border border-gray-300 text-[13px]" />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-[15px] text-gray-800 mb-2">Password</label>
                            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 text-[13px]" />
                        </div>
                        
                        <a href="#" className="block text-[15px] text-gray-600 mb-5 hover:text-[#e65540] transition-colors">
                            Forgot your password?
                        </a>
                        
                        <div className="flex items-center">
                            <button className="bg-gray-800 hover:bg-[#e65540] transition-colors text-white text-xs uppercase py-3 px-6">
                                Sign In
                            </button>
                            <a href="#" className="text-[15px] text-gray-600 ml-4 hover:text-[#e65540] transition-colors">
                                or Return to Store
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Access;