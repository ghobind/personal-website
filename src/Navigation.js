import React from "react";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="navigation ml-3">
      <NavLink to="/" className="brand" activeClassName="brand">
        Anthony Ghobind
      </NavLink>
      <NavLink to="/" className="default" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/" className="default" activeClassName="active">
        Projects
      </NavLink>
      <NavLink to="/" className="default" activeClassName="active">
        Qualifications
      </NavLink>
      <NavLink to="/" className="default" activeClassName="active">
        Contact
      </NavLink>
    </div>
  );
}
