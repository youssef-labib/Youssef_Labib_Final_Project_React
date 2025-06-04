import React from 'react';

const Services = () => {
    return (
        <>

            <section className="py-16">
                <h2 className="text-[30px] font-bold text-black text-center mb-16">
                    @ FOLLOW US ON INSTAGRAM
                </h2>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        <div className="w-full md:w-1/3 p-8">
                            <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
                                Free Delivery Worldwide
                            </h3>
                            <p className="text-[13px] text-[#888888] italic">
                                Mirum est notare quam littera gothica
                            </p>
                        </div>

                        <div className="w-full md:w-1/3 p-8">
                            <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
                                30 Days Return
                            </h3>
                            <p className="text-[13px] text-[#888888] italic">
                                Simply return it within 30 days for an exchange.
                            </p>
                        </div>

                        <div className="w-full md:w-1/3 p-8">
                            <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
                                Store Opening
                            </h3>
                            <p className="text-[13px] text-[#888888] italic">
                                Shop open from Monday to Sunday
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Services;