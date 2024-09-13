import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-container justify-content-between py-0">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo_img" src="\logo.png" alt="logo"  />
        </Navbar.Brand>

        <Navbar.Toggle className="navbar-toggler" aria-controls="navbarResponsive" />

        <Navbar.Collapse id="navbarResponsive">
        <Nav className="ms-auto fs-5 gap-3">
          <Nav.Link className="nav-link text-end" href="#home">
            HOME
          </Nav.Link>
          <Nav.Link className="nav-link text-end" href="#about">
            ABOUT US
          </Nav.Link>
          <Nav.Link className="nav-link text-end" href="#shop">
            SHOP
          </Nav.Link>
          <Nav.Link className="nav-link text-end" href="#contact">
            CONTACT
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
