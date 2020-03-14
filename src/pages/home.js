import React from 'react';
import { Link } from 'react-router-dom';
import wedding from '../images/wedding-arch.png';
import redcarpet from '../images/red-carpet.png';
import champagneglass from '../images/champagne-glass.png';
import calendar from '../images/calendar.png';
import hanger from '../images/hanger.png';
import location from '../images/location.png';
import shipment from '../images/package.png';
import insurance from '../images/insurance.png';
import cleaning from '../images/drycleaning.png';
import delivery from '../images/shipped.png';

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
                                    <img src={redcarpet} height="60" alt="red-carpet" />
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
                                    <img src={calendar} height="60" alt="calendar-event" />
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
                            <img src={hanger} alt="" />
                            <h3>Choose your item</h3>
                            <p>Use filters to find available items which you like.</p>
                        </div>
                        <div className="info-div">
                            <img src={location} alt="" />
                            <h3>Provide address</h3>
                            <p>Give us your address where we can ship your order.</p>
                        </div>
                        <div className="info-div">
                            <img src={shipment} alt="" />
                            <h3>Unlock shipment</h3>
                            <p>Pay for rental - if you do not like the item and want to return it, you will get your money
                            back!
                    </p>
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
                        <button className="join-now">JOIN NOW</button>
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
                            <img src={delivery} alt="" />
                            <p>Shipping both ways</p>
                        </div>
                    </div>
                </div>
            </div>
          </>
    )
}