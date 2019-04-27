import React from "react";
import "./style.css";
// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export default function Footer({children }) {
  return <div className="footer">{children}</div>;
}

