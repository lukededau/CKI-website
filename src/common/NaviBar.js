import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/CKI_Word.jpg';
import emblem from '../images/District_Emblem.png';
import bottomNav from '../images/bottom-nav.PNG';

const bottomNavStyle = {
  boxShadow: "3px 4px 5px grey",
  height: '10px',
  width: '100%'
}

const navStyle = {
  height: "90px",
  width: "100%",
}

const divStyle = {
  marginLeft: "0px",
  height: '20px',
  width: "1100px"
}

const font = {
  fontSize: '18px',
  fontFamily: "Garamond"
}

function NaviBar() {
  return (
    <div>
      <Container>
        <Navbar style={navStyle} expand="sm">
          <Navbar.Brand href="/">
            <img
              alt="CKI_LOGO"
              src={logo}
              width="225"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={font} href="/">Home</Nav.Link>
              <Nav.Link style={font} href="/about">About</Nav.Link>
              <Nav.Link style={font} href="/events">Events</Nav.Link>
              <Nav.Link style={font} href="/join-us">Join Us</Nav.Link>
              {/* <Nav.Link style={font} href="/past-events">Past Events</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="http://www.cnhcirclek.org">
                <img
                  alt="CNH_EMBLEM"
                  src={emblem}
                  width="80"
                  height="80"
                  className="d-inline-block align-top"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={divStyle}>
          <img
            src={bottomNav}
            style={bottomNavStyle}
            alt="NAVBAR DIVIDER"
          />
        </div>
      </Container>
    </div>
  );
}

export default NaviBar;
