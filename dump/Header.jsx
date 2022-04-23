import React from "react";
import "./Header.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import SettingsApplicationsTwoToneIcon from "@mui/icons-material/SettingsApplicationsTwoTone";
import CircleNotificationsTwoToneIcon from "@mui/icons-material/CircleNotificationsTwoTone";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo-class">
          <img src="https://cdn-icons-png.flaticon.com/512/708/708746.png" alt="" />
          <h3>MP Studio</h3>
        </div>
      </div>
      <div className="header-input">
        <input type="text" />
        <SearchTwoToneIcon className="search-btn" />
      </div>
      <div className="header-right">
        <SettingsApplicationsTwoToneIcon className="header-icon" />
        <CircleNotificationsTwoToneIcon className="header-icon" />
        <Avatar
          alt="Avatar"
          src="https://i.pinimg.com/564x/22/ae/0a/22ae0ad4efff1c7b9c7b754f384b209c.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
