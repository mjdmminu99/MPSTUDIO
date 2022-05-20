import React from "react";
import SidebarItem from "./SidebarItem";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import {
  Link
} from "react-router-dom";

import "./Sidebar.css";


function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="logo"
        src="/images/er.jpg" alt=""/>

      <Link to="/"><SidebarItem Icon={HomeRoundedIcon} selected title="Home"/></Link>
      <Link to="/learn"> <SidebarItem Icon={LightbulbRoundedIcon} title="Learn"/></Link>
      <Link to="/schedule"> <SidebarItem Icon={EventNoteRoundedIcon} title="Schedule"/> </Link>
      <Link to="/choreographers"><SidebarItem Icon={PersonSearchRoundedIcon} title="Choreographers "/> </Link>
      <Link to="/coach"><SidebarItem Icon={CastForEducationIcon} title="Teach Class "/> </Link>
      <Link to="/mp_pass"> <SidebarItem Icon={AddShoppingCartRoundedIcon} title="MP Pass "/></Link>
      <Link to="/about"> <SidebarItem Icon={InfoRoundedIcon} title="About Us "/></Link>
    </div>
  );
}

export default SideBar;
