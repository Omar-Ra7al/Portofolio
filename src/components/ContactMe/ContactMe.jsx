// Css
import "./ContactMe.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsSendFill } from "react-icons/bs";
// React Icons
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaEnvelopeOpenText,
} from "react-icons/fa";
// Framer Motion
import { motion } from "framer-motion";

export default function ContactMe() {
  const form = useRef();
  const serviceId = "service_fhmoo07";
  const template = "template_0xtksft";
  const key = "TvH23RZfLpSQhvFLx";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, template, form.current, {
        publicKey: key,
      })
      .then(
        () => {
          alert("Your Mail Delevired!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
    form.current.reset();
  };
  return (
    <section id="contact" className="contact-me">
      <div className="container">
        <motion.section
          className="title"
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.3,
          }}>
          <p>Get in Touch</p>
          <FaEnvelopeOpenText />
        </motion.section>
        <div className="contact">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="form">
            <p className="form-title">Don’t hesitate to call me</p>
            <form className="fields-wrapper" ref={form} onSubmit={sendEmail}>
              <div className="feild-container">
                <label htmlFor="name">Name</label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="What's your name? Let's get to know each other!"
                  required
                />
              </div>
              <div className="feild-container">
                <label htmlFor="email">Email</label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Drop your email, and I’ll get back to you soon!"
                  required
                />
              </div>
              <div className="feild-container">
                <label htmlFor="msg">Your Msg</label>
                <textarea
                  name="message"
                  placeholder="What’s on your mind? Feel free to ask or share!"
                  required></textarea>
              </div>

              <div className="submit">
                <input type="submit" value="Send" />
                <BsSendFill />
              </div>
            </form>
          </motion.div>
          <motion.div
            className="social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
