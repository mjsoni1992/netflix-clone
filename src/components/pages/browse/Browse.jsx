import React from 'react';
import { useAuth } from "../../../contexts/AuthContext";
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import HeroBanner from './HeroBanner';
import NetflixActionMovies from './NetflixActionMovies';
import NetflixComedyMovies from './NetflixComedyMovies';
import NetflixDocumentoryMovies from './NetflixDocumentoryMovies';
import NetflixOriginals from './NetflixOriginals';
import NetflixRomanticMovies from './NetflixRomanticMovies';
import NetflixTopRated from './NetflixTopRated';
import { useHistory } from "react-router-dom";
const Browse = () => {

    const { currentUser } = useAuth();
    console.log("Curent USER FROM BROWSE", currentUser);

    let history = useHistory();
    if (!currentUser) {
        history.push("/signin");
    }

    return (
        <>
            <Header />
            <HeroBanner />
            <NetflixOriginals />
            <NetflixTopRated />
            <NetflixActionMovies />
            <NetflixComedyMovies />
            <NetflixRomanticMovies />
            <NetflixDocumentoryMovies />
            <Footer />
        </>
    )


}

export default Browse
