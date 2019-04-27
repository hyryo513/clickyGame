import React from "react";

function Nav(props) {
  let message;
  if (props.status === "start") {
    message = "Click an image to begin!"
  }
  else if (props.status === "end") {
    message = "You guessed incorrectly!"
  }
  else {
    message = "You guessed correctly!"
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li>
          {message}
        </li>
        <li>
          Score:&nbsp;{props.score}&nbsp;|&nbsp;Top Score:&nbsp;{props.topScore}
        </li>
      </ul> 
    </nav>
  );
}

export default Nav;
