import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import gradpic from "../assets/images/gradpic.png"

function About() {
  return (
    <div>
      <Container>
        <Row>
          {/* <Col><img src={gradpic}/></Col> */}
          <Col><h2>Full Stack Web Developer</h2></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><h2>Fullstack Web Developer</h2></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )   
}
 
export default About;