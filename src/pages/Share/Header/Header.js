import React from 'react';
import { Button, Container, Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">Bike SHOP</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Nav.Link as="/home">Home</Nav.Link> */}
                        < Nav.Link as={Link} to="/home">Home</Nav.Link>
                        < Nav.Link as={Link} to="/moreProducts">Explore</Nav.Link>

                        {user?.email ? <>

                            < Nav.Link as={Link} to="dashboard">Dashboard</Nav.Link>

                            <Button onClick={logout} className='btn btn-danger' variant="outline-success"> Logout</Button>
                        </> :
                            < Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        {
                            user.email && <span className="text-light me-4">welcome {user.displayName} </span>

                        }
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>

    );
};

export default Header;