import React from 'react';
import NaviBar from '../common/NaviBar';
import Footer from '../common/Footer';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';
import joinUs from '../images/join_us.jpg';

const space = {
  height: "50px",
  width: "100%",
}

const divHead = {
  height: "300px",
  width: "100%",
  backgroundColor: "#F2E18B"
};

const jumboTitleStyle = {
  paddingTop: "8px",
  margin: "20px 600px 10px 150px",
  height: "10px",
  width: "220px",
  backgroundColor: "black",
  textAlign: "center"
}

const jumboBodyStyle = {
  paddingTop: "8px",
  paddingBottom: "8px",
  margin: "5px 600px 100px 150px",
  height: "55px",
  width: "450px",
  backgroundColor: "black"
}


function JoinUs() {
  return (
    <div>
      <NaviBar />
      <div style={divHead}>
        <div style={space}/>
          <Jumbotron style={jumboTitleStyle}>
            <h1 style={{color: "white"}}>Join Us<span style={{color: "yellow"}}>!</span></h1>
          </Jumbotron>
        <Jumbotron style={jumboBodyStyle}>
          <h3 style={{color: "white"}}>Stay updated with our emails!</h3>
        </Jumbotron>
      </div>
      <div style={space}/>
      <Container>
        <Row>
          <Col>
            <img
            src={joinUs}
            alt="join_us"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default JoinUs;
