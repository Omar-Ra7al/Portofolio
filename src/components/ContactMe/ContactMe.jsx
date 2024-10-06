import "./ContactMe.css";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";
export default function ContactMe() {
  return (
    <section className="contact-me">
      <div className="container">
        <section className="title">
          <p>Get in Touch</p>
          <FaEnvelopeOpenText />
        </section>

        <div className="contact">
          <div className="form">
            <p className="form-title">Don’t hesitate to call me</p>
            <div className="fields-wrapper">
              <div className="feild-container">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="What's your name? Let's get to know each other!"
                />
              </div>

              <div className="feild-container">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Drop your email, and I’ll get back to you soon!"
                />
              </div>
              <div className="feild-container">
                <label htmlFor="msg">Your Msg</label>
                <textarea
                  name=""
                  id="msg"
                  placeholder="What’s on your mind? Feel free to ask or share!"></textarea>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="form-title">Do U Like Another Social ??</div>
            <div className="social-buttons">
              <div className="social-btn">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub size={20} />
                  <span className="social-name">GitHub</span>
                </a>
              </div>
              <div className="social-btn">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                  <span className="social-name">LinkedIn</span>
                </a>
              </div>
              <div className="social-btn">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaFacebook size={20} />
                  <span className="social-name">Facebook</span>
                </a>
              </div>
              <div className="social-btn">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaInstagram size={20} />
                  <span className="social-name">Instagram</span>
                </a>
              </div>
              <div className="social-btn">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaTwitter size={20} />
                  <span className="social-name">Twitter</span>
                </a>
              </div>
              <div className="social-btn">
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaWhatsapp size={20} />
                  <span className="social-name">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
