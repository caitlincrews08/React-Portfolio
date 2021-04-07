import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import "./style.css";

function NavComponent() {

  return (
      <nav>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="home" >Caitlin Crews</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="about">About</Nav.Link>
                      <Nav.Link href="contact">Contact</Nav.Link>
                      <Nav.Link href="portfolio">Portfolio</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      </nav>
  );
};

export default NavComponent;