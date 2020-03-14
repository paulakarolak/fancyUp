import React from 'react';
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <Hero>
        <Banner title="404" subtitle="page not found">
            <Link to="/">
                <button className="buttons return">Back home</button>
            </Link>
        </Banner>
    </Hero>
    )
}