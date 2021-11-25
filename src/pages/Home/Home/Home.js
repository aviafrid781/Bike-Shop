import React from 'react';

import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TopProducts from '../TopProducts/TopProducts';
import FAQ from '../FAQ/FAQ'
import Footer from '../../Share/Footer/Footer';
const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <TopProducts></TopProducts>
            <FAQ></FAQ>

            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;