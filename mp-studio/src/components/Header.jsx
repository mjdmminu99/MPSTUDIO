import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-empty"></div>
      <div className="header-content">
        <p className="btn-signup">Sign Up</p>
        <p className="btn-login">Log In</p>
      </div>
    </div>
  );
}

export default Header;
