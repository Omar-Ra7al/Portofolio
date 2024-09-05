import "./Nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { GiNinjaHeroicStance } from "react-icons/gi";
// import { MdOutlineCodeOff } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";

import LighDark from "./Themes/light-dark";
export default function NavBar({ setLight }) {
  return (
    <header>
      <div className="blur"></div>
      <div className="container">
        <div className="logo-header">
          <p>&lt;R.Dev/&gt;</p>
        </div>

        <div className="toggle-nav">
          <nav>
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
          </nav>

          <div className="light-dark-mode">
            <LighDark setLight={setLight} />
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
