
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopProduct = ({ topProduct }) => {
    const { name, _id, description, img, price, model } = topProduct;
    return (
        <Grid item xs={4} sm={4} md={4}>

            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', margin: '0 auto' }}
                        image={img}
                        alt="Paella dish"
                    />

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h7" component="div">
                        Model : {model}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Price : ${price}
                    </Typography>


                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Link to={`/booking/${_id}`}>
                        <Button variant="warning">Perchase</Button>{' '}

                    </Link>


                </CardContent>

            </Card>

        </Grid >
    );
};

export default TopProduct;