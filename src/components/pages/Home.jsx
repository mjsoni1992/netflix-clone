import React from 'react'
import Header from '../header/Header'
import HeroSection from '../HeroSection'
import Footer from "../footer/Footer";
import homeData from '../../datas/homedata.json';
import Faqs from '../Faqs';
const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />

            {homeData.map((item) =>
                <>
                    <section className="featuredSection">
                        <div className="container">
                            <div className={`row align-items-center  flex-${item.direction}`}>
                                <div className="col-md-6">
                                    <h2 className="featuredTitle">{item.title}</h2>
                                    <h4 className="featuredSubTitle">{item.subTitle}</h4>
                                </div>
                                <div className="col-md-6">
                                    <img alt={item.alt} src={item.image} />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
            <Faqs />
            <Footer />

        </div>
    )
}

export default Home
