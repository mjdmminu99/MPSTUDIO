import React from "react";
import "./Pages.css";
import SideBar from "../components/Sidebar";
import AppPage from "../components/AppPage";


function HomePage() {
  return (
    <div className="app">
      <SideBar />
      <AppPage />
      
      
    </div>
  );
}

export default HomePage;
