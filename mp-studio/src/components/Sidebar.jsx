import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";


function SideBar() {
  return (
    <div className="sidebar">

    <img 
    className="logo"
    src="/images/mps.png" alt=""/>

      <SidebarItem selected title="Home" />
      <SidebarItem title="Learn" />
      <SidebarItem title="Schedule" />
      <SidebarItem title="Choreographers " />
      <SidebarItem title="About Us " />
    </div>
  );
}

export default SideBar;
