import React from 'react';
import NaviBar from '../common/NaviBar';
import Footer from '../common/Footer';
import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';
import serviceIcon from '../images/icon_service_Black.png';
import leadershipIcon from '../images/icon_leadership_Black.png';
import fellowshipIcon from '../images/icon_fellowship_Black.png';
import boardGroup from '../images/board_members/everyone.jpg';
import pres from '../images/board_members/Pres.jpg';
import anoop from '../images/board_members/Anoop.jpg';
import jeevan from '../images/board_members/Jeevan.jpg';
import gian from '../images/board_members/Gian.jpg';
import nat from '../images/board_members/Nat.jpg';
import luke from '../images/board_members/Luke.jpg';
import ishan from '../images/board_members/Ishan.jpg';
import kevin from '../images/board_members/Kevin.jpg';
import jonnie from '../images/board_members/Jonnie.jpg';
import justin from '../images/board_members/Justin.jpg';


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
  height: "3580px",
  width: "100%",
  paddingTop: "50px",
  backgroundColor: "#003D79"
}

const jumboTitleStyle = {
  paddingTop: "8px",
  margin: "20px 600px 10px 150px",
  height: "10px",
  width: "248px",
  backgroundColor: "black",
  textAlign: "center"
}

const jumboBodyStyle = {
  paddingTop: "8px",
  paddingBottom: "8px",
  margin: "5px 600px 80px 150px",
  height: "55px",
  width: "380px",
  backgroundColor: "black"
}

const tenets = {
  height: "120px",
  width: "120px"
}

