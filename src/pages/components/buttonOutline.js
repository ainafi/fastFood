import React from 'react';

const ButtonOutline = (props) => {
    return (
        <div className=' '>
             <button className=' border border-[#f78c16]  bg-transparent rounded-lg font-poppins text-[#f78c16] text-[15px] p-1 mx-5 hover:bg-[#f78c16] hover:text-white '>{props.name}</button>
        </div>
    );
}

export default ButtonOutline;
