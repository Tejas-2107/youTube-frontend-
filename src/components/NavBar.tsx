import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavBar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState<string>("");
    const [userName, setUsername] = useState<string | null>(null);
    const [imageUrl, setUrl] = useState<string>("");
    const handleSearch = async () => {
        if (query) {
            navigate(`/search?q=${query}`);
        }
    }
    const GetProfile = async () => {
        try {
            const res = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${sessionStorage.getItem('google_access_token')}`);
            setUrl(res.data.picture);
            setUsername(res.data.name)
        } catch (error) {
            console.log(error);
            navigate("/auth/google");
        }
    }
    useEffect(() => {
        GetProfile();
    }, [])

    return (
        <div className='flex justify-between align-baseline items-center bg-[#212121] opacity-1 sticky top-0 h-14 px-14 position-f'>
            <div className='left_div flex justify-evenly space-x-4'>
                <NavLink className='flex gap-x-2' to='/'><GiHamburgerMenu size={25} color='white' />
                    <BsYoutube size={25} color='red' />
                    <h3 className='text-[#f0fdfa] font-bold'>YouTube</h3>
                </NavLink>
            </div>
            <div className='center_div flex align-baseline space-x-4'>
                <input value={query} onChange={(e: any) => setQuery(e.target.value)} type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" />
                <button onClick={handleSearch}><FaSearch size={25} color='white' /></button>
            </div>
            <div className='flex justify-between space-x-4 items-center'>
                <img src={imageUrl} className='w-10' alt="profile-picture" />
                <h2>{userName}</h2>
            </div>
        </div>
    )
}

export default NavBar
