import React from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import earthElement from '../images/earth_element.png';
import waterElement from '../images/water_element.png';

const bottomSpace = {
  borderTop: "2px solid grey",
  padding: "15px 0px",
  height: "200px",
  fontFamily: "Garamond",
  fontSize: "22px"
}

const textFormat = {
  textAlign: "center"
}

function Footer() {
    return (
        <div style={bottomSpace}>
          <Container>
            <Row style={textFormat}>
                <Col><b>Kiwanis</b></Col>
                <Col></Col>
            </Row>
            <Row style={textFormat}>
                <Col style={{marginBottom: "5px"}}>
                    <Button variant="secondary" size="sm" href="https://www.svkiwanis.org/">
                        <Image src={earthElement} alt="earth element"/>
                        <span  style={{fontSize: "15px"}}>  Scotts Valley</span>
                    </Button>
                </Col>
                <Col></Col>
            </Row>
            <Row style={textFormat}>
                <Col style={{marginBottom: "5px"}}>
                    <Button variant="secondary" size="sm" href="https://surfcitykiwanis.com/">
                        <Image src={waterElement} alt="water element"/>
                        <span style={{paddingLeft:"5px"}}>Surf City</span>
                    </Button>
                </Col>
                <Col>
                </Col>
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Footer;