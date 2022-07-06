import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <h3>Contact me! </h3>
        <p>
          If you think we could benefit from working together, please don't
          hesitate to get in touch.
        </p>
        <div className="contact-details">
          <p> email: zomegalul@gmail.com </p>
          <p>discord: Jin#6139</p>
          <ul className="links">
            <li>
              <a href="https://github.com/jinitsuga">
                <i className="devicon-github-original"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="devicon-linkedin-plain colored"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img className="footer-img" src={require("../images/doge.jpg")}></img>
    </footer>
  );
}
