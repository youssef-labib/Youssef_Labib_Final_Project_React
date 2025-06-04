import React from 'react';
import Images from '../../../constant/images'

const Products = () => {
    return (
        <>

            <div className="top-title flex justify-center h-60 items-center" style={{ backgroundImage: `url(${Images.banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-white text-[40px] font-[1000]'>PRODUCTS</h1>
            </div>

            

        </>
    );
};

export default Products;