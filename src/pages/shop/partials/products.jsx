import React from 'react';
import Images from '../../../constant/images';
import products from '../../../json/product.json';
import { useCart } from '../../../context/CartContext';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Products = () => {
    const { addToCart, isSuccessModalOpen, closeSuccessModal } = useCart();

    return (
        <>
            {isSuccessModalOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={closeSuccessModal} />
                    <div className="relative flex items-center justify-center h-full">
                        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative flex flex-col items-center">
                            <div className="text-[#4BB543] text-6xl mb-4">
                                <IoCheckmarkCircleOutline />
                            </div>
                            <h2 className="text-2xl font-semibold mb-2 text-center">Added to cart successfully</h2>
                            <p className="text-gray-600 text-center mb-6">
                                The item has been added to your shopping cart.
                            </p>
                            <button
                                onClick={closeSuccessModal}
                                className="w-full py-3 bg-black text-white text-sm font-medium tracking-wider hover:bg-[#e65540] transition-colors duration-300 rounded-md"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="top-title flex justify-center h-60 items-center" style={{ backgroundImage: `url(${Images.banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-white text-[40px] font-[1000]'>PRODUCTS</h1>
            </div>

            <div className="container mx-auto px-8 lg:px-16 py-12 flex flex-col md:flex-row gap-12">
                <div className="left w-full md:w-[250px] space-y-8">
                    <div className="categories">
                        <h3 className="text-[18px] font-bold text-black mb-4">Categories</h3>
                        <ul>
                            <li>
                                <a href="#" className="text-[15px] text-gray-600 hover:text-black">Best Seller (8 items)</a>
                            </li>
                            <li>
                                <a href="#" className="text-[15px] text-gray-600 hover:text-black">Featured (8 items)</a>
                            </li>
                            <li>
                                <a href="#" className="text-[15px] text-gray-600 hover:text-black">Men (8 items)</a>
                            </li>
                            <li>
                                <a href="#" className="text-[15px] text-gray-600 hover:text-black">Women (8 items)</a>
                            </li>
                        </ul>
                    </div>

                    <div className="price">
                        <h3 className="text-[18px] font-bold text-black mb-4">price</h3>
                        <ul>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="0-20" className="form-checkbox" />
                                <label htmlFor="0-20" className="text-[15px] text-gray-600">0-20</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="20-40" className="form-checkbox" />
                                <label htmlFor="20-40" className="text-[15px] text-gray-600">20-40</label>
                            </li>
                        </ul>
                    </div>

                    <div className="size">
                        <h3 className="text-[18px] font-bold text-black mb-4">size</h3>
                        <ul>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="L" className="form-checkbox" />
                                <label htmlFor="L" className="text-[15px] text-gray-600">L</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="M" className="form-checkbox" />
                                <label htmlFor="M" className="text-[15px] text-gray-600">M</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="S" className="form-checkbox" />
                                <label htmlFor="S" className="text-[15px] text-gray-600">S</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="XL" className="form-checkbox" />
                                <label htmlFor="XL" className="text-[15px] text-gray-600">XL</label>
                            </li>
                        </ul>
                    </div>

                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-[180px] px-4 py-2 text-[13px] text-gray-600 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                        />
                    </div>
                </div>

                <div className="right flex-1">
                    <div className="top-filter flex justify-between items-center mb-8">
                        <div className="flex items-center gap-4">
                            <select className="px-3 py-1 border border-gray-300 rounded text-[13px] text-gray-600">
                                <option>Alphabetically, A-Z</option>
                                <option>Featured</option>
                                <option>Best Selling</option>
                                <option>Price, low to high</option>
                                <option>Price, high to low</option>
                            </select>
                            <select className="px-3 py-1 border border-gray-300 rounded text-[13px] text-gray-600">
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>All</option>
                            </select>
                        </div>
                        <div className="text-[13px] text-gray-600">
                            Showing 1 to {products.length} of {products.length} items
                        </div>
                    </div>

                    <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="product-card group max-w-[380px] mx-auto w-full">
                                <div className="relative overflow-hidden mb-4">
                                    <img
                                        src={Images[product.image]}
                                        alt={product.name}
                                        className="w-full aspect-[3/4] object-cover mb-3"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-[-30px] transition-transform duration-300 flex justify-center">
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="w-[45%] py-3 bg-black text-white text-sm font-medium tracking-wider hover:bg-[#e65540] transition-colors duration-300 rounded-md"
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <a href="#" className="text-[15px] text-gray-600 hover:text-black block text-left">
                                        {product.name}
                                    </a>
                                    <div className="flex gap-2 mt-1">
                                        {product.oldPrice && (
                                            <p className="text-[15px] text-gray-400 line-through">${product.oldPrice.toFixed(2)}</p>
                                        )}
                                        <p className="text-[15px] text-gray-600">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;