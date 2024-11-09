import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/babara.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          최근 <strong className="purple">작품 </strong>
        </h1>
        <p style={{ color: "white" }}>
          최근에 했던 작업들을 소개합니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BDIA"
              description="BDIA Devton 2024"
              ghLink="https://github.com/AICT-RR/AICT_RR"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
