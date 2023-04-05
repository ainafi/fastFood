import React from 'react';
import Livreur from '../assets/image/livreur.jpg'
import Button from './components/buttonPrimary'
import ButtonOutline from './components/buttonOutline'

const Home = () => {
    return (
        <>
        {/* <Navbar/> */}
          <section id='home' className='bg-white  w-full  ' >
            <div className='max-w-screen-lg mx-auto py-[5rem] flex flex-col items-center lg:items-start lg:justify-between md:flex-row  '>
              <div className=''> 
                <h3 className='text-black text-5xl capitalize mx-7 font-extrabold lg:text-7xl '> are you 
                  <br />
                  <span className='text-7xl lg:text-[6.6rem] text-[#f78c16]'>hungry ?</span>  
                </h3>
                <p className='font-poppins mx-6 py-5'>
                  you can order here very easy and simple
                </p>
                <div className='flex'>
                 <Button name="order now"/>
                 <ButtonOutline name="more menu"/>
                  
                </div>
              </div>
           
             <img className='w-[300px] lg:w-[500px] lg:my-[-104px] rounded-full ' src={Livreur} alt="" />
              
            </div>
          </section>
        </>
   
        
    );
}

export default Home;
