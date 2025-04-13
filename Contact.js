import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faHackerrank,
} from '@fortawesome/free-brands-svg-icons'; 
import './ProjectContact.css'; 

function Contact() {
  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={8}>
        <Card className="hover-card">
            <Card.Body>
              <Card.Title className="text-center">Get in Touch</Card.Title>
              <Card.Text className="text-center">
                I'm always open to new opportunities and collaborations.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <FontAwesomeIcon icon={faMobileAlt} className="me-2" />
                    +91-9102076546
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    vishalrajput0987bgp@gmail.com
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                    <a
                      href="https://www.linkedin.com/in/vishal-kumar-79a72735a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHackerrank} className="me-2" />
                    <a
                      href="https://www.hackerrank.com/profile/24mca20350"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HackerRank
                    </a>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;