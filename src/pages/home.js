import React from 'react';
import { Link } from 'react-router-dom';
import wedding from '../images/wedding.svg';
import gala from '../images/gala.svg';
import champagneglass from '../images/glass.svg';
import event from '../images/event.svg';
import hanger from '../images/hanger.svg';
import wardrobe from '../images/wardrobe.svg';
import shop from '../images/shop.svg';
import insurance from '../images/insurance.svg';
import cleaning from '../images/dry.svg';
import choice from '../images/choice.svg';

export default function Home() {
    return (
        <>
            <section className="main-content">
                <div className="img-1 parallax">
                    <div className="h1-background">
                        <h1>Having a special occasion?</h1>
                    </div>
                    <div className="h2-background">
                        <h2>Don't want to buy new clothes?</h2>
                    </div>
                    <div className="buttons">
                        <Link to="/wardrobe/women">
                            <button className="dress-up"></button>
                        </Link>
                        <Link to="/wardrobe/men">
                            <button className="suit-up"></button>
                        </Link>
                    </div>
                </div>
                <div className="occasion parallax">
                    <h2>Occasion</h2>
                    <div className="occasion-list">
                        <ul>
                            <li>
                                <div className="occasion-div">
                                    <h3>Wedding</h3>
                                    <img src={wedding} height="60" alt="wedding-arch" />
                                </div>
                            </li>
                            <li>
                                <div className="occasion-div">
                                    <h3>Gala</h3>
                                    <img src={gala} height="60" alt="red-carpet" />
                                </div>
                            </li>
                            <li>
                                <div className="occasion-div">
                                    <h3>Night out</h3>
                                    <img src={champagneglass} height="60" alt="champagne-className" />
                                </div>
                            </li>
                            <li>
                                <div className="occasion-div">
                                    <h3>Work event</h3>
                                    <img src={event} height="60" alt="calendar-event" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="img-2 parallax">
                    <div className="img-2-headers">
                        <div className="h1-background">
                            <h1>Unsure how
                        <br />it works?</h1>
                        </div>
                        <div className="h2-background">
                            <h2>It's super easy!</h2>
                        </div>
                    </div>
                    <div className="buttons">
                        <Link to="/faq/">
                            <button className="learn-more">Learn more</button>
                        </Link>
                    </div>
                </div>
            </section>
            <div className="info parallax">
                <div className="info-container">
                    <h2>HOW IT WORKS</h2>
                    <div className="info-div-container">
                        <div className="info-div">
                            <img src={wardrobe} alt="" />
                            <h3>Browse our wardrobe</h3>
                            <p>Check out our wardrobe for ladies and gentlemen.</p>
                        </div>
                        <div className="info-div">
                            <img src={hanger} alt="" />
                            <h3>Check availability</h3>
                            <p>Use filters to find available items which you like.</p>
                        </div>
                        <div className="info-div">
                            <img src={shop} alt="" />
                            <h3>Visit our store</h3>
                            <p>Come to our store to rent your selected item!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-3 parallax">
                <div className="h1-background">
                    <h1>Try it out today!</h1>
                </div>
                <div className="buttons">
                    <Link to="/wardrobe/">
                        <button className="join-now">BROWSE NOW</button>
                    </Link>
                </div>
            </div>
            <div className="info parallax small">
                <div className="info-container">
                    <div className="info-div-container">
                        <div className="info-div">
                            <img src={insurance} alt="" />
                            <p>Insurance</p>
                        </div>
                        <div className="info-div">
                            <img src={cleaning} alt="" />
                            <p>Dry cleaning</p>
                        </div>
                        <div className="info-div">
                            <img src={choice} alt="" />
                            <p>Diverse selection</p>
                        </div>
                    </div>
                </div>
            </div>
          </>
    )
}