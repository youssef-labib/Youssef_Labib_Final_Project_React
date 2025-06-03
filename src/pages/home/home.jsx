import React from 'react';
import HeroSection from './partials/hero';
import CategoriesPage from './partials/categories';
import ProductsPage from './partials/products';
import CountdownSalePage from './partials/countdownSale';
const HomePage = () => {

    return (
        <>

            <HeroSection />
            <CategoriesPage />
            <ProductsPage />
            <CountdownSalePage />

        </>
    );
};

export default HomePage;
