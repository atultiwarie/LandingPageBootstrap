import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Array of BGMI map data
const bgmiMaps = [
  {
    name: "Erangel",
    image:
      "https://i.pinimg.com/736x/8a/1d/de/8a1dde4e435aa1450b6c7df84a77ffff.jpg",
    description:
      "Erangel is the most iconic map in BGMI. It features a diverse environment with cities, military bases, and forests. A mix of long and short-range combat makes it the perfect map for both beginners and experienced players.",
  },
  {
    name: "Miramar",
    image:
      "https://i.pinimg.com/736x/85/ac/88/85ac889c75747b7f675fae8cbe937395.jpg",
    description:
      "Miramar is a desert map that offers intense combat with wide open spaces. The vast open terrain and fewer cover spots make it ideal for sniper battles. It’s perfect for strategic gameplay with long-range combat and ambushes.",
  },
  {
    name: "Sanhok",
    image:
      "https://i.pinimg.com/736x/51/27/cb/5127cb078186c4374cf42c4ea54fe604.jpg",
    description:
      "Sanhok is a smaller, fast-paced map designed for quick, intense matches. The tropical island environment creates a more vertical, close-quarters combat experience. Perfect for players who prefer fast action and immediate engagement with enemies.",
  },
  {
    name: "Vikendi",
    image:
      "https://i.pinimg.com/736x/90/e5/1d/90e51df2a6ac7756c97ba463dc64aabc.jpg",
    description:
      "Vikendi is a snowy, winter-themed map that brings unique challenges like snow-covered buildings and slippery terrain. It's perfect for players who enjoy environmental obstacles and a mix of tactical combat with snowy conditions.",
  },
  {
    name: "Livik",
    image:
      "https://i.pinimg.com/736x/95/ef/37/95ef37b207db5b30845c136255892148.jpg",
    description:
      "Livik is a compact, high-paced map that introduces unique elements such as fast loot and intense close-range combat. The small map size makes the action happen very quickly, and you can expect frequent encounters with other players.",
  },
  {
    name: "Karakin",
    image: "https://cdn2.gamermaps.net/maps/pubg/terrain/2601/1/0/t_1.jpg",
    description:
      "Karakin is a small, desert-themed map that emphasizes fast-paced gameplay. The environment is filled with structures that players can blow up, and the map's small size encourages quick confrontations and intense combat.",
  },
];

function Maps() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">BGMI Maps</h1>
      <Row>
        {bgmiMaps.map((map, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={map.image} alt={map.name} />
              <Card.Body>
                <Card.Title>{map.name}</Card.Title>
                <Card.Text>{map.description}</Card.Text>
                <Button
                  variant="primary"
                  href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
                  target="_blank"
                >
                  Explore {map.name}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Maps;
