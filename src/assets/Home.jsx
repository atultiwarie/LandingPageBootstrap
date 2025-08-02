import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";

function Home() {
  return (
    <div style={{ paddingTop: "40px" }}>
     
      <Container className="mt-4">
        
        <Carousel fade indicators={false} controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/736x/34/f7/e4/34f7e487fe384f24259712e30abf6313.jpg"
              alt="First slide"
              style={{ maxHeight: "100vh", objectFit: "cover",objectPostion: "center" }}
            />
            <Carousel.Caption className="bg-white bg-opacity-50 p-3 rounded text-dark">
              <h3>BGMI - Play Now</h3>
              <p>Experience the battleground with new maps and weapons!</p>
              <div>
                <Button
                  variant="success"
                  href="https://play.google.com/store/apps/details?id=com.pubg.imobile"
                  target="_blank"
                >
                  Download for Android
                </Button>
                <Button
                  variant="light"
                  className="ms-2"
                  href="https://apps.apple.com/in/app/battlegrounds-mobile-india/id1526436837"
                  target="_blank"
                >
                  Download for iOS
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Update Section */}
        <div className="mt-5 bg-dark text-light p-4 rounded">
          <h2>New BGMI Update - April 2025</h2>
          <ul>
            <li>
              New Map: <strong>Neon Mirage</strong> with dynamic weather effects
            </li>
            <li>New Weapon: AMR Sniper - one shot, one kill!</li>
            <li>Royale Pass M14 - Win exclusive mythic outfits</li>
            <li>Bug fixes and performance improvements</li>
          </ul>
          <p className="text-warning">
            Update your app now to enjoy all the new features!
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Home;
