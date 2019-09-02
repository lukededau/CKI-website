import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import NaviBar from '../common/NaviBar';
import Footer from '../common/Footer';
import emblem from '../images/District_Emblem.png';
import FadeIn from '../components/FadeIn';
import me from '../images/me.jpg'

const font = {
  fontFamily: "Garamond",
  fontSize: 35,
  textAlign: "center",
  color: "white",
  border: "1px black solid"
}

const space = {
  height: "50px",
  width: "100%"
}

const divHead = {
  height: "500px",
  width: "100%",
};

const divBlock = {
  height: "1000px",
  width: "100%",
  backgroundColor: '#003D79'
};

const mainImage = {
  //flex: 1,
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: "500px",
  width: "500px",
  backgroundPosition: 'center',
  resizeMode: 'contain'
};


function Home() {
  return (
    <div className="Home">
      <NaviBar />
      <div style={{height: "600px", width: "100%", backgroundColor: '#F2E18B'}}>
        <div style={space} fluid="true"/>
        <div style={divHead}>
          <FadeIn height={50}>
            {onLoad => 
            <Image src={emblem} style={mainImage} onLoad={onLoad} fluid>
            </Image>}
          </FadeIn>
        </div>
      </div>
      <div style={divBlock}>
        <div style={space} fluid="true"/>
        <Container>
          <Row>
            <Col style={font}>
              <p>Clown Of The Month: Luke Chang</p>
              <img style={{margin: "auto", height: 240, width: 310}} src={me} alt="MOTM pic"/>
            </Col>
            <Col style={font}>2 of 2</Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
