import React from "react";

export default function Header() {
  return (
    <header>
      <div className="img-container"></div>
      <div className="about">
        <h3>About</h3>
        <p className="about-text">
          random text about me, bla bla bla words lol
        </p>
        <ul className="about-links">
          <li>gh</li>
          <li>linkedin</li>
        </ul>
      </div>
    </header>
  );
}
