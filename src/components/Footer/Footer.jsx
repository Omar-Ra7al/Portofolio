import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import logo from "../../assets/logo/Gold-Gold.png";
import { Link } from "react-router-dom"; // Ensure you're using React Router for navigation
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="img-wrapper">
              <img src={logo} alt="" />
            </div>
            <p>R.Dev</p>
          </div>
          <div className="footer-contact">
            <p>Email: syntaxor7@gmail.com</p>
            <p>Phone: +010 255 225 12</p>
          </div>
          <div className="location">
            <p>Location</p>
            <p>Damnhour, Egypt</p>
          </div>
        </div>

        <div className="footer-center">
          <div className="footer-links">
            <Link to="/">
              Home
              <IoHomeOutline />
            </Link>
            <Link to="/about">
              About
              <GiNinjaHeroicStance />
            </Link>
            <Link to="/contact">
              Skills
              <FaCode />
            </Link>
            <Link to="/contact">
              Testimonials
              <FaUsers />
            </Link>
            <Link to="/contact">
              Contact
              <FaEnvelopeOpenText />
            </Link>
          </div>
        </div>

        <div className="footer-right">
          <h3>Follow Me In</h3>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
