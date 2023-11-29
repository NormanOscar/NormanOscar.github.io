import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import projectJSON from '../json/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Project() {
  const projectId = JSON.parse(localStorage.getItem('projectID'));
  const [project, setProject] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch the project based on the projectId
    const selectedProject = projectJSON.projects.find((proj) => proj.id === Number(projectId));

    // Set the project in the state
    setProject(selectedProject);

    // Update document title if needed
    if (selectedProject) {
      document.title = `${selectedProject.name}`;
    }

  }, [projectId]);

  const handleBack = () => {
    navigate(`/`);
  };

  if (!project) {
    // Handle the case when the project is not yet loaded
    return (
      <>
        <Container className="text-light" style={{ paddingTop: '200px', paddingBottom: '200px' }}>
          <p>Loading...</p>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <FontAwesomeIcon icon={faArrowLeft} size="xl" onClick={handleBack} className="go-back-btn" />
      <Container className="text-light" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <Row style={{ paddingBottom: '100px' }}>
          <Col>
            <h1>{project.name} - {project.shortDescription}</h1>
          </Col>
        </Row>
        <Row style={{ paddingBottom: '100px'}}>
          <Col xs={12} md={6} style={{paddingLeft: '30px', paddingRight: '30px', textAlign: 'justify'}}>
            <p>{project.description}</p>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column align-items-start" style={{paddingLeft: '30px', paddingRight: '30px'}}>
            <h5>Technologies</h5>
            <p>{project.technologies.join(', ')}</p>
            <Col xs={12} className="d-flex justify-content-start">
              {project.demo !== "" && 
                <Button href={project.demo} target="_blank" style={{marginRight: '10px'}}>Live demo</Button>
              }
              <a className="devicon-github-original footer-icons" target="_blank" href={project.github}/>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            {project.images.map((image, index) => (
              <Row key={index} style={{paddingBottom: '1em'}}>
                <img src={"../" + image} alt={project.name} style={{ width: '100%' }} />
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}