import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/img_sliders/1.JPG";
// import img2 from "./assets/img_sliders/2.JPG";
import img3 from "./assets/img_sliders/3.JPG";
import profile from "./assets/profile/profile_pic.jpg";
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <div className="carousel page">
      <Carousel
        controls={false}
        indicators={false}
        interval={3000}
        pause={false}
      >
        <Carousel.Item>
          <img className="slider-img" src={img1} alt="first" />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="slider-img" src={img3} alt="second" />
        </Carousel.Item> */}
      </Carousel>
      <div className="profile-text">
        <div className="profile-text-subtext">
          <div className="profile-text-left">
            I am a</div>
          <div className="profile-text-right">
            <Typewriter
              options={{
                strings: ['Software Engineer', 'Full Stack Web Developer', 'Gamer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="profile-text-name">Anthony Ghobind</div>
      </div>
      <img className="profile-img" src={profile} alt="profile" />
    </div>
  );
}
