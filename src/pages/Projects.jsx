import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import projectJSON from '../json/projects.json';
import "../css/style.css"; 

export default function Projects() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = (e) => {
    const cardValue = e.currentTarget.getAttribute("data-value");

    // Navigate to the /project route with the project's ID
    navigate(`/project/${cardValue}`);
  };

  return (
    <>
      <Container id="projects" style={{paddingTop: '200px', paddingBottom: '200px'}}>
        <h1 className="text-light text-center pb-2" style={{textTransform: 'uppercase', fontWeight: 600}}>My projects</h1>
        <Row className="g-4 g-5 px-5 pt-5">
          {projectJSON.projects.map((project) => (
            <Col key={project.id} xs={12} md={6}>
              <Card className="mb-3 project-card text-light" data-value={project.id} onClick={handleCardClick}>
                <Row className="g-0">
                  <div className="zoom-image">
                    <img
                      src={project.images[0]}
                      className="img-fluid"
                      alt={project.name}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <Col>
                    <div className="card-body">
                      <h5 className="card-title">{project.name} - {project.shortDescription}</h5>
                      <p className="card-text">{project.category}</p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};