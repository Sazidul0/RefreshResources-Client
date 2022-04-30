import React from 'react';
import logo from '../../../images/refreshIcon.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header-container'>
            <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='w-25' src={logo} alt="" />
                        <span className='header-title'>Refresh Resources</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav>
                        <Nav className='me-5'>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className='me-5'>

                            <Nav.Link as={Link} to='about'>About</Nav.Link>
                        </Nav>
                        <Nav className='me-5'>
                            {
                                user && <>
                                    <Nav.Link className='me-4' eventKey={2} as={Link} to="/manageitems">
                                        Manage Items
                                    </Nav.Link>
                                    <Nav.Link className='me-4' eventKey={2} as={Link} to="/additem">
                                        Add Item
                                    </Nav.Link>
                                    <Nav.Link className='me-4' eventKey={2} as={Link} to="/myitems">
                                        My Items
                                    </Nav.Link>
                                </>
                            }
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='btn btn-dark' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link eventKey={2} as={Link} to="/login">
                                        Log In
                                    </Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;