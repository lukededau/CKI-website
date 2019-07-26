import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


function NaviBar() {
  return (
    <div className="NaviBar">
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            src="/CKI_Word.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="CKI logo"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NaviBar;
