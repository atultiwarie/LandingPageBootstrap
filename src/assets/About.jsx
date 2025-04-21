// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// function About() {
//   return (
//     <Container className="mt-5">
//       <h1 className="text-center mb-4">About BGMI</h1>

//       <Row>
//         <Col md={6}>
//           <Card>
//             <Card.Img
//               variant="top"
//             //   src="https://wallpapercave.com/wp/wp11232833.jpg"
//               alt="BGMI"
//             />
//             <Card.Body>
//               <Card.Title>Welcome to BGMI</Card.Title>
//               <Card.Text>
//                 Battlegrounds Mobile India (BGMI) is a multiplayer battle royale
//                 game developed and published by Krafton for mobile devices. In
//                 BGMI, players engage in combat in an ever-shrinking battlefield
//                 to be the last player or team standing. The game features
//                 realistic graphics, immersive sound, and exciting gameplay
//                 mechanics.
//               </Card.Text>
//               <Button variant="primary" href="#download">
//                 Download BGMI Now
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <h3 className="mb-3">Our Story</h3>
//           <p>
//             BGMI was launched to cater specifically to the Indian gaming
//             community, with features and content that reflect Indian culture and
//             interests. Our mission is to provide an engaging and exciting
//             experience that appeals to casual players, competitive gamers, and
//             esports enthusiasts alike.
//           </p>

//           <h3>Team BGMI</h3>
//           <p>
//             The BGMI team consists of passionate developers, designers, and
//             marketers who work tirelessly to deliver regular updates, new
//             features, and special events that keep the game exciting and fun for
//             players across the world.
//           </p>

//           <h3>Contact Us</h3>
//           <p>
//             If you have any queries, feedback, or need assistance, feel free to
//             reach out to us through our social media handles or email us at
//             <strong> support@bgmi.com</strong>.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default About;


import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

function AboutUs() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">About BGMI</h1>

      <Row>
        <Col md={6} className="d-flex align-items-center">
          <Card className="w-100">
            <Card.Img
              variant="top"
              src="https://wallpapercave.com/wp/wp11232833.jpg"
              alt="BGMI"
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
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Battlegrounds_Mobile_India_screenshot_1.jpg"
            alt="BGMI Gameplay 1"
          />
          <Carousel.Caption>
            <h3>Immersive Graphics</h3>
            <p>Experience breathtaking visuals and realistic environments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Battlegrounds_Mobile_India_screenshot_2.jpg"
            alt="BGMI Gameplay 2"
          />
          <Carousel.Caption>
            <h3>Exciting Action</h3>
            <p>Fast-paced, adrenaline-pumping action in every match.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Battlegrounds_Mobile_India_screenshot_3.jpg"
            alt="BGMI Gameplay 3"
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
