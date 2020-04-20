import React from "react";
import "./styles.css";

import { Navbar } from "./components/Navbar";
import { ProfilePage } from "./components/ProfilePage";
import { ProfileCard } from "./components/ProfileCard";
import { FollowRecommendations } from "./components/FollowRecommendations";
import data from "./data";

export default function App() {
  return (
    <div className="app">
      <Navbar user={data.user} />
      <div className="page">
        {/* <ProfilePage /> */}
        <FollowRecommendations users={data.followRecommendations} />
      </div>
    </div>
  );
}
