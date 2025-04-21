// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";


// function NavScrollExample() {
//   return (
//     <Navbar expand="lg" className="bg-dark navbar-dark w-100">
//       <Container fluid>
//         <Navbar.Brand href="#">
//           <img
//             src="https://www.battlegroundsmobileindia.com/common/img/common/logo.png"
//             alt="BGMI Logo"
//             width="auto"
//             height="40"
//             className="d-inline-block align-top"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll" className="w-100">
//           <Nav className="me-auto">
//             <Nav.Link href="#action1" className="px-md-4">
//               Home
//             </Nav.Link>
//             <Nav.Link href="#action2" className="px-md-3">
//               About Us
//             </Nav.Link>
//             <Nav.Link href="#action3" className="px-md-3">
//               Contact
//             </Nav.Link>
//             <Nav.Link href="#action4" className="px-md-3">
//               Maps
//             </Nav.Link>
//           </Nav>



//           <div className="d-flex align-items-center ms-auto flex-nowrap">
//             <Form className="d-flex ms-3">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//             <Nav className="d-flex">
//               <Nav.Link
//                 href="https://www.instagram.com/battlegroundsmobilein_official/#"
//                 target="_blank"
//                 className="px-md-3"
//               >
//                 <img
//                   src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_i_w.png"
//                   alt="Instagram"
//                   width="30"
//                   height="30"
//                   style={{
//                     transition: "transform 0.3s ease",
//                     cursor: "pointer",
//                   }}
//                   onMouseOver={(e) =>
//                     (e.currentTarget.style.transform = "scale(1.5)")
//                   }
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.transform = "scale(1)")
//                   }
//                 />
//               </Nav.Link>
//               <Nav.Link
//                 href="https://www.facebook.com/BattlegroundsMobileIN?home"
//                 target="_blank"
//                 className="px-md-3"
//               >
//                 <img
//                   src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_f_w.png"
//                   alt="Facebook"
//                   width="30"
//                   height="30"
//                   style={{
//                     transition: "transform 0.3s ease",
//                     cursor: "pointer",
//                   }}
//                   onMouseOver={(e) =>
//                     (e.currentTarget.style.transform = "scale(1.5)")
//                   }
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.transform = "scale(1)")
//                   }
//                 />
//               </Nav.Link>
//               <Nav.Link
//                 href="https://www.youtube.com/channel/UCe31NPEeRGO0hcznx6Tdb-g"
//                 target="_blank"
//                 className="px-md-3"
//               >
//                 <img
//                   src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_y_w.png"
//                   alt="YouTube"
//                   width="30"
//                   height="30"
//                   style={{
//                     transition: "transform 0.3s ease",
//                     cursor: "pointer",
//                   }}
//                   onMouseOver={(e) =>
//                     (e.currentTarget.style.transform = "scale(1.5)")
//                   }
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.transform = "scale(1)")
//                   }
//                 />
//               </Nav.Link>
//               <Nav.Link
//                 href="https://discord.com/invite/battlegroundsmobilein"
//                 target="_blank"
//                 className="px-md-3"
//               >
//                 <img
//                   src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_d_w.png"
//                   alt="Discord"
//                   width="30"
//                   height="30"
//                   style={{
//                     transition: "transform 0.3s ease",
//                     cursor: "pointer",
//                   }}
//                   onMouseOver={(e) =>
//                     (e.currentTarget.style.transform = "scale(1.5)")
//                   }
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.transform = "scale(1)")
//                   }
//                 />
//               </Nav.Link>
//             </Nav>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;


import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark w-100">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://www.battlegroundsmobileindia.com/common/img/common/logo.png"
            alt="BGMI Logo"
            width="auto"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* 🔁 CHANGED: Social icons added BEFORE the toggle button */}
        <div className="d-flex align-items-center ms-auto order-lg-last">
          <Nav className="d-flex flex-row me-2">
            {/* 🔁 CHANGED: flex-row keeps them horizontal even on small screens */}
            {[
              {
                href: "https://www.instagram.com/battlegroundsmobilein_official/#",
                alt: "Instagram",
                src: "https://www.battlegroundsmobileindia.com/common/img/btn/sns_i_w.png",
              },
              {
                href: "https://www.facebook.com/BattlegroundsMobileIN?home",
                alt: "Facebook",
                src: "https://www.battlegroundsmobileindia.com/common/img/btn/sns_f_w.png",
              },
              {
                href: "https://www.youtube.com/channel/UCe31NPEeRGO0hcznx6Tdb-g",
                alt: "YouTube",
                src: "https://www.battlegroundsmobileindia.com/common/img/btn/sns_y_w.png",
              },
              {
                href: "https://discord.com/invite/battlegroundsmobilein",
                alt: "Discord",
                src: "https://www.battlegroundsmobileindia.com/common/img/btn/sns_d_w.png",
              },
            ].map(({ href, alt, src }) => (
              <Nav.Link href={href} target="_blank" className="px-1" key={alt}>
                <img
                  src={src}
                  alt={alt}
                  width="30"
                  height="30"
                  style={{
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.5)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </Nav.Link>
            ))}
          </Nav>
        </div>

        {/* 🔁 CHANGED: Moved toggle AFTER social icons */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="w-100">
          <Nav className="me-auto">
            <Nav.Link href="#action1" className="px-md-4">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="px-md-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3" className="px-md-3">
              Contact
            </Nav.Link>
            <Nav.Link href="#action4" className="px-md-3">
              Maps
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center ms-auto flex-nowrap">
            <Form className="d-flex ms-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
