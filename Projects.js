import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ProjectContact.css';
const projects = [
  {
    title: 'NewsMonkey',
    description: 'News Monkey is a dynamic web application, using the News API, the application fetches news top headlines displays live newsfrom diverse categories like entertainment, business, science, sports, and more',
    image: '/images/projects/newsmonkey/newsmonkey.jpg', 
    githubLink: 'https://github.com/VishalRajput0987/NewsMonkey',
    tools: 'React, Bootstrap, News API',
  },
  {
    title: 'Employee Management',
    description: 'It provides a centralized database and userfriendly interface for HR personnel or authorized administrators to add,update, delete, and manage employee records efficiently.',
    image: '/images/projects/employee-management/employee management.png', 
    githubLink: 'https://github.com/VishalRajput0987/EmployeeManagementApp',
    tools: 'Apache Tomcat, SQL, Hibernate, Maven',
  },
  {
    title: 'Job Sequencing',
    description: 'It takes as input a set of jobs, each with associatedprofit and deadline values. The goal is to determine an optimal sequence ofjobs that can be completed within their respective deadlines to yield themaximum total profit',
    image: '/images/projects/job-sequencing/job sechudling.png', 
    githubLink: 'https://github.com/VishalRajput0987/job-sequencing',
    tools: 'Python, Greedy Algorithm',
  },
  {
    title: 'Item Description',
    description: 'It prioritizes security by implementing userauthentication, ensuring that only authorized users can access and modifyitem data. The API provides endpoints for retrieving, creating, updating, and deleting item records, enabling seamless data management.',
    image: '/images/projects/item-description/itemdescription.png', 
    githubLink: 'https://github.com/VishalRajput0987/itemDescription',
    tools: 'Node.js, Express, MongoDB, Postman',
  },
];

function Projects() {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="hover-card">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  <strong>Tools:</strong> {project.tools}
                </Card.Text>
                <Button variant="primary" href={project.githubLink} target="_blank">
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;