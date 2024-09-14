import { Col, Container, Row } from "react-bootstrap";

const CarouselSlide = () => {
  return (
    <>
      <Container>
        <Row>
          <Col border="primary" style={{ border: "2px solid red" }}>
            Left
          </Col>
          <Col border="primary" style={{ border: "2px solid red" }}>
            Right
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarouselSlide;
