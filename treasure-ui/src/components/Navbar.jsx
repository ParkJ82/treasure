import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar expand="md" style={{ backgroundColor: "#0D1117" }} variant="dark" className="py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center fw-bold">
          <span className="text-primary fs-3 me-2">T</span>
          Treasure
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu and buttons */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          {/* Navigation links */}
          <Nav className="me-auto ms-4">
            <Nav.Link href="#" className="text-light">Products ▾</Nav.Link>
            <Nav.Link href="#" className="text-light">Company ▾</Nav.Link>
            <Nav.Link href="#" className="text-light">Resources ▾</Nav.Link>
          </Nav>

          {/* Buttons - force horizontal layout with nowrap */}
          <div className="d-flex flex-nowrap align-items-center gap-2 mt-3 mt-md-0">
            <Button variant="warning" className="fw-semibold px-3">Login</Button>
            <Button variant="primary" className="fw-semibold px-3">Join Treasure →</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
