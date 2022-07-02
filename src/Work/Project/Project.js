import React from "react";
import "./Project.css";

export default function Project(props) {
  return (
    <div className="project">
      <img className="project-img" src={props.img}></img>
      <div className="title-links">
        <h3>Project title</h3>
        <ul>
          <li>
            <a href={props.ghLink} className="gh-link">
              <i className="devicon-github-original colored"></i>
            </a>
          </li>
          <li>
            <a href={props.projectLink}>
              <img className="link-icon" src={require("./link.png")}></img>
            </a>
          </li>
        </ul>
      </div>
      <p className="project-description">
        Short project description. Maybe two sentences?
      </p>
    </div>
  );
}
