import React from "react";

import "./profile-page.css";
import { getName } from "../../utils";

export function ProfilePage({ user, followers }) {
  return (
    <div className="profile-page-container">
      <span className="heading-text">
        Welcome back,{" "}
        {getName(user, { displayShortName: true, displayUsername: false })}!
      </span>
      <span className="body-text">
        You have {followers} follower recommendation{followers === 1 ? "" : "s"}{" "}
        below.
      </span>
    </div>
  );
}
