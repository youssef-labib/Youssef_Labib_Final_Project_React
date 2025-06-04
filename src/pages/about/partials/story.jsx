import React from 'react';
import Images from '../../../constant/images';

const StoryPage = () => {
    return (
        <>
            <div className="top-title flex justify-center h-60 items-center" style={{ backgroundImage: `url(${Images.topweb})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-white text-[40px] font-[1000]'>ABOUT</h1>
            </div>

            <div className="about-story flex flex-col lg:flex-row container mx-auto py-12 px-8 md:px-12 lg:px-20 gap-16">
                <div className="left-as w-full lg:w-2/5 aspect-square p-12 md:p-16 lg:p-20">
                    <img src={Images.itemCart01} alt="about" className='w-full h-full object-cover' />
                </div>

                <div className="right-as w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-[25px] leading-[30px] font-semibold mb-6">Our story</h2>
                    
                    <p className="text-[15px] leading-[26px] text-gray-600 mb-8">
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                    </p>

                    <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                        <p className="text-[13px] leading-[23px] text-gray-700 mb-2">
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                        </p>
                        <footer className="text-[13px] leading-[23px] text-gray-600">- Steve Job's</footer>
                    </blockquote>
                </div>
            </div>
        </>
    );
};

export default StoryPage;