import React from 'react';

const Form = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[450px] lg:h-screen">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.6362761737046!2d-7.5364266245035445!3d33.60378817332928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e1!3m2!1sen!2sma!4v1749028606804!5m2!1sen!2sma"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16">
          <h2 className="text-[25px] text-[rgb(51,51,51)] font-semibold mb-8">
            Send us your message
          </h2>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                aria-label="Name"
                className="w-full px-4 py-3 rounded-lg border border-[#ccc] focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="w-full px-4 py-3 rounded-lg border border-[#ccc] focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone"
                aria-label="Phone"
                className="w-full px-4 py-3 rounded-lg border border-[#ccc] focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                aria-label="Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-[#ccc] focus:outline-none focus:border-gray-500 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white text-[16px] font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form; 