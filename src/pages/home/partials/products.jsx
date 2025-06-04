import React, { useState, useEffect } from 'react';
import Images from '../../../constant/images';
import productJson from '../../../json/product.json';
import { useCart } from '../../../context/CartContext';

const filters = [
    { label: 'All', key: 'all' },
    { label: 'Best Seller', key: 'bestSeller' },
    { label: 'Featured', key: 'featured' },
    { label: 'Discounted', key: 'sale' },
];

const ProductsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [productData, setProductData] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const mappedProducts = productJson.map(product => ({
            ...product,
            image: Images[product.image]
        }));
        setProductData(mappedProducts);
    }, []);

    const filteredProducts =
        activeFilter === 'all'
            ? productData
            : productData.filter((product) => product[activeFilter]);

    return (
        <>

            <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-center font-bold text-2xl sm:text-3xl tracking-wide mb-6 mt-0 uppercase">
                    FEATURED PRODUCTS
                </h1>
                <div className="flex justify-center mb-8 overflow-x-auto">
                    <div className="flex gap-3 sm:gap-8 px-2 sm:px-0">
                        {filters.map((filter) => (
                            <a
                                key={filter.key}
                                href="#"
                                onClick={e => { e.preventDefault(); setActiveFilter(filter.key); }}
                                className={`whitespace-nowrap px-2 py-1 text-[13px] sm:text-[17px] font-normal transition-colors duration-200 no-underline ${activeFilter === filter.key ? 'text-black border-b-2 border-black' : 'text-[#222] hover:text-[#e65540]'}`}
                            >
                                {filter.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="relative w-full aspect-square mb-4 overflow-hidden">
                                {product.sale && (
                                    <span className="absolute top-3 left-3 bg-[#e65540] text-white text-[11px] sm:text-[13px] font-medium rounded px-2 sm:px-3 py-0.5 z-10">
                                        Sale
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                            <div className="text-left pl-1">
                                <div className="text-[13px] sm:text-[15px] text-[#222] mb-0.5 line-clamp-1">{product.name}</div>
                                <div className={`text-[13px] sm:text-[15px] font-normal ${product.sale ? 'text-[#e65540]' : 'text-[#222]'}`}>
                                    {product.sale && (
                                        <span className="text-[#888] line-through mr-2">
                                            ${product.oldPrice?.toFixed(2)}
                                        </span>
                                    )}
                                    ${product.price.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default ProductsPage;