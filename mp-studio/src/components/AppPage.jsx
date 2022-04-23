import React from "react";
import "./AppPage.css";
import Header from "./Header";
import HomeFeed from "./HomeFeed";

function AppPage() {
  return (
    <div className="app-page">
      <Header />
      <HomeFeed />
    </div>
  );
}

export default AppPage;
