import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Maps() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">BGMI Maps</h1>
      <Row>
        {/* Erangel Map */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              //   src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Erangel_map.png/500px-Erangel_map.png"
              alt="Erangel"
            />
            <Card.Body>
              <Card.Title>Erangel</Card.Title>
              <Card.Text>
                Erangel is the most iconic map in BGMI. It features a diverse
                environment with cities, military bases, and forests. A mix of
                long and short-range combat makes it the perfect map for both
                beginners and experienced players.
              </Card.Text>
              <Button
                variant="primary"
                href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
                target="_blank"
              >
                Explore Erangel
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Miramar Map */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Miramar_Map_Updated.jpg/800px-Miramar_Map_Updated.jpg"
              alt="Miramar"
            />
            <Card.Body>
              <Card.Title>Miramar</Card.Title>
              <Card.Text>
                Miramar is a desert map that offers intense combat with wide
                open spaces. The vast open terrain and fewer cover spots make it
                ideal for sniper battles. It’s perfect for strategic gameplay
                with long-range combat and ambushes.
              </Card.Text>
              <Button
                variant="primary"
                href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
                target="_blank"
              >
                Explore Miramar
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Sanhok Map */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sanhok_map.jpg/800px-Sanhok_map.jpg"
              alt="Sanhok"
            />
            <Card.Body>
              <Card.Title>Sanhok</Card.Title>
              <Card.Text>
                Sanhok is a smaller, fast-paced map designed for quick, intense
                matches. The tropical island environment creates a more
                vertical, close-quarters combat experience. Perfect for players
                who prefer fast action and immediate engagement with enemies.
              </Card.Text>
              <Button
                variant="primary"
                href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
                target="_blank"
              >
                Explore Sanhok
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Vikendi Map */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Vikendi_map_BGMI.jpg/800px-Vikendi_map_BGMI.jpg"
              alt="Vikendi"
            />
            <Card.Body>
              <Card.Title>Vikendi</Card.Title>
              <Card.Text>
                Vikendi is a snowy, winter-themed map that brings unique
                challenges like snow-covered buildings and slippery terrain.
                It's perfect for players who enjoy environmental obstacles and a
                mix of tactical combat with snowy conditions.
              </Card.Text>
              <Button
                variant="primary"
                href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
                target="_blank"
              >
                Explore Vikendi
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Livik Map */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Livik_map.jpg/800px-Livik_map.jpg"
              alt="Livik"
            />
            <Card.Body>
              <Card.Title>Livik</Card.Title>
              <Card.Text>
                Livik is a compact, high-paced map that introduces unique
                elements such as fast loot and intense close-range combat. The
                small map size makes the action happen very quickly, and you can
                expect frequent encounters with other players.
              </Card.Text>
              <Button
                variant="primary"
                href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
                target="_blank"
              >
                Explore Livik
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Karakin Map */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Karakin_map.jpg/800px-Karakin_map.jpg"
              alt="Karakin"
            />
            <Card.Body>
              <Card.Title>Karakin</Card.Title>
              <Card.Text>
                Karakin is a small, desert-themed map that emphasizes fast-paced
                gameplay. The environment is filled with structures that players
                can blow up, and the map's small size encourages quick
                confrontations and intense combat. Ideal for those who enjoy
                close combat with constant action.
              </Card.Text>
              <Button
                variant="primary"
                href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
                target="_blank"
              >
                Explore Karakin
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Maps;
