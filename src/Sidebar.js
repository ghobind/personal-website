import React, { useState } from "react";
import "./Sidebar.css";
import Bars from "./assets/sidebar/bars-solid.svg";
import Home from "./assets/sidebar/home-solid.svg";
import About from "./assets/sidebar/user-solid.svg";
import Skills from "./assets/sidebar/clipboard-list-solid.svg";
import Work from "./assets/sidebar/briefcase-solid.svg";
import Project from "./assets/sidebar/archive-solid.svg";
import Contact from "./assets/sidebar/envelope-solid.svg";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Sidebar() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 0;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div className="outer-container">
      <div className="sidebar-container">
        <img
          className="sidebar-img"
          clicked={click}
          onClick={handleClick}
          src={Bars}
          alt="Bars"
        />
        <ul className={click ? "slick-bar-active" : "slick-bar"}>
          <NavLink
            className="sidebar-item"
            activeClassName="sidebar-item"
            smooth
            to="#top"
            scroll={scrollWithOffset}
          >
            <img className="sidebar-img" src={Home} alt="Home" />
            <span className={click ? "sidebar-text-active" : "sidebar-text"}>
              Home
            </span>
          </NavLink>
          <NavLink
            className="sidebar-item"
            activeClassName="sidebar-item"
            smooth
            to="/#about"
            scroll={scrollWithOffset}
          >
            <img className="sidebar-img" src={About} alt="About" />
            <span className={click ? "sidebar-text-active" : "sidebar-text"}>
              About
            </span>
          </NavLink>
          <NavLink
            className="sidebar-item"
            activeClassName="sidebar-item"
            smooth
            to="/#skills"
            scroll={scrollWithOffset}
          >
            <img className="sidebar-img" src={Skills} alt="Skills" />
            <span className={click ? "sidebar-text-active" : "sidebar-text"}>
              Skills
            </span>
          </NavLink>
          <NavLink
            className="sidebar-item"
            activeClassName="sidebar-item"
            smooth
            to="/#experience"
            scroll={scrollWithOffset}
          >
            <img className="sidebar-img" src={Work} alt="Experience" />
            <span className={click ? "sidebar-text-active" : "sidebar-text"}>
              Experience
            </span>
          </NavLink>
          <NavLink
            className="sidebar-item"
            activeClassName="sidebar-item"
            smooth
            to="/#projects"
            scroll={scrollWithOffset}
          >
            <img className="sidebar-img" src={Project} alt="Projects" />
            <span className={click ? "sidebar-text-active" : "sidebar-text"}>
              Projects
            </span>
          </NavLink>
          <NavLink
            className="sidebar-item"
            activeClassName="sidebar-item"
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
          >
            <img className="sidebar-img" src={Contact} alt="Contact" />
            <span className={click ? "sidebar-text-active" : "sidebar-text"}>
              Contact
            </span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
