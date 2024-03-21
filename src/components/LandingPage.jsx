import { Container, Row, Col } from "react-bootstrap";
import BackgroundImg from '/background.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import '../css/LandingPage.css';

function scrollToProjects() {
  const projectsSection = document.getElementById('projects');

  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function LandingPage() {
  return (
    <>
      <div className="background-overlay"></div>
      <Container fluid className="landing-page" id="home" style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <Row className="landing-content">
          <Col>
            <Row>
              <h1 style={{ fontSize: '6vw', textTransform: 'uppercase', fontWeight: 600}}>Oscar Norman</h1>
            </Row>
            <Row className="mb-4">
              <h4 style={{fontSize: '2vw', textTransform: 'uppercase'}}>Full-stack & App developer</h4>
            </Row>
            <Row>
              <Col><i className="devicon-html5-plain-wordmark icons"/></Col>
              <Col><i className="devicon-css3-plain-wordmark icons"/></Col>
              <Col><i className="devicon-javascript-plain icons"/></Col>
              <Col><i className="devicon-bootstrap-plain icons"/></Col>
              <Col><i className="devicon-dart-plain-wordmark icons"/></Col>
              <Col><i className="devicon-flutter-plain icons"/></Col>
              <Col><i className="devicon-react-original-wordmark icons"/></Col>
              <Col><i className="devicon-php-plain icons"/></Col>
              <Col><i className="devicon-mysql-plain-wordmark icons"/></Col>
              <Col><i className="devicon-python-plain-wordmark icons"/></Col>
              <Col><i className="devicon-electron-original icons"/></Col>
            </Row>
            <Row className="mt-5">
              <div className="scroll-down-btn-container" onClick={scrollToProjects}>
                <FontAwesomeIcon icon={faAnglesDown} className="scroll-down-icon" />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};