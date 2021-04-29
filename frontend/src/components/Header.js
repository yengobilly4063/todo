import React from 'react'
import {Container, Navbar, Nav} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="header_nav">
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link>TODO</Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
