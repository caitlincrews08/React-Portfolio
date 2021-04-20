import React from "react";
import {  Button, Jumbotron } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <Jumbotron className="contact home text-center">
      <h2>Contact Me</h2>
      <hr/>
      <h4>Caitlin Crews</h4>
      <div className="links">
        <p><AiFillGithub />Github: <a href="https://github.com/caitlincrews08">github.com/caitlincrews08</a> </p>
        <p><AiFillLinkedin />Linkedin: <a href="https://linkedin.com/in/caitlin-crews">linkedin.com/in/caitlin-crews</a></p>
        <p><MdEmail />Email: <a href="mailto:caitlinrcrews@gmail.com">caitlinrcrews@gmail.com</a></p>
        <Button href="https://docs.google.com/document/d/1S_z_37j4tWRpBwrWa4ZzjdVBSQ_qZs7jVLEDWlfUBdQ/preview">Resume</Button>
      </div>

      {/* Spruce up later */}
    </Jumbotron>
  )

}

export default Contact;