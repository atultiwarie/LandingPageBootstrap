import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <h2 className="text-center mb-4">Contact Us</h2>
                <Form
                  action="https://formsubmit.co/your-email@example.com"
                  method="POST"
                >
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Type your message..."
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    type="submit"
                    className="w-100 fw-bold"
                  >
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
