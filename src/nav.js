import React from 'react';
import { NavLink } from "react-router-dom"

import {Navbar,Nav } from 'react-bootstrap'

export default class Navigat extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                            <NavLink exact activeClassName="active" to="/about">About</NavLink>
                            <NavLink exact activeClassName="active" to="/gallery">Gallery</NavLink>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

                
            </>
        )
    }
}