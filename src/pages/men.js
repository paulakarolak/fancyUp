import React from 'react';
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

const Men = () => {
    return (
        <>
            <Hero hero="menHero">
                <Banner title="Collection for men">
                <Link to="/wardrobe">
                        <button className="back-wardrobe">Back to wardrobe</button>
                    </Link>
                </Banner>
            </Hero>
            <div className="error-men">
                <h3>Sorry, currently no items available.</h3>
            </div>
        </>
    )
}

export default Men;