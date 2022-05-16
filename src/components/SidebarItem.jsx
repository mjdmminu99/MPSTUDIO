import React from "react";
import "./SidebarItem.css";

function SidebarItem({  selected, Icon, title }) {
  return (
    <div className={`sidebar-item ${selected && "selected"}`}>
    <Icon className="sidebarItem_icon"/>
      <p className="item-title">{title}</p>
    </div>
  );
}

export default SidebarItem;
