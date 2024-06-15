import React, { useEffect, useState } from 'react'
import useLogin from '../hooks/useLogin'
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Loader from '../components/Loader';

const Home = ({ children }: any) => {
  useLogin();
  const [popularVideos, setPopularViodes] = useState([]);
  const GetMostPopularVideos = async () => {
    try {
      const response = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "IN",
          key: process.env.REACT_APP_API_KEY,
          maxResults: 52
        }
      });
      setPopularViodes(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!children) {
      GetMostPopularVideos();
    }
  }, []);

  return (
    <div className='home'>
      <NavBar />
      <div className='mainflex flex'>
        <div className='sidebar w-1/5 flex-none'>
          <Sidebar />
        </div>
        <div className='children w-4/5 flex-1 m-4'>
          {children ? children : <div className='grid grid-cols-4 gap-x-3 gap-y-3'>
            {popularVideos.length === 0 ? <Loader /> : popularVideos.map((item: any) => (
              <div key={item.snippet.title}>
                <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                <h2 className='decoration-4'>{item.snippet.title}</h2>
              </div>
            ))}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Home
