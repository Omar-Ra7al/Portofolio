// Css
import "./Nav.css";

// React Icons
import { IoHomeOutline } from "react-icons/io5";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaUsers, FaCode } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

import { Link } from "react-router-dom";
import LighDark from "./Themes/light-dark";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const { hash } = useLocation();

  useEffect(() => {
    // Scroll to the element when the component mounts or when the hash changes
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]); // Add hash to the dependency array

  return (
    <header>
      <div className="blur"></div>
      <div className="container">
        {/* Logo */}
        <div className="logo-header">
          <Link to={"/#home"}>
            <p>&lt;R.Dev/&gt;</p>
          </Link>
        </div>

        {/* Toggle Nav */}
        <div className="toggle-nav">
          <nav>
            <div className="container">
              <ul>
                <li>
                  <Link to={"/#home"} aria-label="Go to Home">
                    <IoHomeOutline />
                  </Link>
                </li>
                <li>
                  <Link to={"/#about"} aria-label="Go to About Section">
                    <MdPerson />
                  </Link>
                </li>
                <li>
                  <Link to={"/#skills"} aria-label="Go to Skills Section">
                    <GiNinjaHeroicStance />
                  </Link>
                </li>
                <li>
                  <Link to={"/#projects"} aria-label="Go to Projects Section">
                    <FaCode />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/#testimonials"}
                    aria-label="Go to Testimonials Section">
                    <FaUsers />
                  </Link>
                </li>
                <li>
                  <Link to={"/#contact"} aria-label="Go to Contact Section">
                    <FaEnvelopeOpenText />
                  </Link>
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
