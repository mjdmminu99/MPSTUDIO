import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";


function SideBar() {
  return (
    <div className="sidebar">

    <img 
    className="logo"
    src="/images/er.jpg" alt=""/>

      <SidebarItem selected title="Home" />
      <SidebarItem title="Learn" />
      <SidebarItem title="Schedule" />
      <SidebarItem title="Choreographers " />
      <SidebarItem title="About Us " />
    </div>
  );
}

export default SideBar;
