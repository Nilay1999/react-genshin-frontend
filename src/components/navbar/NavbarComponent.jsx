import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { Link } from "react-router-dom";
import { Anemo } from "genshin-icon";

function NavbarComponent() {
    return (
        <Navbar
            collapseOnSelect
            bg="light"
            expand="md"
            className="mb-3 p-2"
            style={{ borderRadius: "10px" }}
        >
            <Navbar.Brand
                as={Link}
                to="/"
                className="font-weight-bold text-muted"
                style={{ marginLeft: "10px" }}
            >
                <Anemo
                    size="25"
                    color="black"
                    style={{ marginRight: "10px" }}
                />
                Genshin Guide
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav activeKey={window.location.pathname}>
                    <LinkContainer to="/characters">
                        <Nav.Link>Character</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/weapons">
                        <Nav.Link>Weapons</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/enemies">
                        <Nav.Link>Enemies</Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer to="/signup">
                        <Nav.Link>Signup</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
