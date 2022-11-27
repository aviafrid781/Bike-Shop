import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Review = ({ review }) => {
    const { name, _id, rating, description, reviewProduct } = review;
      return (
        <Grid item xs={4} sm={4} md={4}>

            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h7" component="div">
                        {reviewProduct}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>
                </CardContent>

            </Card>

        </Grid >
    );
};

export default Review;