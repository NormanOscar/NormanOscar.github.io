import '../css/Footer.css';
import React from "react";
import { Container, Col } from "react-bootstrap";

export default function Footer() {
  return(
    <>
      <div style={{backgroundColor: '#020202'}}>
        <Container className="footer" style={{ paddingTop: '50px', paddingBottom: '50px'}}>
          <div className="d-flex justify-content-between text-light">
            <Col className='d-flex justify-content-center'>
              <h4 style={{marginBottom: 0}}>Copyright © 2023. All rights are reserved</h4>
            </Col>
            <Col className='d-flex justify-content-center'>
              <a className="devicon-linkedin-plain footer-icons" target={'_blank'} href="https://www.linkedin.com/in/oscar-norman/"/>
              <a className="devicon-github-original footer-icons" target={'_blank'} href="https://github.com/NormanOscar"/>
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
};