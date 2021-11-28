import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Nav className="justify-content-center" style={{ flex: 1, padding: '15px' }}>
                    <Nav.Item>
                        <Link to="/" className="navbar-brand" />
                        <img
                            className="d-block w-100"
                            src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                            alt="logo"
                        />
                    </Nav.Item>
                </Nav>
            </Navbar>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="justify-content-center" style={{ flex: 1, padding: '15px' }}>
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/ViewProduct">View Products</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/ViewCategories">View Categories</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/SaveProduct">Add Product</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/SaveCategory">Add Category</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;