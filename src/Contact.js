import React from "react";

import github from "./assets/contact/github-brands.svg";
import linkedin from "./assets/contact/linkedin-brands.svg";
import resume from "./assets/contact/download-solid.svg";
import email from "./assets/contact/envelope-regular.svg";

export default function Contact() {
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
  return (
    <div className="contact-container contact-margins" id="contact">
      <h3 className="header mb-5 text-center">Contact</h3>
      <div className="row mb-5 justify-content-center">
        {contacts.map((contact) => {
          return (
            <div key={contact.name} className="mx-3">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="contact-icon"
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
            <img className="contact-icon" src={resume} alt="resume" />
          </a>
        </div>
      </div>
      <div className="text-center">&copy; 2021 Anthony Ghobind</div>
    </div>
  );
}
