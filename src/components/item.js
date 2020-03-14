import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/women/pink-dress-woman.jpg';
import PropTypes from 'prop-types';

export default function Item({ cloth }) {
    const { name, phrase, images, price } = cloth;

    return (
        <article className="item">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="image" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per day</p>
                </div>
                <Link to={`/wardrobe/${phrase}`} className="item-link">See more</Link>
            </div>
            <p className="item-info">{name}</p>
        </article>
    )
}

Item.propTypes = {
    cloth: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phrase: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}
