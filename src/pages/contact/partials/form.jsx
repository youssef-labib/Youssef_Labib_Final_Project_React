import React from 'react';
import Images from '../../../constant/images'

const FormPage = () => {
    return (
        <>

            <div className="top-title flex justify-center h-60 items-center" style={{ backgroundImage: `url(${Images.topweb})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-white text-[40px] font-[1000]'>CONTACT</h1>
            </div>

            <div className="contact-f">
                <div className="left-f">

                </div>

                <div className="right-f"></div>
            </div>

        </>
    );
};

export default FormPage;