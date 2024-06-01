import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoVideocamSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";



const NavBar = () => {
    return (
        <div className='flex justify-between align-baseline items-center bg-[#212121] opacity-1 sticky h-14 px-14'>
            <div className='left_div flex justify-evenly space-x-4'>
                <GiHamburgerMenu size={25} color='white' />
                <BsYoutube size={25} color='red' />
                <h3 className='text-[#f0fdfa] font-bold'>YouTube</h3>
            </div>
            <div className='center_div flex align-baseline space-x-4'>
            <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" />
                <button><FaSearch size={25} color='white' /></button>
            </div>
            <div className='flex justify-between space-x-4'>
                <IoVideocamSharp size={25} color='white' />
                <IoMdNotifications size={25} color='white' />
            </div>
        </div>
    )
}

export default NavBar
