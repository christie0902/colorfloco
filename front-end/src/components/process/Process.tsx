import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const Process = () => {
  return (
    <div className="process-section">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center col-sm-12 col-lg-6">
            <Image className="card_image" src="\process-image.jpg" alt="process"/>
          </Col>
          <Col className="d-flex justify-content-center col-sm-12 col-md-6 m-md-auto">
            <Card className="card">
              <Card.Title className="card_title">Creation Process</Card.Title>

              <Card.Text className="card_text">
                Our process is meticulous and our designs are inspired by the
                natural world, ensuring that no two scarves are ever the same.
                <br/><br/>
                From the selection of the finest silk to the intricate marbling
                techniques, every step is performed with care and precision.
                Join us in celebrating the beauty of handmade artistry and adorn
                yourself with a piece that tells a story.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Process;
