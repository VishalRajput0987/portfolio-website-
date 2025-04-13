import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Skills.css'; 

function Skills() {
  return (
    <Container id="skills" className="py-5">
      <h2 className="text-center mb-4">My Skills</h2>
      <Row>
        <Col md={4}>
          <Card className="skill-card">
            <Card.Body>
              <Card.Title><b>Hard Skills</b></Card.Title>
              <Card.Text>
                <strong>Programming Languages:</strong> HTML, CSS, JavaScript, Node.js, Python , C, C++, DSA <br />
                <strong>Frameworks & Libraries:</strong> React, Express.js <br />
                <strong>Database Management:</strong> SQL (MySQL), MongoDB
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="skill-card">
            <Card.Body>
              <Card.Title><b>Soft Skills</b></Card.Title>
              <Card.Text>
                <strong>Communication:</strong> Public speaking, written communication <br />
                <strong>Teamwork:</strong> Collaboration, conflict resolution <br />
                <strong>Leadership:</strong> Decision-making, mentoring
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="skill-card">
            <Card.Body>
              <Card.Title><b>Transferable Skills</b></Card.Title>
              <Card.Text>
                <strong>Problem-Solving:</strong> Critical thinking, troubleshooting <br />
                <strong>Time Management:</strong> Organization, meeting deadlines <br />
                <strong>Adaptability:</strong> Learning new tools, adjusting to change
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;