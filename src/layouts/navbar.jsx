import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Images from "../constant/images"
import { useCart } from '../context/CartContext';
import Cart from '../pages/shop/partials/Cart';
import { useNavigate } from 'react-router-dom';

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Sale', href: '#sale' },
    { name: 'Features', href: '#features' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { toggleCart, getTotalItems } = useCart();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="z-50 hidden md:flex bg-[#f5f5f5] p-4 text-center flex-col md:flex-row items-center justify-center md:gap-[24.7rem] text-sm leading-[22px] text-[#888]">
                <div className="flex items-center justify-center gap-4 text-[19px] mb-2 md:mb-0">
                    <a href="" className="hover:text-[#e65540] transition-colors"><FaFacebookF /></a>
                    <a href="" className="hover:text-[#e65540] transition-colors"><FaTwitter /></a>
                    <a href="" className="hover:text-[#e65540] transition-colors"><FaPinterestSquare /></a>
                    <a href="" className="hover:text-[#e65540] transition-colors"><FaGooglePlusG /></a>
                    <a href="" className="hover:text-[#e65540] transition-colors"><FaInstagram /></a>
                </div>
                <div className="mb-2 md:mb-0">
                    <p>Free shipping for standard order over $100</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div>
                        <p>fashe@example.com</p>
                    </div>
                    <div>
                        <p>USD</p>
                    </div>
                </div>
            </div>

            <div id="navbar" className="z-50 sticky top-0 overflow-hidden bg-white h-[4.5rem] flex items-center justify-between px-4 md:justify-center md:gap-[23rem] text-[15px] leading-[26px] shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px]">
                <div>
                    <img src={Images.logo} alt="Fashe Logo" />
                </div>

                <div className="hidden md:flex items-center justify-center gap-6 text-[#343333]">
                    {menuItems.map(item => (
                        <a key={item.name} href={item.href} className="transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-black after:transition-width after:duration-300 hover:after:w-full">{item.name}</a>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center gap-4 text-[#f5f5f5]">
                        <a onClick={() => navigate('/access')} style={{ cursor: 'pointer' }}><img src={Images.iconheader1} alt="Search" /></a>
                        <span>|</span>
                        <button 
                            onClick={toggleCart} 
                            className="relative"
                        >
                            <img src={Images.iconheader2} alt="Cart" />
                            {getTotalItems() > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#e65540] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {getTotalItems()}
                                </span>
                            )}
                        </button>
                    </div>

                    <button onClick={toggleMenu} className="text-2xl md:hidden ml-2">
                        <RxHamburgerMenu />
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={isMenuOpen ? toggleMenu : undefined}
                style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ boxShadow: '0 0 40px rgba(0,0,0,0.15)' }}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <img src={Images.logo} alt="Fashe Logo" className="h-8" />
                    <div className="flex items-center gap-4">
                        <a onClick={() => navigate('/access')} style={{ cursor: 'pointer' }}><img src={Images.iconheader1} alt="Search" className="h-6" /></a>
                        <button onClick={toggleCart} className="relative">
                            <img src={Images.iconheader2} alt="Cart" className="h-6" />
                            {getTotalItems() > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#e65540] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {getTotalItems()}
                                </span>
                            )}
                        </button>
                        <button onClick={toggleMenu} className="text-3xl ml-2"><IoMdClose /></button>
                    </div>
                </div>
                <div className="px-6 py-3 border-b">
                    <p className="text-xs text-gray-500">Free shipping for standard order over $100</p>
                    <p className="text-xs text-gray-500">fashe@example.com</p>
                    <div className="flex gap-4 mt-2 text-[19px] text-[#888]">
                        <a href="" className="hover:text-[#e65540] transition-colors"><FaFacebookF /></a>
                        <a href="" className="hover:text-[#e65540] transition-colors"><FaTwitter /></a>
                        <a href="" className="hover:text-[#e65540] transition-colors"><FaPinterestSquare /></a>
                        <a href="" className="hover:text-[#e65540] transition-colors"><FaGooglePlusG /></a>
                        <a href="" className="hover:text-[#e65540] transition-colors"><FaInstagram /></a>
                    </div>
                </div>
                <nav className="flex-1 overflow-y-auto">
                    {menuItems.map(item => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between px-6 py-4 text-white text-lg font-medium bg-[#f75c3c] border-b border-white hover:bg-[#e65540] transition-colors"
                            style={{textShadow: '0 1px 2px rgba(0,0,0,0.08)'}}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>

            <Cart />
        </>
    );
};

export default Navbar;
