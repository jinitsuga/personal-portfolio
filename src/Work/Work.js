import React from "react";
import "./Work.css";
import Project from "./Project/Project";

export default function Work() {
  return (
    <section>
      <h3 className="work-title">Some of my work</h3>
      <div className="projects-container">
        <div className="project-container">
          <Project />
        </div>
        <div className="project-container">
          <Project />
        </div>
        <div className="project-container">
          <Project />
        </div>
        <div className="project-container">
          <Project />
        </div>
      </div>
    </section>
  );
}
