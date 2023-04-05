import React from 'react';

const buttonPrimary = (props) => {
    return (
        <div className=' '>
             <button className=' border bg-[#f78c16] rounded-lg font-poppins text-white text-[15px] p-3 mx-5 hover:bg-transparent hover:text-[#f78c16] hover:border-[#f78c16] '>{props.name}</button>
        </div>
    );
}

export default buttonPrimary;
