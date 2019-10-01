import React from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import NaviBar from '../common/NaviBar';
import Footer from '../common/Footer';
import ckiGroup from '../images/cki_group_pic.jpg';
import FadeIn from '../components/FadeIn';

const font = {
  fontFamily: "Garamond",
  fontSize: 35,
  textAlign: "center",
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
  height: "750px",
  width: "100%",
  backgroundColor: '#003D79'
};

const mainImage = {
  //flex: 1,
  display: 'block',
  paddingLeft: '70px',
  paddingRight: '70px',
  height: "600px",
  width: "100%",
  backgroundPosition: 'center',
  resizeMode: 'contain'
};


function Home() {
  return (
    <div className="Home">
      <NaviBar />
      <div style={{height: "600px", width: "100%", backgroundColor: '#F2E18B'}}>
        <div style={divHead}>
          <FadeIn height={50}>
            {onLoad => 
            <Image src={ckiGroup} style={mainImage} onLoad={onLoad}>
            </Image>}
          </FadeIn>
        </div>
      </div>
      <div style={divBlock}>
        <div style={space} fluid="true"/>
        <div style={{fontSize: "34px", color: "white", textAlign: "center"}}>
          <b><u><span style={{color: "yellow"}}>General Updates</span></u></b>
        </div>
        <div style={{fontSize: "26px", color: "white", textAlign: "center"}}>
          <b>First General Meeting at Classroom Unit #1 from 8:00pm to 9:00pm on Oct. 3rd(Thursday)!!!</b>
        </div>
        <Container>
          <Row style={{fontSize: "26px", textAlign: "center", paddingTop: "20px"}}>
            <Col>
              <Button variant="secondary" size="sm" style={{width:"300px"}} href="https://docs.google.com/forms/d/e/1FAIpQLSccYZiDp5D8tGlmlJXKyPaG4oIMDxRMbwy699OnfBSO7unonQ/viewform">
                <span style={{fontSize: "20px"}}>Service Event Evaluation Form</span>
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" size="sm" style={{width:"250px"}} href="https://www.facebook.com/groups/ucsccirclek/">
                <span style={{fontSize: "20px"}}>UCSC CKI Facebook Page</span>
              </Button>
            </Col>
          </Row>
        </Container>
        <div style={{height: "100px"}}/>
        <Container style={{backgroundColor: "#C7D6EE", borderRadius: "10px"}}>
          <Row>
            <Col style={font}>
              <b><span style={{color: "#00A5D9"}}>Member Of The Month: TBA</span></b>
              {/* <img style={{margin: "auto", height: 240, width: 310}} src={me} alt="MOTM pic"/> */}
            </Col>
            <Col style={font}>
              <b><span style={{color: "#00A5D9"}}>Kiwanis Meetings</span></b>
              <h2 style={{fontSize: "26px", paddingTop: "20px"}}><b>Scotts Valley Kiwanis Meeting</b></h2>
              <p style={{fontSize: "22px"}}>Wednesday 7:00AM-8:00AM
              Green Hill Cafe, Scotts Valley CA (Every Wednesday, except the second week)</p>
              <h2 style={{fontSize: "26px", paddingTop: "20px"}}><b>Surf City Kiwanis Meeting</b></h2>
              <p style={{fontSize: "22px"}}>Thursday 7:00AM-8:00AM
              ​Pasatiempo Golf Course, Santa Cruz CA (Every Thursday)</p>
              <h5 style={{paddingTop: "20px"}}><b>Contact <span style={{color: "#003D79"}}>ucsccki.kfamily@gmail.com</span> for more information!</b></h5>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;