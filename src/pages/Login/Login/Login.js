import { Container, Grid, TextField, Typography, Button, Alert, CircularProgress, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLogindata] = useState({});
    const { user, loginUser, isLoading, signInWithGoogle, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLogindata(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();

    }

    const handleGoogleSignin = () => {
        signInWithGoogle(location, history);

    }

    return (
        <Container sx={{ mt: 8, backgroundColor: 'pink' }} >

            <Grid container spacing={2}>
                <Grid sx={{ mt: 8, backgroundColor: 'snow' }} item xm={12} md={12}>
                    <Typography variant="body1" gutterBottom>
                        Please Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '40%', m: 1 }}
                            id="standard-basic"
                            label="Your  Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '40%', m: 1 }}
                            id="standard-password-input"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />

                        <Button sx={{ width: '20%', m: 1 }} type="submit" variant="contained">Login</Button>

                        <br />  <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register"><Button variant="text">New User?Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}


                        {user?.email && <Alert severity="success">
                            <AlertTitle>User Login Success</AlertTitle>

                        </Alert>
                        }

                        {authError && <Alert severity="error">{authError}</Alert>

                        }

                    </form>
                    <p>.......................................................</p>
                    <Button onClick={handleGoogleSignin} variant="contained">Google Signin</Button>

                </Grid>



            </Grid>
        </Container>
    );
};

export default Login;