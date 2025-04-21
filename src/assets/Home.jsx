// import React from "react";
// import { Carousel, Container, Button, Row, Col } from "react-bootstrap";

// function Home() {
//   return (
//     <Container className="mt-4">
//       <h2 className="text-center mb-4">Welcome to BGMI Battlegrounds</h2>

//       {/* Carousel Section */}
//       <Carousel fade>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 rounded"
//             src="https://wallpapercave.com/wp/wp11028444.jpg"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>Erangel Awaits</h3>
//             <p>Drop in, gear up, and survive the battleground.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100 rounded"
//             src="https://wallpapercave.com/wp/wp11028461.jpg"
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Squad Up</h3>
//             <p>Play with your friends and dominate your enemies.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100 rounded"
//             src="https://wallpapercave.com/wp/wp11028446.jpg"
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h3>New Modes Available</h3>
//             <p>Experience the thrill of updated game modes and maps.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       {/* Download Buttons */}
//       <Row className="mt-5 text-center">
//         <Col md={6} className="mb-3">
//           <Button
//             variant="success"
//             size="lg"
//             href="https://play.google.com/store"
//             target="_blank"
//           >
//             📱 Download for Android
//           </Button>
//         </Col>
//         <Col md={6}>
//           <Button
//             variant="dark"
//             size="lg"
//             href="https://apps.apple.com/"
//             target="_blank"
//           >
//             🍏 Download for iOS
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Home;


// import React from "react";
// import { Carousel, Container, Button } from "react-bootstrap";

// function Home() {
//   return (
//     <Container className="mt-4">
//       <h2 className="text-center mb-4">Welcome to BGMI Battlegrounds</h2>

//       <Carousel fade>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 rounded"
//             src="https://wallpapercave.com/wp/wp11028444.jpg"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>Erangel Awaits</h3>
//             <p>Drop in, gear up, and survive the battleground.</p>
//             <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
//               <Button
//                 variant="success"
//                 href="https://play.google.com/store/apps/details?id=com.pubg.imobile"
            
//                 target="_blank"
//               >
//                 📱 Android
//               </Button>
//               <Button
//                 variant="light"
//                 href="https://apps.apple.com/"
//                 target="_blank"
//               >
//                 🍏 iOS
//               </Button>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100 rounded"
//             src="https://wallpapercave.com/wp/wp11028461.jpg"
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Squad Up</h3>
//             <p>Play with your friends and dominate your enemies.</p>
//             <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
//               <Button
//                 variant="success"
           
//                 href="https://play.google.com/store/apps/details?id=com.pubg.imobile"
//                 target="_blank"
//               >
//                 📱 Android
//               </Button>
//               <Button
//                 variant="light"
//                 href="https://apps.apple.com/"
//                 target="_blank"
//               >
//                 🍏 iOS
//               </Button>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100 rounded"
//             src="https://wallpapercave.com/wp/wp11028446.jpg"
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h3>New Modes Available</h3>
//             <p>Experience the thrill of updated game modes and maps.</p>
//             <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
//               <Button
//                 variant="success"
                
//                 href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share"
//                 target="_blank"
//               >
//                 📱 Android
//               </Button>
//               <Button
//                 variant="light"
//                 href="https://apps.apple.com/"
//                 target="_blank"
//               >
//                 🍏 iOS
//               </Button>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </Container>
//   );
// }

// export default Home;

import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-4">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp11232833.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
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
        <h2>🔥 New BGMI Update - April 2025</h2>
        <ul>
          <li>New Map: *Neon Mirage* with dynamic weather effects</li>
          <li>New Weapon: AMR Sniper - one shot, one kill!</li>
          <li>Royale Pass M14 - Win exclusive mythic outfits</li>
          <li>Bug fixes and performance improvements</li>
        </ul>
        <p className="text-warning">
          Update your app now to enjoy all the new features!
        </p>
      </div>
    </Container>
  );
}

export default Home;
