import React from 'react';
import NaviBar from '../common/NaviBar';
import Footer from '../common/Footer';
import {Jumbotron, Container} from 'react-bootstrap';

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
  width: "340px",
  backgroundColor: "black",
  textAlign: "center"
}

const jumboBodyStyle = {
  paddingTop: "8px",
  paddingBottom: "8px",
  margin: "5px 600px 100px 150px",
  height: "55px",
  width: "480px",
  backgroundColor: "black"
}

const iframeStyle = {
  borderWidth: 0,
  width: "1100px",
  height:"600px",
  frameBorder: 0,
  scrolling: "no"
}

function Events() {
  return (
    <div>
      <NaviBar />
      <div style={divHead}>
        <div style={space}/>
          <Jumbotron style={jumboTitleStyle}>
            <h1 style={{color: "white"}}>Service Events</h1>
          </Jumbotron>
        <Jumbotron style={jumboBodyStyle}>
          <h3 style={{color: "white"}}>Check out our upcoming events<span style={{color: "yellow"}}>!</span></h3>
        </Jumbotron>
      </div>
      <div style={divBlock}>
        <Container>
          <iframe src="https://calendar.google.com/calendar/embed?src=isth589qbj4savn2ip91d7664o%40group.calendar.google.com&ctz=America%2FLos_Angeles" title="Google Calendar" style={iframeStyle}></iframe>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
