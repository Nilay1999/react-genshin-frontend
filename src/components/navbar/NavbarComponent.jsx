import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { Link } from 'react-router-dom';
import '../common.css';
const img_icon = '/images/paimon.jpg';

function NavbarComponent() {
    return (
        <Navbar
            collapseOnSelect
            expand="md"
            className="mb-3 p-2"
            style={{ borderRadius: '10px', backgroundColor: '#282C36' }}>
            <Navbar.Brand
                as={Link}
                to="/"
                className="font-weight-bold"
                style={{
                    marginLeft: '10px',
                    color: '#6291e9',
                    fontSize: '25px',
                    background: 'rgb(40, 44, 54)',
                }}>
                <img
                    src={img_icon}
                    height="40"
                    style={{
                        color: '#6291e9',
                        marginRight: '20px',
                    }}
                    alt="navbar"
                />
                Genshin Guide
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-left">
                <Nav activeKey={window.location.pathname} className="mr-auto">
                    <LinkContainer to="/characters">
                        <Nav.Link className="nav-link" activeClassName="active">
                            Character
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/weapons">
                        <Nav.Link className="nav-link" activeClassName="active">
                            Weapons
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/enemies">
                        <Nav.Link className="nav-link" activeClassName="active">
                            Enemies
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
