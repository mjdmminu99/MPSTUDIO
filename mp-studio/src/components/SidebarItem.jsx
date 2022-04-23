import React from "react";
import "./SidebarItem.css";

function SidebarItem({ selected, title }) {
  return (
    <div className={`sidebar-item ${selected && "selected"}`}>
      <p className="item-title">{title}</p>
    </div>
  );
}

export default SidebarItem;
