import React, { Component } from 'react';
import defaultBcg from '../images/women/pink-dress-woman.jpg';
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import { ItemContext } from '../context';
import StyledHero from '../components/styledhero';

export default class Cloth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phrase: this.props.match.params.phrase,
            defaultBcg
        }
    }
    static contextType = ItemContext;

    // componentDidMount() {}
    render() {
        const { getCloth } = this.context;
        const cloth = getCloth(this.state.phrase)
        if (!cloth) {
            return <div className="error">
                <h3>No item found.</h3>
                <Link to='/wardrobe' className="back-wardrobe">Back to wardrobe</Link>
            </div>
        }
        const { name,
            size, 
            price,
            print,
            color,
            images
        } = cloth
        return (
            <>
                <StyledHero>
                    <Banner title={name}>
                        <Link to='/wardrobe'>
                        <button className="back-wardrobe">Back to wardrobe</button></Link>
                    </Banner>
                </StyledHero>
                <section className="single-item">
                    <div className="single-item-images">
                        {images.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-item-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <h6>print: {print}</h6>
                            <h6>color: {color}</h6>
                        </article>
                        <article className="infos">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : {size}</h6>
                        </article>
                    </div>
                </section>
            </>
        )
    }
}
