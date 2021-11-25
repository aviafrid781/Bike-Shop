import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Typography from '@mui/material/Typography';
import TopProduct from '../TopProduct/TopProduct';


const TopProducts = () => {

    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-bastion-71123.herokuapp.com/topProducts')
            .then(res => res.json())
            .then(data => setTopProducts(data));

    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    Our Top Bikes
                </Typography>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            topProducts.map(topProduct => <TopProduct
                                key={topProduct._id}
                                topProduct={topProduct}

                            ></TopProduct>





                            )
                        }


                    </Grid>
                </Box>


            </Container>
        </Box>


    );
};

export default TopProducts;