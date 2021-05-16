import React, { useState, useEffect } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import { Scrollbars } from 'react-custom-scrollbars';
const NetflixOriginals = () => {
    const [originals, setOriginals] = useState();
    const [videoID, setVidoID] = useState();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213&language=en-US`).then((res) => {
            console.log("NetflixOriginals: ", res.data);
            setOriginals(res.data.results)
        });
    }, []);

    const opts = {
        height: "450",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }
    const handleClick = (item) => {
        movieTrailer(item.original_title).then((res) => {
            console.log("response : ", res);
            var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = res.match(regExp);
            if (match && match[2].length == 11) {
                //console.log("VIDEO ID ", match[2]);
                setVidoID(match[2]);
            } else {

            }
        });

    }
    return (
        <div className="netflixOriginals">
            <h4>Netflix Originals</h4>
            <div className="imgWrapper">

                {originals && originals.map((item) =>
                    <img key={item.id} src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item.poster_path}`} />
                )}

            </div>

            {videoID ? <div><div className="closeVideo" onClick={() => setVidoID("")}>X</div><YouTube videoId={videoID} opts={opts} /></div> : ""}

        </div>
    )
}

export default NetflixOriginals
