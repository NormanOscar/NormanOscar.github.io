import "../css/Contact.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {

  return (
    <>
      <Container fluid id="contact" style={{ paddingTop: '100px', paddingBottom: '100px'}}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <Row>
              <h1 className="text-light text-center pb-2" style={{ textTransform: 'uppercase', fontWeight: 600}}>Contact me</h1>
            </Row>
            <Row>
              <Col></Col>
              <Col className="contact-columns">
                <Row>
                  <FontAwesomeIcon icon={faMapLocationDot} className="contact-icons"/>
                  <a className="text-light text-center pb-2 contact-text" target="_blank" href="https://www.google.com/maps?q=Stockholm,Sweden">Stockholm, Sweden</a>
                </Row>
              </Col>
              <Col className="contact-columns">
                <Row>
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icons"/>
                  <a className="text-light text-center pb-2 contact-text" href="mailto:oscarnormn@gmail.com">oscarnormn@gmail.com</a>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};