function About() {
  return (
    <div>
      <NaviBar />
      <div style={divHead}>
      <div style={space}/>
        <Jumbotron style={jumboTitleStyle}>
          <h1 style={{color: "white"}}>About Us</h1>
        </Jumbotron>
       <Jumbotron style={jumboBodyStyle}>
        <h3 style={{color: "white"}}>Learn about who we are<span style={{color: "yellow"}}>!</span></h3>
       </Jumbotron>
       <div style={divBlock}>
        <Container>
            <Row style={{fontSize: "30px", color: "yellow", textAlign: "center"}}>
              <Col>
                <b>Established <span style={{color: "yellow"}}>in</span> 1936</b>
              </Col>
              <Col>
                <b>Our <span style={{color: "yellow"}}>Club</span></b>
              </Col>
            </Row>
            <Row style={{paddingTop: "6px", fontSize: "20px", color: "white", textAlign: "left"}}>
              <Col>
                Circle K International (CKI) is the premier collegiate community service, leadership development, and friendship organization in the world. With more than 13,770 members in 17 nations, CKI is making a positive impact on the world every day.
              </Col>
              <Col>
                UCSC CKI is sponsored by the Surf City Kiwanis club in Santa Cruz and the Kiwanis of the Valleys club in Scotts Valley. ​We are a part of the Sunset division along with Stanford University, San Jose State University, DeAnza College, and Foothill College. Our division is a part of the CNH District.
              </Col>
            </Row>
          </Container>
          <div style={{height: "100px", width: "100%"}}/>
          <div style={{fontSize: "30px", color: "yellow", textAlign: "center"}}>
            <b>Our <span style={{color: "yellow"}}>Three</span> Tenets</b>
          </div>
          <Container>
            <Row style={{textAlign: "center"}}>
              <Col>
                <Image src={serviceIcon} style={tenets} alt="Service Icon" />
              </Col>
              <Col>
                <Image src={leadershipIcon} style={tenets} alt="Leadership Icon" />
              </Col>
              <Col>
                <Image src={fellowshipIcon} style={{height: "140px", width: "140px"}} alt="Fellowship Icon" />
              </Col>
            </Row>
            <Row style={{paddingTop: "6px", fontSize: "20px", color: "white", textAlign: "left"}}>
              <Col>
                From our school to the Bay area, we improve our community gradually through service events. With all the efforts together, we are making the world a better place.
              </Col>
              <Col>
                Circle K International helps to explore each individual's potential. It hones our ability to lead certain groups of people and to make a difference.
              </Col>
              <Col>
                Circle K International provides you a chance to connect with peers, advisors, and Kiwanians and build long-lasting relationships.
              </Col>
            </Row>
          </Container>
          <div style={{height: "100px", width: "100%"}}/>
          <div style={{fontSize: "30px", color: "yellow", textAlign: "center"}}>
            <b>Our <span style={{color: "yellow"}}>Pledge</span></b>
          </div>
          <div style={{paddingTop: "6px", fontSize: "20px", color: "white", textAlign: "left"}}>
            <p style={{marginLeft: "450px", marginRight: "350px"}}>
            I pledge to uphold the objects of Circle K International,<br />
            To foster compassion and goodwill toward others through service and leadership<br />
            To develop my abilities and the abilities of all people<br />
            And to dedicate myself to the realization of mankind’s potential.<br />
            </p>
          </div>
          <div style={{height: "100px", width: "100%"}}/>
          <div style={{fontSize: "40px", color: "yellow", textAlign: "center"}}>
            <b>Board <span style={{color: "yellow"}}>Members</span></b>
          </div>
          <div style={{paddingTop: "30px", textAlign: "center"}}>
            <Image src={boardGroup}  style={{height: "470px", width: "700px", borderRadius: "15px"}} alt="Board Members" />
          </div>
          <div style={space}/>
          <div style={{fontSize: "35px", color: "yellow", textAlign: "center"}}>
            <b><u><span style={{color: "yellow"}}>Executive</span> Board <span style={{color: "yellow"}}>Members</span></u></b>
          </div>
          <Container>
            <Row style={{paddingTop: "20px", textAlign: "center"}}>
              <Col>
                <Image src={pres} style={{height:"300px", width: "240px", borderRadius: "15px"}} alt="president" />
              </Col>
              <Col>
                <Image src={anoop} style={{height:"300px", width:"240px", borderRadius: "15px"}} alt="AVP" />
              </Col>
            </Row>
            <Row style={{fontSize:"26px", color: "white", textAlign: "center"}}>
              <Col>
                Alfredo Rivero
              </Col>
              <Col>
                Anoop George
              </Col>
            </Row>
            <Row style={{fontSize: "22px", color: "white", textAlign: "center"}}>
              <Col>
                President
              </Col>
              <Col>
                Administrative Vice President
              </Col>
            </Row>
            <Row style={{fontSize: "20px", color: "white", textAlign: "center"}}>
              <Col>
                pres.ucsc.cki@gmail.com
              </Col>
              <Col>
                avp.ucsc.cki@gmail.com
              </Col>
            </Row>
          </Container>
          <Container>
            <Row style={{paddingTop: "20px", textAlign: "center"}}>
              <Col>
                <Image src={jeevan} style={{height:"300px", width: "200px", borderRadius: "15px"}} alt="SVP" />
              </Col>
              <Col>
                <Image src={gian} style={{height:"300px", width:"230px", borderRadius: "15px"}} alt="secretary" />
              </Col>
              <Col>
                <Image src={nat} style={{height:"300px", width:"200px", borderRadius: "15px"}} alt="treasurer" />
              </Col>
            </Row>
            <Row style={{fontSize:"26px", color: "white", textAlign: "center"}}>
              <Col>
                Jeevan Bueller
              </Col>
              <Col>
                Gian Bisma
              </Col>
              <Col>
                Natalie Davis
              </Col>
            </Row>
            <Row style={{fontSize: "22px", color: "white", textAlign: "center"}}>
              <Col>
                Service Vice President
              </Col>
              <Col>
                Secretary
              </Col>
              <Col>
                Treasurer
              </Col>
            </Row>
            <Row style={{fontSize: "20px", color: "white", textAlign: "center"}}>
              <Col>
                svp.ucsc.cki@gmail.com
              </Col>
              <Col>
                sec.ucsc.cki@gmail.com
              </Col>
              <Col>
                treas.ucsc.cki@gmail.com
              </Col>
            </Row>
          </Container>
          <div style={space}/>
          <div style={{fontSize: "35px", color: "white", textAlign: "center"}}>
            <b><u>Administrative Board Members</u></b>
          </div>
          <Container>
            <Row style={{paddingTop: "20px", textAlign: "center"}}>
              <Col>
                <Image src={luke} style={{height:"300px", width: "240px", borderRadius: "15px"}} alt="president" />
              </Col>
              <Col>
                <Image src={ishan} style={{height:"300px", width:"220px", borderRadius: "15px"}} alt="AVP" />
              </Col>
            </Row>
            <Row style={{fontSize:"26px", color: "white", textAlign: "center"}}>
              <Col>
                Luke Chang
              </Col>
              <Col>
                Ishan Pathirana
              </Col>
            </Row>
            <Row style={{fontSize: "22px", color: "white", textAlign: "center"}}>
              <Col>
                Technology Chair
              </Col>
              <Col>
                Spirit and Social Chair
              </Col>
            </Row>
            <Row style={{fontSize: "20px", color: "white", textAlign: "center"}}>
              <Col>
                ucsc.cki.website@gmail.com
              </Col>
              <Col>
                ucsccki.spirit@gmail.com
              </Col>
            </Row>
          </Container>
          <Container>
            <Row style={{paddingTop: "20px", textAlign: "center"}}>
              <Col>
                <Image src={kevin} style={{height:"300px", width: "200px", borderRadius: "15px"}} alt="SVP" />
              </Col>
              <Col>
                <Image src={jonnie} style={{height:"300px", width:"220px", borderRadius: "15px"}} alt="secretary" />
              </Col>
              <Col>
                <Image src={justin} style={{height:"300px", width:"200px", borderRadius: "15px"}} alt="treasurer" />
              </Col>
            </Row>
            <Row style={{fontSize:"26px", color: "white", textAlign: "center"}}>
              <Col>
                Kevin Marshall
              </Col>
              <Col>
                Jonathan Nguyen
              </Col>
              <Col>
                Justin Tran
              </Col>
            </Row>
            <Row style={{fontSize: "22px", color: "white", textAlign: "center"}}>
              <Col>
                Fundraising Chair
              </Col>
              <Col>
                Historian
              </Col>
              <Col>
                Service Chair
              </Col>
            </Row>
            <Row style={{fontSize: "20px", color: "white", textAlign: "center"}}>
              <Col>
                ucsccki.fund@gmail.com
              </Col>
              <Col>
                ucsccki.historian1@gmail.com
              </Col>
              <Col>
                service.ucsc.cki@gmail.com
              </Col>
            </Row>
          </Container>
       </div>
       <Footer />
     </div>
    </div>
  );
}

export default About;
