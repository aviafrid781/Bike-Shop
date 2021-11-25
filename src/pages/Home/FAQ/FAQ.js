import React, { useEffect, useState } from 'react';
import Faq from "react-faq-component";
import './FAQ.css'
const data = {
    title: "FAQ of Our Company",
    rows: [
        {
            title: "Do you do bike fitting? ",
            content: `We provide basic fit services but we do not have a full-service fit studio yet. During a basic fit session, one of our mechanics will watch you ride on an indoor trainer, while that mechanic makes adjustments or substitutions as needed. `,
        },
        {
            title: "Do you offer repair classes?",
            content: " Yes. See our Event Calendar for more details",
        },
        {
            title: "Do you offer bike riding lessons?",
            content: `Yes. We offer bike riding lessons to adults and children. The cost is $75 for a one-on-one, hour long lesson, with a bicycle and helmet provided. If you never learned how to ride a bike, now is the time!`,
        },
        {
            title: "Do you offer bike storage?",
            content: "No.",
        },
        {
            title: "Do you fix recumbent bikes?",


            content: "Yes",
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    margin: "10px"

};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const FAQ = () => {



    return (
        <div className="fgq-container">
            <div className="fgq">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
            <div>
                <img style={{ width: '100%' }} src="https://www.globalsuzuki.com/motorcycle/img/products/all/gsx-r1000r.jpg" alt="" />
                <p className="heading-name">Upcomming Bike</p>

            </div>

        </div>
    );
};

export default FAQ;