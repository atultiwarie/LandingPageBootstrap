import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark w-100">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://www.battlegroundsmobileindia.com/common/img/common/logo.png"
            alt="BGMI Logo"
            width="auto"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="w-100">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="px-md-4">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-md-3">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/maps" className="px-md-3">
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
