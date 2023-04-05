import React from 'react';
import Button from '../components/buttonPrimary'
import { TopMenu } from "../../data";
const CardTop = () => {
    return (
        <>
        
            {TopMenu.map((props,index)=>(
                
                     <div key={index.id} className= 'my-8 shadow-xl rounded-xl border-black w-[15rem]  mx-4 hover:scale-125 ease-linear duration-300 '>
                        <img className='w-[17.6rem] h-[150px] rounded-xl' src={props.image} alt="" />
                        <div className='my-3'>
                            <h4 className='text-[20px] font-poppins mx-4 font-bold '>{props.title}</h4>
                            <p className='mx-4'>{props.description}</p>
                            <div className='flex items-center justify-between '>
                                <h5 className='text-[20px] p-4 '><span className='text-[15px]  absolute left-[17px]'>$</span>{props.price}</h5>
                                <Button className="" name='buy now'/>
                            </div>
                        </div>
                    </div>
                
            ))}
            
        </>
   
    );
}

export default CardTop;
