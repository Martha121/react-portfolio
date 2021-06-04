import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer fixed-bottom font-small success-color-dark pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-fb mx-1"
              href="https://github.com/Martha121"
            >
              <i className="fab fa-github"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/martha-gamez-60a5764a/"
            >
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2021 Copyright:
        <a href="https://github.com/Martha121/react-portfolio">
          {" "}
          Martha A. Gamez
        </a>
      </div>
    </footer>
  );
}

export default Footer;
