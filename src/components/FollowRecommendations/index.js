import React from "react";
import "./follow-recommendations.css";
import { ProfileCard } from "../ProfileCard";

export function FollowRecommendations({ users }) {
  return (
    <div className="follow-recommendations-container">
      {users.map(user => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}
