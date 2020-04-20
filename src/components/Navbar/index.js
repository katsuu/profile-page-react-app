import React from "react";
import "./navbar.css";

import { getName } from "../../utils";

export function Navbar({ user }) {
  return (
    <nav className="navbar-container">
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="/">Home</a>
        </li>
        <li className="navbar-link">
          <a href="/">About</a>
        </li>
        <li className="navbar-link">
          <a href="/">Contact</a>
        </li>
      </ul>

      <div className="navbar-profile">
        <span className="navbar-profile-name">
          {getName(user, { displayShortName: true, hideName: true })}
        </span>

        <div className="navbar-profile-avatar">
          <img
            src="https://avatars2.githubusercontent.com/u/2334951?v=4"
            alt="profile"
          />
        </div>
      </div>
    </nav>
  );
}
