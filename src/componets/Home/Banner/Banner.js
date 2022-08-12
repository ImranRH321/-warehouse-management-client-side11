import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { Container } from "react-bootstrap";

const Banner = () => {
  const banner1 =
    "https://media.istockphoto.com/photos/multicolored-three-dimensional-modern-cars-picture-id498611563?k=20&m=498611563&s=612x612&w=0&h=pNfBKXsNuybiYVGP7vCPGrRLZR5jWmt7FmPaOhgTAzM=";

  const banner2 =
    "https://html.merku.love/rotors/assets/images/blog/img_08.jpg";
  const banner3 =
    "https://st2.depositphotos.com/3591429/7915/i/950/depositphotos_79159116-stock-photo-cars-contemporary-drive-vehicle.jpg";

  const banner4 =
    "https://i.pinimg.com/originals/f1/88/f3/f188f3dd7898adec4af192e125eaca51.gif";
  const banner5 =
    "https://thumbs.gfycat.com/FairImmaterialAxisdeer-max-1mb.gif";
  return (
    <div style={{ height: "500px" }} className="mt-3">
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100 "
              src={banner1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={banner2}
              alt="First second"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={banner3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={banner4}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "500px" }}
              className="d-block w-100"
              src={banner5}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
