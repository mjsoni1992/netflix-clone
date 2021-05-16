import React, { useState, useEffect } from 'react'
import axios from 'axios';
require('dotenv').config();
const HeroBanner = () => {

    const [heroBannerData, setHeroBannerData] = useState();

    const getRandomData = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return randomIndex;
    }
    useEffect(() => {



        axios.get(`${process.env.REACT_APP_API_BASE_URL}/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`).then((res) => {
            console.log(res.data.results);
            //console.log("Length is : ", res.data.results.length);
            setHeroBannerData(res.data.results[`${Math.floor(Math.random() * res.data.results.length)}`]);

        }, (error) => {
            console.log(error);

        });
    }, []);
    return (

        <div className="heroBanner" style={{
            backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL}${heroBannerData && heroBannerData.poster_path})`
        }}>
            <div className="container">
                <div className="wrapper">
                    <h1>{heroBannerData && heroBannerData.title}</h1>
                    <p className="mb-5 mt-4">{heroBannerData && heroBannerData.overview}</p>
                    <button>Play</button>
                    <button>My List</button>
                </div>

            </div>
        </div>
    )
}

export default HeroBanner
