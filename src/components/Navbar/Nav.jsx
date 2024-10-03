import "./Nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

import LighDark from "./Themes/light-dark";
export default function NavBar() {
  return (
    <header>
      <div className="blur"></div>
      <div className="container">
        {/* Logo */}
        <div className="logo-header">
          <p>&lt;R.Dev/&gt;</p>
        </div>

        {/* Toggle Nav */}
        <div className="toggle-nav">
          <nav>
            <div className="container">
              <ul>
                <li>
                  <a href="#">
                    <IoHomeOutline />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GiNinjaHeroicStance />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaCode />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaUsers />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaEnvelopeOpenText />
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="light-dark-mode">
            <LighDark />
          </div>
          <div
            className="nav-icon"
            onClick={(e) => {
              e.currentTarget.parentElement.classList.toggle("close");
            }}>
            <span></span>
            <span className="remove"></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
