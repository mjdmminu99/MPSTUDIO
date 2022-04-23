import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";

function SideBar() {
  return (
    <div className="sidebar">
      <SidebarItem selected title="Home" />
      <SidebarItem title="Learn" />
      <SidebarItem title="Schedule" />
      <SidebarItem title="Choreographers " />
    </div>
  );
}

export default SideBar;
