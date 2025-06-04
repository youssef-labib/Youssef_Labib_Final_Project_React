import React from 'react';
import HeroSection from './partials/hero';
import CategoriesPage from './partials/categories';
import ProductsPage from './partials/products';
import CountdownSalePage from './partials/countdownSale';
import OurBlog from './partials/ourblog';


const HomePage = () => {

    return (
        <>

            <HeroSection />
            <CategoriesPage />
            <ProductsPage />
            <CountdownSalePage />
            <OurBlog />

        </>
    );
};

export default HomePage;
