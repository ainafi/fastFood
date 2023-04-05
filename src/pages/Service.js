import React from 'react';
import CardService from './components/CardService';

const Service = () => {
    return (
        <section id='service'>
            <div className='max-w-screen-lg mx-auto  '>
                <h2 className=' text-center py-5  mx-7 text-5xl capitalize font-extrabold lg:justify-center' >our <span className='text-[#f78c16] mx-3'>service</span> </h2>
                <div className='lg:flex mx-5'>
                    <CardService/>
                </div>
                
            </div>
        </section>
    );
}

export default Service;
