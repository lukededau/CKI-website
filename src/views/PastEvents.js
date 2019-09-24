import React from 'react';
import NaviBar from '../common/NaviBar';
import Footer from '../common/Footer';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';

const space = {
  height: "50px",
  width: "100%",
}

const divHead = {
  height: "300px",
  width: "100%",
  backgroundColor: "#F2E18B"
};

const divBlock = {
  height: "700px",
  width: "100%",
  paddingTop: "50px",
  backgroundColor: "#003D79"
}

const jumboTitleStyle = {
  paddingTop: "8px",
  margin: "20px 600px 10px 150px",
  height: "10px",
  width: "290px",
  backgroundColor: "black",
  textAlign: "center"
}

const jumboBodyStyle = {
  paddingTop: "8px",
  paddingBottom: "8px",
  margin: "5px 600px 100px 150px",
  height: "55px",
  width: "595px",
  backgroundColor: "black"
}

function PastEvents() {
  return (
    <div>
      <NaviBar />
      <div style={divHead}>
      <div style={space}/>
        <Jumbotron style={jumboTitleStyle}>
          <h1 style={{color: "white"}}>Past Events</h1>
        </Jumbotron>
        <Jumbotron style={jumboBodyStyle}>
          <h3 style={{color: "white"}}>Check out what we have done in the past<span style={{color: "yellow"}}>!</span></h3>
        </Jumbotron>
      </div>
      <div style={divBlock}>
      </div>
     <Footer />
    </div>
  );
}

export default PastEvents;
