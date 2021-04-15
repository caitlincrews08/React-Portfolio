import React from "react";
import { Card, CardDeck, Button } from 'react-bootstrap';
// import { AiFillGithub } from 'react-icons/ai'

import travelers from '../assets/travelersTop5.png';
import meme from '../assets/memeheim.png';
import budget from '../assets/budget_screenshot.png';
import team from '../assets/teambuilder.png';
import employee from '../assets/employeedirect.png';
import fitness from '../assets/fitness.png';

function Portfolio() {
  return (
    <div className="container">
      <CardDeck className="Cards">
        <Card>
          <Card.Img variant="top" src={meme} />
          <Card.Body>
            <Card.Title>Memeheim</Card.Title>
            <Card.Text>
            Create, save, and find memes
            </Card.Text>
            <Button href="https://memeheim.herokuapp.com">Deployment</Button>
            <Button href="https://github.com/caitlincrews08/Final-Project">Github</Button>
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
            Find the best rated restaurants, hotels, and sights in a given city
            </Card.Text>
            <Button href="https://caitlincrews08.github.io/Travelers-Top-5/">Deployment</Button>
            <Button href="https://github.com/caitlincrews08/Travelers-Top-5">Github</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">JavaScript</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={budget} />
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
            Budget tracker with online and offline capability
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
          <Card.Img variant="top" src={team} />
          <Card.Body>
            <Card.Title>Employee Template Engine</Card.Title>
            <Card.Text>
            Employees' information at a glance
            </Card.Text>
           <Button href="https://github.com/caitlincrews08/Employee-Template-Engine">Github</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Node CLI</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={fitness} />
          <Card.Body>
            <Card.Title>Workout Tracker</Card.Title>
            <Card.Text>
            Track your workout regimen and view stats
            </Card.Text>
            <Button href="https://desolate-plains-06411.herokuapp.com/?id=6077bb492403f10015ed2d37">Deployment</Button>
           <Button href="https://github.com/caitlincrews08/Workout-Tracker">Github</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend Developer</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={employee} />
          <Card.Body>
            <Card.Title>Employee Directory</Card.Title>
            <Card.Text>
            Quickly search through an employee database
           </Card.Text>
           <Button href="https://caitlincrews08.github.io/Employee-Directory">Deployment</Button>
           <Button href="https://github.com/caitlincrews08/Employee-Directory">Github</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">React</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  )
}

export default Portfolio;

// reeeally need to update this later