import React from 'react';
import Image from '../assets/image/about.png'
import Button from './components/buttonPrimary'
const About = () => {
    return (
    <section id='about'>
        <div className='max-w-screen-lg mx-auto md:flex md:flex-row '>
            <div className='flex items-center justify-center'>
                <img src={Image} alt="about-image" className='w-[50%] lg:w-[50%]' />
            </div>
            <div className='text-center py-5 md:text-left'>
                <h2 className='text-5xl capitalize font-extrabold '>About <span className='text-[#ff8400]'>us</span> </h2>
                <p className='text-left capitalize mx-4 py-3'>
                    we are company engaged in the field food <br  />  <br />
                    we are company engaged in the field service with a very wide range throughout indonesia . 
                    we are company engaged in the field service with a very wide range throughout indonesia .
                </p>
            <div className='py-4'>
                <Button name="read more"/>
            </div>
                
                
            </div>
            
        </div>  
     </section>
       
    );
}

export default About;
