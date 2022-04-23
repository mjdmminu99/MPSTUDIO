import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";

function SideBar() {
  return (
    <div className="side-bar">
      <SideBarRow className="side-bar-item" title="Home" />
      <SideBarRow className="side-bar-item" title="Learn" />
      <SideBarRow className="side-bar-item" title="Schedule" />
      <SideBarRow className="side-bar-item" title="Choreographers" />
    </div>
  );
}

export default SideBar;
