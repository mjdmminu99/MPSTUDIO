import React from "react";
import "./SideBarRow.css";

function SideBarRow({ title }) {
  return (
    <div className="side-bar-row">
      <p>{title}</p>
    </div>
  );
}

export default SideBarRow;
