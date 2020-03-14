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
                    <Link to="/">
                        <button className="buttons return">Back home</button>
                    </Link>
                </Banner>
            </Hero>
            <WardrobeContainer />
        </>
    )
}

export default Women;