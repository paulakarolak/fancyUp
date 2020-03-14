import React from 'react';
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import Clothing from '../components/clothing';

const Wardrobe = () => {
    return (
        <>
            <Hero>
                <Banner title="Choose your wardrobe">
                    <Link to="/wardrobe/men">
                        <button className="buttons men">Men</button>
                    </Link>
                    <Link to="/wardrobe/women">
                        <button className="buttons women">Women</button>
                    </Link>
                </Banner>
            </Hero>
            <Clothing />
        </>
    )
}

export default Wardrobe;