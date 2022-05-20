import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  return (

    <div className="header">
      <div className="header-empty"></div>
      <div className="header-content">
        <Link to={'/signup'} className="btn-signup"><p className="btn-signup">Sign Up</p></Link>
        <Link to={'/login'} className="btn-login"><p className="btn-login">LogIn</p></Link>
      </div>
    </div>
  );
}

export default Header;
