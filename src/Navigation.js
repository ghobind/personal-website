import React from "react";
// import { NavLink } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
export default function Navigation() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <div className="navigation pl-3 pb-3 pt-3 sticky-top" id="navigation">
      <NavLink
        smooth
        to="#top"
        className="default"
        activeClassName="active"
        scroll={scrollWithOffset}
      >
        Home
      </NavLink>
      <NavLink
        smooth
        to="/#about"
        className="default"
        activeClassName="active"
        scroll={scrollWithOffset}
      >
        About
      </NavLink>
      <NavLink
        smooth
        to="/#projects"
        className="default"
        activeClassName="active"
        scroll={scrollWithOffset}
      >
        Projects
      </NavLink>
      <NavLink
        smooth
        to="/#qualifications"
        className="default"
        activeClassName="active"
        scroll={scrollWithOffset}
      >
        Qualifications
      </NavLink>
      <NavLink
        smooth
        to="/#contact"
        className="default"
        activeClassName="active"
        scroll={scrollWithOffset}
      >
        Contact
      </NavLink>
    </div>
  );
}
