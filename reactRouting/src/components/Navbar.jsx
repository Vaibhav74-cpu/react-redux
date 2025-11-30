import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../components/Navbar.css";

function Navbar() {
  return (
    <div>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <NavLink
            to="/"
            className={(isActive) => (isActive ? "active-link" : " ")}
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <Link to="/About">About</Link>
        </li> */}
        <li>
          <NavLink
            to="/About"
            className={(isActive) => (isActive ? "active-link1" : " ")}
          >
            About
          </NavLink>
        </li>

        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
