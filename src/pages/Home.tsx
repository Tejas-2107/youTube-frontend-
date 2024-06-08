import React from 'react'
import useLogin from '../hooks/useLogin'
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  useLogin();
  return (
    <div className='home'>
      <NavBar />
      <Sidebar />
    </div>
  )
}

export default Home
