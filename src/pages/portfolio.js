import React from "react";
import { Card, CardDeck, Button } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai'

import travelers from '../assets/travelersTop5.png';
import meme from '../assets/memeheim.png';
import budget from '../assets/budget_screenshot.png';

function Portfolio() {
  return (
    <div className="container">
      <CardDeck className="Cards">
        <Card style={{ height: '100%' }}>
          <Card.Img variant="top" src={meme} />
          <Card.Body>
            <Card.Title>Memeheim</Card.Title>
            <Card.Text>
            Create, save, and find memes.
            </Card.Text>
            <Button href="https://memeheim.herokuapp.com">Deployment</Button>
            <Button href="https://github.com/caitlincrews08/Final-Project">Github</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend Developer</small>
          </Card.Footer>
        </Card>
        <Card style={{ height: '100%' }}>
          <Card.Img variant="top" src={travelers} />
          <Card.Body>
            <Card.Title>Traveler's Top Five</Card.Title>
            <Card.Text>
            Find the best rated restaurants, hotels, and sights in a given city.
            </Card.Text>
            <Button href="https://caitlincrews08.github.io/Travelers-Top-5/">Deployment</Button>
            <Button href="https://github.com/caitlincrews08/Travelers-Top-5">Github</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend Developer</small>
          </Card.Footer>
        </Card>
        <Card style={{ height: '100%' }}>
          <Card.Img variant="top" src={budget} />
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
            Budget tracker with online and offline capability.
           </Card.Text>
           <Button href="https://stormy-gorge-52058.herokuapp.com">Deployment</Button>
            <Button href="https://github.com/caitlincrews08/Budget-Tracker">Github</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">PWA functionality</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Memeheim</Card.Title>
            <Card.Text>
            Create, save, and find memes.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend Developer</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={travelers} />
          <Card.Body>
            <Card.Title>Traveler's Top Five</Card.Title>
            <Card.Text>
            Find the best rated restaurants, hotels, and sights in a given city.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend Developer</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
            Budget tracker with online and offline capability.
        </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  )
}

export default Portfolio;