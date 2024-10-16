// Css
import "./Footer.css";

// Assets
import logo from "../../assets/logo/White-Gold.webp";

// React Icons
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaCode,
  FaUsers,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { GiNinjaHeroicStance } from "react-icons/gi";

// React Router
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Framer Motion
import { motion } from "framer-motion";
const Footer = () => {
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
    <footer className="footer">
      <motion.div
        className="container"
        initial={{ y: -60 }}
        whileInView={{ y: 0 }}>
        <motion.div
          className="footer-logo"
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.3,
          }}>
          <div className="img-wrapper">
            <img loading="lazy" src={logo} alt="footer logo" />
          </div>
          <p>R.Dev</p>
        </motion.div>

        <div className="footer-content">
          {/* Left */}
          <div className="footer-left">
            <div className="footer-contact">
              <p>Email: syntaxor7@gmail.com</p>
              <p>Phone: +010 255 225 12</p>
              <p>Damnhour, Egypt</p>
            </div>
          </div>

          {/* Center */}
          <div className="footer-center">
            <div className="footer-links">
              <ul>
                <li>
                  <Link to={"/#home"}>
                    Home
                    <IoHomeOutline />
                  </Link>
                </li>
                <li>
                  <Link to={"/#about"}>
                    About
                    <MdPerson />
                  </Link>
                </li>
                <li>
                  <Link to={"/#skills"}>
                    Skills
                    <GiNinjaHeroicStance />
                  </Link>
                </li>
                <li>
                  <Link to={"/#projects"}>
                    Projects
                    <FaCode />
                  </Link>
                </li>
                <li>
                  <Link to={"/#testimonials"}>
                    Testimonials
                    <FaUsers />
                  </Link>
                </li>
                <li>
                  <Link to={"/#contact"}>
                    Contact
                    <FaEnvelopeOpenText />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="footer-right">
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <FaGithub />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <span>Twitter</span>
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <span>Facebook</span>
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <span>Instagram</span>
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noreferrer">
                <span>WhatsApp</span>
                <FaWhatsapp />
              </a>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()}
            <span>Omar Rahal</span>. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
