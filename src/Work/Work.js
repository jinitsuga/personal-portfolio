import React from "react";
import "./Work.css";
import Project from "./Project/Project";

export default function Work() {
  return (
    <section>
      <h3 className="work-title">Some of my work</h3>
      <div className="projects-container">
        <div className="project-container">
          <Project img={require("../images/project.jpg")} />
        </div>
        <div className="project-container">
          <Project img={require("../images/smiles.jpg")} />
        </div>
        <div className="project-container">
          <Project img={require("../images/landscape.jpg")} />
        </div>
        <div className="project-container">
          <Project img={require("../images/memes.jpg")} />
        </div>
      </div>
    </section>
  );
}
