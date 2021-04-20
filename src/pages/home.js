import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

function Home() {
  return (
    <Jumbotron className="home text-center">
      <div className="center">
      <h1>Hi, I'm Caitlin.</h1>
      <h5>
        I'm a full-stack web developer based in Orlando, Florida.
      </h5>
      <p className="bold">HTML/CSS | JavaScript | Bootstrap | React | NodeJS | Express | MySQL | MongoDB</p>
      <p>
        <Button variant="primary" href="about">Learn more</Button>
      </p>
      </div>
    </Jumbotron>
  )
}


export default Home;