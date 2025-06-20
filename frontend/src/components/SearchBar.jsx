import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import {assets} from '../assets/assets';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (location.pathname.includes('/collection')) {
            setVisible(true);
        }else {
            setVisible(false);
        }
    }, [location]);
    // const setSearch = (e) => {


    return showSearch && visible ? (
        <div className='border-t border-gray-300 text-center'>
            <div className="inline-flex items-center border border-gray-300 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input type="text" placeholder='Search for products...' className='flex-1 outline-none bg-inherit text-sm text-gray-700' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <img className='w-4' src={assets.search_icon} alt="search_icon" />
            </div>
            <img className='cursor-pointer inline w-3' src={assets.cross_icon} alt="" onClick={()=>setShowSearch(false)} />
        </div>
    ) : null;
}

export default SearchBar