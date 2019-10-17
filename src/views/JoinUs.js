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
}


const divBlock = {
  height: "450px",
  width: "100%",
  paddingTop: "50px",
  backgroundColor: "#003D79"
}

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
            <h1 style={{color: "white"}}>Join Us</h1>
          </Jumbotron>
        <Jumbotron style={jumboBodyStyle}>
          <h3 style={{color: "white"}}>Stay updated with our emails<span style={{color: "yellow"}}>!</span></h3>
        </Jumbotron>
      </div>
      <div style={divBlock}>
        <Container>
          <Row>
            <Col>
              <img
              src={joinUs}
              style={{height: "330px", width: "500px"}}
              alt="join_us"
              />
            </Col>
            <Col style={{paddingTop: "30px", fontSize: "21px", color: "white", textAlign: "left"}}>
              Contact <span style={{color: "yellow"}}>sec.ucsc.cki@gmail.com</span> for questions or updates!
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default JoinUs;
