import React from "react";
import "./Pages.css";
import SideBar from "../components/Sidebar";
import AppPage from "../components/AppPage";
import Header from "../components/Header";
import HomeFeed from "../components/HomeFeed";
function AboutUs() {
  return (
    <div className="app">
      <SideBar />
      <div className="app-page">
        <h1>About US!</h1>
      </div>
    </div>
  );
}

export default AboutUs;
