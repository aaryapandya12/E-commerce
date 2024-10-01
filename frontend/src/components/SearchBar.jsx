import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const{search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
    const[visible,setVisible]=useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false)
        }

    },[location])
  return showSearch && visible?(
    <div className='border-t border-b bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center mt-8'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105' >
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none  bg-transparent text-sm' type='text' placeholder='Search'/>
        <img className='w-4' src={assets.search_icon} alt=''/>
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer transition duration-200 ease-in-out hover:rotate-90 transform' src={assets.cross_icon} alt=''/>

    </div>
  ):null
}

export default SearchBar




