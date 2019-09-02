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
            <h1 style={{color: "white"}}>Service Events<span style={{color: "yellow"}}>!</span></h1>
          </Jumbotron>
        <Jumbotron style={jumboBodyStyle}>
          <h3 style={{color: "white"}}>Check out our upcoming events!</h3>
        </Jumbotron>
      </div>
      <Container>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=dWNzYy5ja2kud2Vic2l0ZUBnbWFpbC5jb20&amp;src=aXN0aDU4OXFiajRzYXZuMmlwOTFkNzY2NG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%23A79B8E" title="Google Calendar" style={iframeStyle}></iframe>
      </Container>
      <Footer />
    </div>
  );
}

export default Events;
