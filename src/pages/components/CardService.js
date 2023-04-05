import React from 'react';
import { TbGasStation } from 'react-icons/tb';
import { Service } from "../../data";

const CardService = () => {
    return (
        <>
            
            {
            Service.map((props,index)=>(
                
                    <div key={index.id} className='my-8 shadow-xl rounded-xl border-black w-[100%]  mx-4 hover:scale-125  duration-300 ease-in'>
                        <div className='py-4 mx-4 text-center'>
                        <div className='flex items-center justify-center'>
                            {props.icon}
                        </div>
                               
                                <h4 className='py-5 mx-2 font-poppins font-bold text-[#ff8400]'>{props.title} </h4>
                                <p>{props.description}</p>
                        </div>
                    </div>
                
                ))
            }
                    
                
            
        </>
           
        
    );
}

export default CardService;
