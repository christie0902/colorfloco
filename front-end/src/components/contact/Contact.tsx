import React, { useState } from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="contact-section">
      <Container>
        <Row>
          <Col className="d-flex-column justify-content-center col-sm-12 col-md-6 m-md-auto">
            <h2 className="contact_title">Contact Us</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-4 ms-5">
                <Form.Group as={Col} md="5" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="John"
                  />
                  <Form.Control.Feedback>
                    Please enter your first name!
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue="Doe"
                  />
                  <Form.Control.Feedback>
                    Please enter your last name!
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4 ms-5">
                <Form.Group as={Col} md="10" controlId="validationCustom03">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="a@mail.com"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4 ms-5">
                <Form.Group as={Col} md="10" controlId="validationCustom04">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your message"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your message!
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button className="contact_btn" type="submit">Submit</Button>
            </Form>
          </Col>
          <Col className="d-flex justify-content-center col-sm-12 col-lg-6">
            <div className="contact-image"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
