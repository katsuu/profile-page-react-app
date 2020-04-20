import React from "react";

import "./profile-card.css";

import { getName, capitalise, name } from "../../utils";

console.log('name', name);
export function ProfileCard({ user }) {
  return (
    <div className="profile-card-container">
      <div className="profile-card-user">
        <div className="profile-card-user-avatar">
          <img src={user.avatar} alt="profile" />
        </div>

        <div className="profile-card-user-details">
          <span className="heading-text">
            {capitalise(getName(user, { displayUsername: true }))}
          </span>
          <span className="body-text">{user.bio}</span>
        </div>
      </div>

      <footer className="profile-card-footer">
        <button className="button-primary">Follow</button>
      </footer>
    </div>
  );
}
