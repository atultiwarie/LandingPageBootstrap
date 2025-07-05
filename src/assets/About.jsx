import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

function AboutUs() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">About BGMI</h1>

      <Row>
        <Col md={6} className="d-flex align-items-center">
          <Card className="w-75">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/736x/62/50/b0/6250b09b79eb4582b34459659587fadc.jpg"
              alt="BGMI"
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Welcome to BGMI</Card.Title>
              <Card.Text>
                BGMI is a multiplayer battle royale game where players fight for
                survival in a shrinking arena. It is designed specifically for
                the Indian audience, bringing together intense combat, strategic
                gameplay, and team-based mechanics.
              </Card.Text>
              <Button
                variant="primary"
                href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
                target="_blank"
              >
                Download BGMI Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <h3 className="mb-3">Our Mission</h3>
          <p>
            BGMI was created to offer Indian players a premium gaming experience
            designed to reflect their unique culture and preferences. With our
            mission to build a thriving, dynamic community, we deliver regular
            updates, new game modes, and special in-game events.
          </p>

          <h3>Core Features</h3>
          <ul>
            <li>
              <strong>Battle Royale Mode:</strong> Fight against 100 players in
              a last-man-standing battle.
            </li>
            <li>
              <strong>Team-Based Modes:</strong> Collaborate with friends to win
              in team deathmatches and more.
            </li>
            <li>
              <strong>Multiple Maps:</strong> Explore diverse landscapes and
              terrains across different maps.
            </li>
            <li>
              <strong>Esports Integration:</strong> Join competitive tournaments
              and become an esports champion.
            </li>
          </ul>

          <h3>Game Modes</h3>
          <ul>
            <li>
              <strong>Classic Mode:</strong> 100-player battle where only one
              team or player survives.
            </li>
            <li>
              <strong>Arcade Mode:</strong> Shorter games with smaller teams and
              intense action.
            </li>
            <li>
              <strong>Ranked Mode:</strong> Play competitively and climb the
              leaderboard to be the top player.
            </li>
          </ul>
        </Col>
      </Row>

      {/* Game Highlights Carousel */}
      <h2 className="text-center my-5">BGMI Highlights</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/bd/7c/ce/bd7ccec47365af743e1ee9918618098c.jpg"
            alt="BGMI Gameplay 1"
            style={{ height: "400px" }}
          />
          <Carousel.Caption>
            <h3>Immersive Graphics</h3>
            <p>Experience breathtaking visuals and realistic environments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/df/cc/a8/dfcca81afafb3c7f9e4c7e7fed0a732a.jpg"
            alt="BGMI Gameplay 2"
            style={{ height: "400px" }}
          />
          <Carousel.Caption>
            <h3>Exciting Action</h3>
            <p>Fast-paced, adrenaline-pumping action in every match.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/2c/35/05/2c3505ee560bcddf9103524126c91374.jpg"
            alt="BGMI Gameplay 3"
            style={{ height: "400px" }}
          />
          <Carousel.Caption>
            <h3>Competitive Esports</h3>
            <p>
              Test your skills and compete against the best players worldwide.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default AboutUs;
