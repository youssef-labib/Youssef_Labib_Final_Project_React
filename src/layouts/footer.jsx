import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#f2f2f2] pt-[60px] pb-5 font-montserrat text-[#222] font-normal">
            <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-start px-10 gap-y-10">

                <div className="flex-[5] w-[350px] mb-0 pr-[50px] flex flex-col items-start">
                    <h3 className="font-bold text-[15px] mb-5">GET IN TOUCH</h3>
                    <div className="text-[13px] mb-7 leading-[1.7] font-normal">
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                    </div>
                    <div className="flex gap-5 mt-2">
                        <a href="#" className="text-[#888] text-[18px] font-normal hover:text-[#e65540] transition-colors"><FaFacebookF /></a>
                        <a href="#" className="text-[#888] text-[18px] font-normal hover:text-[#e65540] transition-colors"><FaTwitter /></a>
                        <a href="#" className="text-[#888] text-[18px] font-normal hover:text-[#e65540] transition-colors"><FaPinterestSquare /></a>
                        <a href="#" className="text-[#888] text-[18px] font-normal hover:text-[#e65540] transition-colors"><FaGooglePlusG /></a>
                        <a href="#" className="text-[#888] text-[18px] font-normal hover:text-[#e65540] transition-colors"><FaInstagram /></a>
                    </div>
                </div>

                <div className="flex-1 min-w-[180px] mb-0 flex flex-col items-start">
                    <h3 className="font-bold text-[15px] mb-5">CATEGORIES</h3>
                    <ul className="list-none p-0 text-[13px] leading-[2] font-normal">
                        <li><a href="/" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Men</a></li>
                        <li><a href="/" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Women</a></li>
                        <li><a href="/" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Dresses</a></li>
                        <li><a href="/" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Sunglasses</a></li>
                    </ul>
                </div>

                <div className="flex-1 min-w-[180px] mb-0 flex flex-col items-start">
                    <h3 className="font-bold text-[15px] mb-5">LINKS</h3>
                    <ul className="list-none p-0 text-[13px] leading-[2] font-normal">
                        <li><a href="#" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Search</a></li>
                        <li><a href="/about" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">About Us</a></li>
                        <li><a href="/contact" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Contact Us</a></li>
                        <li><a href="#" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Returns</a></li>
                    </ul>
                </div>

                <div className="flex-1 min-w-[180px] mb-0 flex flex-col items-start">
                    <h3 className="font-bold text-[15px] mb-5">HELP</h3>
                    <ul className="list-none p-0 text-[13px] leading-[2] font-normal">
                        <li><a href="/" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Track Order</a></li>
                        <li><a href="/" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Returns</a></li>
                        <li><a href="/" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">Shipping</a></li>
                        <li><a href="/" className="text-[#222] no-underline text-[13px] font-normal hover:text-[#e65540] transition-colors">FAQs</a></li>
                    </ul>
                </div>

                <div className="flex-[1.2] min-w-[300px] mb-0 flex flex-col items-start justify-start">
                    <h3 className="font-bold text-[15px] mb-5">NEWSLETTER</h3>
                    <form className="flex flex-col gap-5 w-full" onSubmit={e => e.preventDefault()}>
                        <input 
                            type="email"
                            placeholder="Email Address"
                            className="w-full text-[16px] font-normal mb-2 px-1 py-2 bg-transparent border-0 border-b border-[#d3d3d3] focus:outline-none focus:border-[#e65540] transition-colors placeholder:text-[#888]" 
                        />
                        <button type="submit" className="bg-[#111111] text-white border-none rounded-[30px] py-[10px] text-[16px] font-normal cursor-pointer w-[180px] self-start hover:bg-[#e65540] transition-colors">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-10 text-[#888] text-[15px] pt-12 pb-8">
                Copyright © 2022 <a className="text-[#222] font-medium hover:text-[#e65540] transition-colors cursor-pointer">Shopify Theme Developed by Youssef Labib</a> All rights reserved.
            </div>

            <button className="fixed bottom-[30px] right-[30px] bg-[#888] hover:bg-[#e65540] transition-colors text-white border-none rounded-[8px] w-[45px] h-[45px] text-[28px] cursor-pointer z-[1000]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="inline-block">&#8593;</span>
            </button>
        </footer>
    );
};

export default Footer;
