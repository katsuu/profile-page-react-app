import React from "react";

import "./profile-page.css";
import { getName } from "../../utils";

export function ProfilePage({ user }) {
  return (
    <div className="container">
      <span className="heading-text">
        Welcome back,{" "}
        {getName(user, { displayShortName: true, displayUsername: false })}!
      </span>
    </div>
  );
}
