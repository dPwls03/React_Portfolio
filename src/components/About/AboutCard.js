import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요, 저는 
            <span className="purple"> <strong>최예진</strong>입니다.😊</span>
            <br />
            저는 현재 경성대학교 소프트웨어학과에 재학 중입니다.
            <br />
            저는 현재 <span className="purple">프론트엔드</span>를 준비하고 있습니다.
            <br />
            <br />
            저의 취미 생활은
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 게임
            </li>
            <li className="about-activity">
              <ImPointRight /> 잠
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "할 수 있다고 생각하니까 할 수 있는거야."{" "}
          </p>
          <footer className="blockquote-footer">최예진</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
