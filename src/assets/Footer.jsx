
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container>
        <Row className="text-center">
          <Col md={6} className="mb-2 mb-md-0">
            <p className="mb-0">© 2025 BGMI Clone. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <p className="mb-0">
              Follow us on: &nbsp;
              <a
                href="https://www.instagram.com/battlegroundsmobilein_official/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none me-2"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/BattlegroundsMobileIN?home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none me-2"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/channel/UCe31NPEeRGO0hcznx6Tdb-g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none me-2"
              >
                YouTube
              </a>
              <a
                href="https://discord.com/invite/battlegroundsmobilein"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                Discord
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
