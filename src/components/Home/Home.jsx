import "./Home.css";
import "../../styles/Global/Logo.css";
import NavBar from "../Navbar/Nav";
import CvBtn from "../Buttons/Download Cv/DownloadCv";
// import CvBtn from "../Buttons/See More/SeeMore";

import LineParticles from "../../vendors/particles/LineParticles";
import TypingText from "../../vendors/typingText/TypingText";
import lightLogo from "../../assets/logo/White-Gold.png";
import darkLogo from "../../assets/logo/Black-Gold.png";
// import goldenLogo from "../../assets/logo/Gold-Gold.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
export default function HomeJsx() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the callback only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });
  // True === Dark Theme
  const [theme, setTheme] = useState(true);
  return (
    <div className="home" ref={ref}>
      <NavBar setLight={setTheme} />
      {inView ? (
        <LineParticles color={theme ? "#fff" : "#000"}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container">
            <div className="main">
              <div className="logo-container">
                <motion.section
                  className="logo"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}>
                  <div className="profile-img">
                    <img
                      className="svg"
                      src={theme ? lightLogo : darkLogo}
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
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="typing-text">
                <TypingText />
              </motion.section>

              <motion.section
                className="download-cv"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}>
                <CvBtn />
              </motion.section>
            </div>
          </motion.div>
        </LineParticles>
      ) : (
        ""
      )}
    </div>
  );
}
