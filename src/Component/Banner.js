import React, { useState, useEffect } from 'react'
import requests from '../requests'
import axios from '../axios';
import './CSS/banner.css';

const Banner = () => {
    const [movie, setMovie] = useState('');
    const base_url = 'https://image.tmdb.org/t/p/original';
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchNetflixOriginals);
            const data = response.data.results;
            setMovie(data[Math.floor(Math.random() * data.length)]);
        }
        fetchData();
    }, [])
    const discription = movie.overview;
    let isOverChar = false;
    let newDiscription;
    if (discription) {
        if (discription.length > 200) {
            isOverChar = true;
            newDiscription = discription.padEnd(199, "...").slice(0, 282);
        }
    }

    return (
        <div className="banner" style={{
            background: `url(${base_url}${movie.backdrop_path})`
        }}>
            <div className="banner_contant">
                <div className="banner_tittle"><h1 className="banner_title">{movie.name || movie.original_name}</h1></div>
                <div banner_button>
                    <button type="button" className="btn btn-outline-primary mx-2 my-3">Primary</button>
                    <button type="button" className="btn btn-outline-primary my-3">Primary</button>
                </div>
                <div className={isOverChar ? "newDiscription" : "banner_discription"}><p>{isOverChar ? newDiscription : discription}</p></div>
            </div>
            <div className="blurness" />
        </div>
    )
}

export default Banner
