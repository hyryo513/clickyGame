import React from "react";
import "./style.css";

function Header({ children }) {
  return (
    <div
      className="header"
    >
      {children}
    </div>
  );
}

export default Header;
