import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  return (

    <div className="header">
      <div className="header-empty"></div>
      <div className="header-content">
        <Link to={'/signup'} className="btn-signup"><p className="btn-signup">Sign Up</p></Link>
        <p className="btn-login">Log In</p>
      </div>
    </div>
  );
}

export default Header;
