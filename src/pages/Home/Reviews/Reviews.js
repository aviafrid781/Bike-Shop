import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Review from '../Review/Review';
import { Grid, Typography } from '@mui/material';

import { Box } from '@mui/system';

import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bike-shops-server-2wvg.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    Our Customer Reviews
                </Typography>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>


                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}

                            ></Review>)
                        }


                    </Grid>
                </Box>


            </Container >
        </Box >



    );
};

export default Reviews;