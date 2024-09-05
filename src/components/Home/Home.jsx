import "./Home.css";
import "../../styles/Global/Logo.css";
import NavBar from "../Navbar/Nav";
import BtnCv from "../Button/Button";

import LineParticles from "../../vendors/particles/LineParticles";
import TypingText from "../../vendors/typingText/TypingText";
import lightLogo from "../../assets/logo/White-Gold.png";
// import darkLogo from "../../assets/logo/Black-Gold.png";
// import goldenLogo from "../../assets/logo/Gold-Gold.png";
import { motion } from "framer-motion";
import { useState } from "react";
// import { useEffect } from "react";
// import darkLogo from "../../assets/logo/Black-Gold .png";

export default function HomeJsx() {
  // True === Dark Theme
  const [theme, setTheme] = useState(true);
  return (
    <LineParticles color={theme ? "#fff" : "#000"}>
      <NavBar setLight={setTheme} />
      <div className="container">
        <div className="main">
          <div className="logo-container">
            <motion.section
              className="logo"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
              <div className="profile-img">
                <img
                  className="svg"
                  src={theme ? lightLogo : lightLogo}
                  alt="logo"
                />
              </div>
              <div className="ripple-container">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </motion.section>
          </div>

          <motion.section
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="typing-text">
            <TypingText />
          </motion.section>

          <section className="download-cv">
            <BtnCv />
          </section>
        </div>
      </div>
    </LineParticles>
  );
}
