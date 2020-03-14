import React from 'react';
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

const Men = () => {
    return (
        <>
            <Hero hero="menHero">
                <Banner title="Collection for men">
                <Link to="/">
                        <button className="buttons return">Back home</button>
                    </Link>
                </Banner>
            </Hero>
        </>
    )
}

export default Men;