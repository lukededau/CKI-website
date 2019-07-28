import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/CKI_Word.jpg';

function NaviBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="70"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/join-us">Join Us</Nav.Link>
          <Nav.Link href="/past-events">Past Events</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NaviBar;
