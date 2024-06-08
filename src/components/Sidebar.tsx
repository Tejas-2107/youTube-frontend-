import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sidebar w-1/5 px-14 h-auto'>
      <div className='flex flex-col space-y-9 py-5 '>
        <NavLink to='/' className='flex space-x-3'><IoHomeOutline size={25} color='white' />
          <h4 >Home</h4></NavLink>
        <NavLink to='/shorts' className='flex space-x-3'><SiYoutubeshorts size={25} color='white' />
          <h4 >Shorts</h4></NavLink>
        <NavLink to='/subscriptions' className='flex space-x-3'><MdSubscriptions size={25} color='white' />
          <h4>Subscriptions</h4></NavLink>
      </div>
    </div>
  )
}

export default Sidebar
