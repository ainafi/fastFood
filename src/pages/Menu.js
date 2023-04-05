import React from 'react';

import CardMenu from "./components/cardMenu";

const Menu = (props) => {
    return (
        <section id='food'>
        <div className='max-w-screen-lg mx-auto  '>

            <h2 className=' flex items-center mx-7 text-5xl capitalize font-extrabold lg:justify-center' >our top <span className='text-[#f78c16] mx-3'>menu</span> </h2>
            <div className='mx-5 md:grid md:grid-cols-3 '>
                 <CardMenu/>
            </div>

        </div>
       
    </section>
    );
}

export default Menu;
