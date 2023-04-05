import React from 'react';
import { Info,Link,MenuFooter } from '../data';
const Footer = () => {
    return (
        <footer className='max-w-screen-lg mx-auto'>
           
        <div className='grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between'>
            <div className='mx-5'>
                <h5 className='text-[#ff8400] text-[20px]'>information </h5>
                <ul>
                  {
                    Info.map((info,index)=>(
                        <li className='capitalize' key={info.id}>{info.title}</li>
                    ))
                  }
                </ul>
            </div>
            <div>
                <h5 className='text-[#ff8400] text-[20px]'>Helpful Links </h5>
                <ul>
                  {
                    Link.map((info,index)=>(
                        <li className='capitalize' key={info.id}>{info.title}</li>
                    ))
                  }
                </ul>
            </div>
            <div className=''> 
                <h5 className='text-[#ff8400] text-[20px]'>information </h5>
                <ul className=''>
                  {
                    MenuFooter.map((info,index)=>(
                        <li className='capitalize' key={info.id}>{info.title}</li>
                    ))
                  }
                </ul>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
