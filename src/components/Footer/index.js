import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer class="page-footer fixed-bottom font-small success-color-dark pt-4">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              
            >
              <i class="fab fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              
            >
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2021 Copyright: Martha A. Gamez
        
      </div>
    </footer>
  );
}

export default Footer;
