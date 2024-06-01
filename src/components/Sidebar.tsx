import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sidebar w-1/5 px-14'>
      <div className='flex flex-col space-y-4 py-5 '>
        <div className='flex space-x-3'>
          <IoHomeOutline size={25} color='white'  />
          <h4 >Home</h4>
        </div>
        <div className='flex space-x-3'>
          <SiYoutubeshorts size={25} color='white' />
          <h4>Shorts</h4>
        </div>
        <div className='flex space-x-3'>
          <MdSubscriptions size={25} color='white' />
          <h4>Subscriptions</h4>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
