import React from 'react';
import { useAuth } from "../../../contexts/AuthContext";
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import HeroBanner from './HeroBanner';
import NetflixOriginals from './NetflixOriginals';

const Browse = () => {



    return (
        <>
            <Header />
            <HeroBanner />
            <NetflixOriginals />
            <Footer />
        </>
    )


}

export default Browse
