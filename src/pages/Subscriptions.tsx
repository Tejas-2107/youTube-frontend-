import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Subscriptions = () => {
    const [subscriptionData, setSubscriptionData] = useState([]);
    const fetchSubscriptionData = async () => {
        try {
            const subscriptionListResponse = await axios.get("https://www.googleapis.com/youtube/v3/subscriptions", {
                params: {
                    part: "snippet",
                    channelId: "UCNmEUFbGvkf4p2GCUDo5t5g",
                    maxResults: 50,
                    key: process.env.REACT_APP_API_KEY
                }
            });
            console.log(subscriptionListResponse.data)
            setSubscriptionData(subscriptionListResponse.data.items);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchSubscriptionData();
    }, [])

    return (
        <div className='subscription'>
            <h1 className='text-gray-700'>your channel subscriptions</h1>
            {subscriptionData.length > 0 ? subscriptionData.map((channel: any) => {
                return <>
                    <img src={channel.snippet.thumbnails.medium.url} alt="" className='rounded-full object-cover' />
                </>
            }) : "Loading....."}
        </div>
    )
}

export default Subscriptions
