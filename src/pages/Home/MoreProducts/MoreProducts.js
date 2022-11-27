
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MoreProduct from '../MoreProduct/MoreProduct';

const MoreProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://bike-shops-server-2wvg.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    Our Products
                </Typography>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <MoreProduct



                                key={product._id}
                                product={product}>

                            </MoreProduct>







                            )
                        }


                    </Grid>
                </Box>


            </Container>
        </Box>

    );
};

export default MoreProducts;
