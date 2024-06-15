import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
function GetQuery() {
    return new URLSearchParams(useLocation().search);
}
const SearchResult = () => {
    const [searchResponse, setSearchResponse] = useState([]);
    const query: string | null = GetQuery().get('q');
    const Search = async () => {
        try {
            if (query) {
                const response: any = await axios.get("https://www.googleapis.com/youtube/v3/search", {
                    params: {
                        part: "snippet",
                        q: query,
                        type: "video",
                        maxResults: 40,
                        key: process.env.REACT_APP_API_KEY
                    }
                });
                setSearchResponse(response.data.items);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        Search();
    }, [query]);
    if (searchResponse.length === 0) {
        return (
            <Loader />
        )
    }
    return (
        <div className='grid grid-cols-4 gap-x-3 gap-y-3'>
            {searchResponse.map((item: any) => (
                <div key={item.id.videoId}>
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <h2 className='decoration-4'>{item.snippet.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default SearchResult
