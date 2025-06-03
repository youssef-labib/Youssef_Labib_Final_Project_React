import React, { useState } from 'react';
import Images from '../../../constant/images';

const productData = [
    {
        id: 1,
        image: Images.shopy7,
        name: 'Boxy7 T-Shirt with Roll Sleeve',
        price: 20.0,
        bestSeller: true,
        featured: false,
        sale: false,
    },
    {
        id: 2,
        image: Images.shopy6,
        name: 'Boxy6 T-Shirt with Roll Sleeve',
        price: 20.0,
        bestSeller: true,
        featured: false,
        sale: false,
    },
    {
        id: 3,
        image: Images.shopy5,
        name: 'Boxy5 T-Shirt with Roll Sleeve',
        price: 20.0,
        bestSeller: true,
        featured: false,
        sale: false,
    },
    {
        id: 4,
        image: Images.shopy4,
        name: 'Boxy4 T-Shirt with Roll Sleeve',
        price: 20.0,
        bestSeller: true,
        featured: false,
        sale: false,
    },
    {
        id: 5,
        image: Images.shopy3,
        name: 'Boxy3 T-Shirt with Roll Sleeve',
        price: 20.0,
        oldPrice: 30.0,
        bestSeller: false,
        featured: false,
        sale: true,
    },
    {
        id: 6,
        image: Images.shopy2,
        name: 'Boxy2 T-Shirt with Roll Sleeve',
        price: 20.0,
        bestSeller: false,
        featured: false,
        home: true,
        sale: false,
    },
    {
        id: 7,
        image: Images.item03,
        name: 'Boxy1 T-Shirt with Roll Sleeve',
        price: 20.0,
        bestSeller: false,
        featured: true,
        sale: false,
    },
    {
        id: 8,
        image: Images.shopy8,
        name: 'Boxy T-Shirt with Sleeve Detail',
        price: 20.0,
        bestSeller: false,
        featured: false,
        sale: false,
    },
];

const filters = [
    { label: 'All', key: 'all' },
    { label: 'Best Seller', key: 'bestSeller' },
    { label: 'Featured', key: 'featured' },
    { label: 'Discounted', key: 'sale' },
];

const ProductsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProducts =
        activeFilter === 'all'
            ? productData
            : productData.filter((product) => product[activeFilter]);

    return (
        <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-8">
            <h1 className="text-center font-bold text-3xl tracking-wide mb-6 mt-0 uppercase">
                FEATURED PRODUCTS
            </h1>
            <div className="flex justify-center sm:gap-8 gap-3 mb-10 overflow-x-auto whitespace-nowrap sm:whitespace-normal px-2 sm:px-0">
                {filters.map((filter) => (
                    <a
                        key={filter.key}
                        href="#"
                        onClick={e => { e.preventDefault(); setActiveFilter(filter.key); }}
                        className={`sm:px-2 px-1 sm:text-[17px] text-[13px] font-normal transition-colors duration-200 no-underline ${activeFilter === filter.key ? 'text-black border-b-2 border-black' : 'text-[#222] border-b-0'}`}
                    >
                        {filter.label}
                    </a>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="w-full">
                        <div className="relative w-full aspect-square mb-4">
                            {product.sale && (
                                <span className="absolute top-3 left-3 bg-[#e65540] text-white text-[13px] font-medium rounded px-3 py-0.5 z-10">
                                    Sale
                                </span>
                            )}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover block rounded-none"
                            />
                        </div>
                        <div className="text-left pl-1">
                            <div className="text-[15px] text-[#222] mb-0.5">{product.name}</div>
                            <div className={`text-[15px] font-normal ${product.sale ? 'text-[#e65540]' : 'text-[#222]' }`}>
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
    );
};

export default ProductsPage;