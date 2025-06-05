import React from 'react';
import HeroSection from './partials/hero';
import CategoriesPage from './partials/categories';
import ProductsPage from './partials/products';
import CountdownSalePage from './partials/countdownSale';
import OurBlog from './partials/ourBlog';
import Services from './partials/services';

const HomePage = () => {

    return (
        <>

            <HeroSection />
            <CategoriesPage />
            <ProductsPage />
            <CountdownSalePage />
            <OurBlog />
            <Services />

        </>
    );
};

export default HomePage;
