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
              src="https://imgs.search.brave.com/EnD0kRl-RFZmbsPFg3pToBEI-ada6vkloDQXdktBPLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcG9y/dHNkaWdlc3QuaW4v/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDYvRmVhdHVyZXMt/T2YtUFVCRy1Nb2Jp/bGUtVXBkYXRlLTMu/OS1WZXJzaW9uLndl/YnA"
              alt="First slide"
              style={{
                maxHeight: "100vh",
                objectFit: "cover",
                objectPostion: "center",
              }}
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
          <h2>New BGMI Update – July 2025 (Version 3.9)</h2>
          <ul>
            <li>
              New Theme Mode: <strong>Transformers Mode</strong> — summon and
              battle as Optimus Prime or Megatron in the cyberpunk Neon Outpost
              zone!
            </li>
            <li>
              New Zone: <strong>Neon Outpost</strong> with locations like Arena,
              Black Market, Energy Plant, and Astro Den (melee-only). Includes
              hoverboards and anti-gravity spires. 
            </li>
            <li>
              Transformer Abilities:
              <ul>
                <li>
                  Optimus Prime (truck ↔ robot): Thermal Axe attack & Charge
                  Slam.
                </li>
                <li>Megatron (tank ↔ robot): Cannon Attack & Fusion Blast.</li>
                <li>
                  Special Duel Zone appears when both Titans clash.
                 
                </li>
              </ul>
            </li>
            <li>
              New Classic-Mode AR: <strong>ASM Abakan</strong> (5.56 mm,
              full-auto/burst/single, improved first two shots).
              
            </li>
            <li>
              Mobility & UI Enhancements: Sprint faster after med-kits, bike
              drifting with skid marks, pre-match plane cabin interactions.
              
            </li>
            <li>
              Graphics: Introducing “Super-Smooth” graphic settings for
              ultra-fluid gameplay. 
            </li>
            <li>
              New Royale Pass: <strong>A14 Royale Pass</strong> — packed with
              futuristic outfits, weapon skins, emotes, Elite-plus perks, and
              more. 
            </li>
            <li>
              3D Social Hub & Ranked Arena: Hang out in Central Plaza, perform
              emotes or join Ranked Arena from July 24 to September 2.
             
            </li>
            <li>
              Events: “BGMI x Transformers Prize Path” begins July 18—unlock
              exclusive cosmetic rewards and an Optimus Prime truck skin via the
              Prize Path. 
            </li>
            <li>Bug fixes and performance enhancements.</li>
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
