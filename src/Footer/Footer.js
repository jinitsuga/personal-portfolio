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
          <ul className="links">
            <li>
              <a href="https://github.com/jinitsuga">
                <i className="devicon-github-original"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img className="footer-img"></img>
    </footer>
  );
}
