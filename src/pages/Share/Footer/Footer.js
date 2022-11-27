import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

const footer = {
    backgroundColor: '#3498DB ',
    width: '100%',
    color: 'white',
    marginTop: '20px',
    padding: '2%'
}
const Footer = () => {
    return (
        <Box style={footer} sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={12} md={3} >
                    <div>
                        <h5>Main office:</h5>
                        <p> Address: New York,23/5 road</p>
                        <p>Phone :+9484875873</p>
                        <p>Email: bikeShop@gmail.com</p>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={3} >
                    <div>
                        <h5>About</h5>
                        <p>Company</p>
                        <p>Team</p>
                        <p>Legacy</p>
                    </div>
                </Grid>


                <Grid item xs={12} sm={12} md={3} >
                    <div>
                        <h5>Careers</h5>
                        <p>Job openings</p>
                        <p>Employee success</p>
                        <p>Benefits</p>
                    </div>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Footer;