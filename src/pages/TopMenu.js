import React from 'react';
import CardTop from './components/cardTop';

const TopMenu = (props) => {
    return (
        <section id='food'>
            <div className='max-w-screen-lg mx-auto  '>

                <h2 className=' flex items-center mx-7 text-5xl capitalize font-extrabold' >our top <span className='text-[#f78c16] mx-3'>menu</span> </h2>
                <div className='lg:grid grid-cols-3 mx-[2rem]  md:flex md:flex-row md:items-center '>
                     <CardTop/>
                </div>
  
            </div>
           
        </section>
    );
}

export default TopMenu;
