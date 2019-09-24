import React from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import earthElement from '../images/earth_element.png';
import waterElement from '../images/water_element.png';
import sunsetIcon from '../images/icon_sunset.png';
import CKIIcon from '../images/circlek.png';
import sunsetEmblem from '../images/sunset_emblem.png';

const bottomSpace = {
  borderTop: "2px solid grey",
  padding: "15px 0px",
  height: "200px",
  fontFamily: "Garamond",
  fontSize: "25px"
}

const textFormat = {
  textAlign: "center"
}

const sunset = {
  width: "110px",
  height: "110px"
}

const cki = {
  marginTop: "10px",
  width: "90px",
  height: "90px"
}

function Footer() {
    return (
        <div style={bottomSpace}>
          <div style={{float: "left", paddingLeft: "400px"}}>
            <Container>
              <Row style={textFormat}>
                  <Col style={{marginBottom: "7px"}}><b><u>Kiwanis</u></b></Col>
              </Row>
              <Row style={textFormat}>
                  <Col style={{marginBottom: "7px"}}>
                      <Button variant="secondary" size="sm" style={{width:"130px"}} href="https://www.svkiwanis.org/">
                          <Image src={earthElement} alt="earth element"/>
                          <span  style={{fontSize: "15px", paddingLeft: "10px"}}>Scotts Valley</span>
                      </Button>
                  </Col>
              </Row>
              <Row style={textFormat}>
                  <Col style={{marginBottom: "7px"}}>
                      <Button variant="secondary" size="sm" style={{width:"130px", textAlign:"left"}} href="https://surfcitykiwanis.com/">
                          <Image src={waterElement} alt="water element"/>
                          <span style={{fontSize: "15px", paddingLeft:"20px"}}>Surf City</span>
                      </Button>
                  </Col>
              </Row>
            </Container>
          </div>
          <div style={{float: "right", paddingRight: "300px"}}>
            <Container>
              <Row style={textFormat}>
                <Col style={{marginBottom: "7px", marginLeft: "10px"}}><b><u>Logos</u></b></Col>
              </Row>
              <Row>
                <Col>
                    <Image src={sunsetIcon} style={sunset} alt="Sunset Icon"/>
                </Col>
                <Col>
                  <Image src={CKIIcon} style={cki} alt="CKI Icon"/>
                </Col>
                <Col>
                  <Image src={sunsetEmblem} style={cki} alt="Sunset Emblem" /> 
                </Col>
              </Row>
            </Container>
          </div>
          <Container style={{clear: "both"}}>
            <Row style={{paddingTop:"10px"}}>
              <Col style={{textAlign:"center", fontSize:"16px"}}>
                All Rights Reserved to UCSC Circle K International®
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Footer;