import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero-image">
            <div class="hero-text">
                <h1>Welcome To <span className="site_name">Bike Shop</span></h1>
                <p>Your Dreams, Near of your hands</p>
            </div>
        </div>
    );
};

export default Banner;