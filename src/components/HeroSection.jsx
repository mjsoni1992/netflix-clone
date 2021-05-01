import React from 'react'

const HeroSection = () => {
    return (
        <section className="heroSection">
            <div className="container">
                <div className="contentWrapper">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <form className="signupFormHeroSection">
                        <input type="text" placeholder="Email Address" />
                        <input type="submit" value="Get Started" />
                    </form>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
