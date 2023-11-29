import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function About() {

  return (
    <>
      <div style={{backgroundColor: '#020202'}}>
        <Container id="about" style={{ paddingTop: '200px', paddingBottom: '200px'}}>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} md={6} className="text-center mb-4">
              <Image
                src="src/assets/portrait.png"
                alt="portrait of me"
                style={{ width: '50%' }}
                roundedCircle={true}
              />
            </Col>
            <Col xs={12} md={6} className="text-center">
              <h1 className="text-light text-center pb-2" style={{textTransform: 'uppercase', fontWeight: 600}}>About me</h1>
              <p className="text-light text-center pb-2">👋 Hello, I'm Oscar!<br/><br/>I'm a 24-year-old aspiring full-stack developer currently immersed in the world of coding and problem-solving at Linnaeus University. My journey into the realm of technology began with a passion for creating, exploring, and building digital solutions that make a meaningful impact.<br/><br/>🚀 Currently pursuing my studies in full-stack development, I am honing my skills in both front-end and back-end technologies. I thrive on challenges and am always eager to learn new technologies to stay ahead in this dynamic field.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
