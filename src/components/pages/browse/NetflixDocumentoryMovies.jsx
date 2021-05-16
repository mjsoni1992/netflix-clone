import React, { useState, useEffect } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const NetflixDocumentoryMovies = () => {
    const [topRated, setTopRated] = useState();
    const [videoID, setVidoID] = useState();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`).then((res) => {
            console.log("TOPRATED: ", res.data);
            setTopRated(res.data.results)
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

            if (res != null) {
                var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                var match = res.match(regExp);
                if (match && match[2].length == 11) {
                    //console.log("VIDEO ID ", match[2]);
                    setVidoID(match[2]);
                } else {

                }
            }
        });

    }
    return (
        <div className="netflixOriginals">
            <h4>Netflix Documentory Movies</h4>
            <div className="imgWrapper">
                {topRated && topRated.map((item) =>
                    <img key={item.id} onClick={() => handleClick(item)} src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item.poster_path}`} />
                )}
            </div>

            {videoID ? <div><div className="closeVideo" onClick={() => setVidoID("")}>X</div><YouTube videoId={videoID} opts={opts} /></div> : ""}

        </div>
    )
}

export default NetflixDocumentoryMovies
