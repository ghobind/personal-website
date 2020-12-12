import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/img_sliders/1.JPG";
// import img2 from "./assets/img_sliders/2.JPG";
import img3 from "./assets/img_sliders/3.JPG";
import profile from "./assets/profile/IMG_0413.jpg";

export default function Home() {
  return (
    <div className="carousel">
      <Carousel
        controls={false}
        indicators={false}
        interval={3000}
        pause={false}
      >
        <Carousel.Item>
          <img className="slider-img" src={img1} alt="first" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider-img" src={img3} alt="second" />
        </Carousel.Item>
      </Carousel>
      <div className="profile-text">
        <div className="profile-text-name">Anthony Ghobind</div>
        <div className="profile-text-subtext">
          Software Engineer | Full Stack Web Developer
        </div>
      </div>
      <img class="profile-img" src={profile} alt="profile" />
    </div>
  );
}
