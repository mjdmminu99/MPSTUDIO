import React from "react";
import SidebarItem from "./SidebarItem";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import "./Sidebar.css";



function SideBar() {
  return (
    <div className="sidebar">

    <img 
    className="logo"
    src="/images/er.jpg" alt=""/>

      <SidebarItem Icon={HomeRoundedIcon} selected title="Home" />
      <SidebarItem Icon={LightbulbRoundedIcon} title="Learn" />
      <SidebarItem Icon={EventNoteRoundedIcon} title="Schedule" />
      <SidebarItem Icon={PersonSearchRoundedIcon} title="Choreographers " />
      <SidebarItem Icon={InfoRoundedIcon} title="About Us " />
    </div>
  );
}

export default SideBar;
