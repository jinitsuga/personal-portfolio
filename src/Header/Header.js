import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <img
        src={require("./camera.jpg")}
        alt="woman holding camera"
        className="img-container"
      ></img>
      <div className="about">
        <h3 className="about-title">About</h3>
        <p className="about-text">
          Thranduil conjurer cutting your kin. Feels cry Lórien prisoners
          marched creep minds wander? Store Orcrist wanes brown purring less
          rascals want sorceress city burns? éored woods bond birthday pale
          evacuate Ingrates.
        </p>

        <ul className="about-links">
          <li>
            <a href="https://github.com/jinitsuga">
              <i className="devicon-github-original colored"></i>
            </a>
          </li>
          <li>
            <i class="devicon-linkedin-plain"></i>
          </li>
        </ul>
      </div>
    </header>
  );
}
