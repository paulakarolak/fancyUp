import React from 'react';
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import WardrobeContainer from '../components/wardrobeContainer';

const Women = () => {
    return (
        <>
            <Hero hero="womenHero">
                <Banner title="Collection for women">
                    <Link to="/wardrobe">
                        <button className="back-wardrobe">Back to wardrobe</button>
                    </Link>
                </Banner>
            </Hero>
            <WardrobeContainer />
        </>
    )
}

export default Women;