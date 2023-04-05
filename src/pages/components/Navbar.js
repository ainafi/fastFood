import React,{useState,useEffect} from 'react';
import {Link} from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { navigation } from "../../data";


const Navbar = () => {
    const [nav,setnav]=useState(false)
    const [sticky,setsticky]=useState(false)
    const  handlescroll=()=>{
        if(window.scrollY >0){
            setsticky(true)
        }else{
            setsticky(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handlescroll);
        return () => {
            window.removeEventListener('scroll',handlescroll)
        };
    }, []);
    
    return (
        <div className=' max-w-screen-lg mx-auto bg-gray-50'>
            <nav className= {`${sticky?'fixed top-0 left-0 right-0 bg-white shadow-lg z-10 ' : ''}py-4 px-6   `}>
            <div className='flex justify-between '>
            <div className='my-2 mx-4 py-2'>
                <h1 className='text-2xl font-Shorelines  z-5000'>fast <span className='text-[#f78c16] text-3xl'>food</span></h1>
            </div>

            <ul className='hidden md:flex my-5   '>
               {navigation.map((nav,index)=>(
                 <li className='mx-4'>
                 <Link to={nav.nav}
                 activeClass="active"
                 smooth={true}
                 spy={true}
                 className="font-poppins text-[1+px] cursor-pointer uppercase hover:text-[#f78c16]"
                 key={nav.id}
                 >
                     {nav.nav}
                 </Link>
             </li>
           
               ))}
                
                
            </ul>

            <div className="my-5 lg:hidden md:hidden z-50" onClick={()=>setnav(!nav)}>
                 {nav ? <AiOutlineClose  size={30}  /> : <BiMenuAltRight size={30}/> } 
                
            </div>

        </div>
        {nav && (
             <ul className='flex flex-col justify-center items-center absolute   w-[200px] h-[400px] bg-black'>
           {navigation.map((nav,index)=>(
            <li key={nav.id} className="py-5 uppercase font-poppins text-white hover:text-[#f78c16] cursor-pointer">
            <Link
            to={nav.nav}
            smooth={true}
            spy={true} >{nav.nav}
            </Link>
            </li>
           ))}

        </ul>
        )}
       
            

        </nav>
        </div>
       
    );
}

export default Navbar;
