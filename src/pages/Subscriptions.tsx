import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';

const Subscriptions = () => {
    const [subscriptionData, setSubscriptionData] = useState([]);
    const fetchSubscriptionData = async () => {
        try {
            const subscriptionListResponse = await axios.get("https://www.googleapis.com/youtube/v3/subscriptions", {
                params: {
                    part: "snippet",
                    maxResults: 50,
                    mine: true
                },
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("google_access_token")}`
                }
            });
            setSubscriptionData(subscriptionListResponse.data.items);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchSubscriptionData();
    }, []);

    return (
        <div className='subscription flex flex-col justify-center items-center min-h-screen gap-y-5'>
            {subscriptionData.length > 0 ? subscriptionData.map((channel: any) => (
                <div key={channel.id} className='flex justify-start items-center w-4/5 gap-x-5'>
                    <img src={channel.snippet.thumbnails.medium.url} alt="" className='rounded-full object-cover' />
                    <ul>
                        <li><h2 className='text-orange-300'>{channel.snippet.title}</h2>
                            <h4 className='text-white'>{channel.snippet.description ? channel.snippet.description : "Not Available"}</h4></li>
                    </ul>
                </div>
            )) : <Loader />}
        </div>
    )
}

export default Subscriptions
