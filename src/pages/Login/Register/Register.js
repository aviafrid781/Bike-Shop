import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLogindata] = useState({});

    const { registerUser, isLoading, user, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(field, value, newLoginData);
        setLogindata(newLoginData);

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password did not Match");
            return;
        }

        //console.log(loginData.email, loginData.password)


        registerUser(loginData.email, loginData.password, loginData.name, history)
        //alert('Successfully Registered');

        e.preventDefault();

    }
    return (
        <Container>

            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xm={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Please Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Your  Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Your  Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-password-input"
                            label="Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-password-input"
                            label="Re-type Your Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />

                        <br />

                        <Button sx={{ width: '40%', m: 1 }} type="submit" variant="contained">Register</Button>

                        <br />  <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login"><Button variant="text">Already Registered?Please Login</Button>
                        </NavLink>

                    </form>}
                    {isLoading && <CircularProgress />}


                    {user?.email && <Alert severity="success">
                        <AlertTitle>User Create Success</AlertTitle>
                        <strong>Please LogIn</strong>
                    </Alert>
                    }

                    {authError && <Alert severity="error">{authError}</Alert>

                    }
                </Grid>
                {/* <Grid item xm={12} md={6}>
                    <img style={{ width: '100%' }} src="" alt=""></img>
                </Grid> */}
            </Grid>
        </Container>
    );
};

export default Register;