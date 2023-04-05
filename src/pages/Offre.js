import React from 'react';
import Button from './components/buttonPrimary'
import Hamburger from '../assets/image/hamburger-2.webp'

const Offre = () => {
    return (
        <section id='food' className=''>
             <div className='max-w-screen-lg mx-auto py-[5rem] flex flex-col items-center lg:items-start lg:justify-between md:flex-row  '>
                <div className='text-center md:text-left'>
                    <h2 className='font-extrabold text-4xl '>Today' e special</h2>
                    <h2 className='text-[#fe8a0e] my-4 text-6xl font-extrabold'>suprise for you</h2>
                    <p className=' font-poppins font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste harum quidem aliquid ullam sed minima eius fugit, culpa ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veniam!</p>
                    <div className='flex items-center'>
                        <h2 className='text-[#fe8a0e] my-4 mx-[3rem] text-6xl font-extrabold'>45$</h2>
                        <Button className='' name='Order now'/>

                    </div>

                    
                       
                    
                </div>
                <img className='w-[400px] h-[300px] lg:w-[950px] lg:h-[400px]' src={Hamburger} alt="" />
            </div>
        </section>
    );
}

export default Offre;
