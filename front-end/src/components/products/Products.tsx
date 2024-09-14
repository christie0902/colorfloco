import { Carousel, Button } from "react-bootstrap";
import CarouselSlide from "../carouselSlide/CarouselSlide";

const scarfURL = "/scarf001.png";

const Products = () => {
  return (
    <div className="product-container">
      <h1>All Products</h1>
      <img src={scarfURL} className="placeholder-scarf-accent" alt="" />
      <Carousel >
        <Carousel.Item>
          <CarouselSlide></CarouselSlide>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselSlide></CarouselSlide>
        </Carousel.Item>
      </Carousel>
      <Button variant="outline-dark" className="hero-btn rounded-5 outline">
        Buy on Etsy
      </Button>
    </div>
  );
};

export default Products;
