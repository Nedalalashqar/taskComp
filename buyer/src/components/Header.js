import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#">Digmon</Navbar.Brand>
                        <Nav className="me-auto">

                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/fav">Favorite</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header