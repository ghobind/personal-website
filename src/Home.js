import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/img_sliders/1.jpg";
import img2 from "./assets/img_sliders/2.jpg";
import img3 from "./assets/img_sliders/3.jpg";
import img4 from "./assets/img_sliders/chihuly.jpg";
import img5 from "./assets/img_sliders/golden_gate.jpg";
import img6 from "./assets/img_sliders/IMG-0036.jpg";
import img7 from "./assets/img_sliders/IMG-1531.jpg";
import img8 from "./assets/img_sliders/la_skyline.jpg";
import img9 from "./assets/img_sliders/library.jpg";
import img10 from "./assets/img_sliders/space_needle.jpg";
import img11 from "./assets/img_sliders/sunset.jpg";
import img12 from "./assets/img_sliders/twin_peaks.jpg";
import img13 from "./assets/img_sliders/wall.jpg";
import img14 from "./assets/img_sliders/waterfall.jpg";
import Typewriter from "typewriter-effect";

import github from "./assets/contact/github-brands.svg";
import linkedin from "./assets/contact/linkedin-brands.svg";
import resume from "./assets/contact/download-solid.svg";
import email from "./assets/contact/envelope-regular.svg";

export default function Home() {
  const contacts = [
    {
      name: "github",
      icon: github,
      link: "https://github.com/ghobind",
    },
    {
      name: "linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/anthony-ghobind/",
    },
    {
      name: "email",
      icon: email,
      link: "mailto:anthonyghobind@gmail.com",
    },
  ];
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  return (
    <div className="carousel page">
      <Carousel
        controls={false}
        indicators={true}
        interval={5000}
        pause={false}
      >
        {images.map((image, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="slider-img"
                src={image}
                alt="carousel-slideshow"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="profile-text">
        <div className="profile-text-subtext">
          <div className="profile-text-left">I am a</div>
          <div className="profile-text-right">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Full Stack Web Developer",
                  "Gamer",
                  "Car Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="profile-text-name">Anthony Ghobind</div>
        <div className="row mb-5">
          {contacts.map((contact) => {
            return (
              <div key={contact.name} className="mx-3">
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="home-contact-icon"
                    src={contact.icon}
                    alt={contact.name}
                  />
                </a>
              </div>
            );
          })}
          <div className="mx-3">
            <a
              href="/Resume_Anthony_Ghobind.pdf"
              download="Resume_Anthony_Ghobind.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="home-contact-icon" src={resume} alt="resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
