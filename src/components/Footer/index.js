import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer fixed-bottom font-small success-color-dark pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              
            >
              <i className="fab fa-github"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              
            >
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2021 Copyright: Martha A. Gamez
        
      </div>
    </footer>
  );
}

export default Footer;
