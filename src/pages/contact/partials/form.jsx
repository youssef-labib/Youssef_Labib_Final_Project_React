import React from 'react';
import Images from '../../../constant/images'
import emailjs from '@emailjs/browser'


const FormPage = () => {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_mmcwzcp', 'template_lkxqq2r', e.target, 'tKZSsK844BC4zJ_8f')
    }

    return (
        <div>
            <div className="top-title flex justify-center h-60 items-center" style={{ backgroundImage: `url(${Images.topweb})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-white text-[40px] font-[1000]'>CONTACT</h1>
            </div>

            <div className="container max-w-[1000px] mx-auto py-16 px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.6362761737046!2d-7.5364266245035445!3d33.60378817332928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e1!3m2!1sen!2sma!4v1749028606804!5m2!1sen!2sma"
                            className="w-full h-[450px] border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[22px] text-[#333333] font-medium mb-6">
                            Send us your message
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    aria-label="Name"
                                    className="w-full px-4 py-2 text-[13px] text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    aria-label="Email"
                                    className="w-full px-4 py-2 text-[13px] text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    aria-label="Phone"
                                    className="w-full px-4 py-2 text-[13px] text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <textarea
                                    placeholder="Message"
                                    aria-label="Message"
                                    rows="5"
                                    className="w-full px-4 py-2 text-[13px] text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="flex justify-start pt-2">
                                <button
                                    type="submit"
                                    className="px-10 py-2.5 bg-black hover:bg-[#e65540] text-white text-sm font-normal rounded transition duration-300"
                                >
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormPage;