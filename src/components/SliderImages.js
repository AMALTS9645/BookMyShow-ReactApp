import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
     <Carousel className="rounded" style={{width:"100%", padding:"10px"}} variant="dark" interval="2000" wrap indicatorLabels="round">
  <Carousel.Item>
    <img
      className="d-block w-100 rounded"
      src="./carousal1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 rounded"
      src="./carousal2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 rounded"
      src="./carousal3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default SliderImages;
