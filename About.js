import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container id="about" className="py-5 about-section">
      <h2 className="text-center mb-4">About Me</h2>
      <Row>
        <Col md={4}>
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="img-fluid rounded-circle profile-image"
          />
        </Col>
        <Col md={8}>
          <Card className="about-card"> 
            <Card.Body>
              <Card.Title><b>About Me</b></Card.Title>
              <Card.Text>
              My name is <b>Vishal Kumar</b>, and I am currently a postgraduate student at Chandigarh University. During my academic journey, I have successfully completed HTML, CSS, JavaScript, Node.js, React, Express, MongoDB, Python, and DSA.
              </Card.Text>
            </Card.Body>
          </Card>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="about-card"> 
                <Card.Body>
                  <Card.Title><b>Goals</b></Card.Title>
                  <Card.Text>
                  <b>Short-Term Goals:</b> To deepen my knowledge in full-stack development and contribute to innovative projects.
                  <br/><b>Long-Term Goals:</b>To become a lead software engineer and mentor aspiring developers, pushing boundaries in tech excellence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="about-card"> 
                <Card.Body>
                  <Card.Title><b>Behind the Code</b></Card.Title>
                  <Card.Text>
                  Beyond the screen, I am someone who values connection and continuous learning. I believe every challenge is an opportunity to grow, and every project is a step toward excellence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;