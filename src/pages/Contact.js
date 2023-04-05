import React from 'react';
import Button from './components/buttonPrimary'
const Contact = () => {
    return (
    <section id="Contact">
        <div className='max-w-screen-lg mx-auto'>
            <div className='text-center'>
            <h2 className='text-5xl capitalize font-extrabold '>Contact <span className='text-[#ff8400]'>us</span> </h2>
            <p className='py-4'>
            we are a company engaged in the field food service with a very wide range throughout indonesia
            </p>
            

            </div>
            <div className='md:flex md:flex-row  md:items-center  md:justify-around '>
                <div className='text-center'>
                    <h3 className='text-4xl md:text-[50px]
                    '>let's talk</h3>
                   <p className='text-[20px] capitalize'>ask us something</p>
                </div>
                <form className=''  action="">
                    <label className='uppercase ' htmlFor="">name</label> <br />
                    <input type="text" className='border  w-full border-b-1  border-t-0 py-2' placeholder='name' /> <br />
                    <label className='uppercase' htmlFor="">email</label> <br />
                    <input type="text" className='border border-b-1  border-t-0 py-2 w-full' placeholder='mail' /> <br />
                    <label className='uppercase' htmlFor="">message</label> <br />
                    <input type="text" className='border-b-1  border-t-0 py-2 w-full lg:w-5' placeholder='name' /> <br />
                <div className='py-4 flex items-center justify-center'>
                    <Button name="read more"/>
                </div>
                    
                </form>
            </div>

        </div>
    </section>
    );
}

export default Contact;
