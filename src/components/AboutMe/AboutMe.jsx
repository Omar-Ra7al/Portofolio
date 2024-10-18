// Css
import "./AboutMe.css";
// React Icons
import { FcAbout } from "react-icons/fc";
// Framer Motion
import { motion } from "framer-motion";
// Components
import CardComponent from "../Card/Card";
// import Education from "../../assets/imgs/Education.webp";
import Education from "../../assets/imgs/abstractEducation.avif";
// import Education from "../../assets/imgs/book.png";
// import Education from "../../assets/imgs/The-Biggest-Education-Trends-Of-The-Next-10-Years.webp";
// import Education from "../../assets/imgs/opengraph (2)_11zon.webp";

import TimeZone from "../../assets/imgs/TimeZone.webp";
import Client from "../../assets/imgs/Client.webp";
export default function AboutMe() {
  return (
    <section id="about" className="aboutMe-content">
      <div className="container">
        {/* << Title */}
        <motion.section
          className="title"
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.3,
          }}>
          <p>About Me</p>
          <FcAbout />
        </motion.section>
        {/*  Title >> */}

        <div className="aboutMe-wrapper">
          <motion.div
            className="aboutMe-details"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <CardComponent />

            {/* << Description */}
            <motion.p className="description">
              {/* With a recent degree in Management Information Systems and a
              passion for front-end development, I am driven by optimism and a
              commitment to excellence. I focus on crafting dynamic,
              high-performance websites using the latest technologies. My goal
              is to bring creativity and technical expertise to every project,
              ensuring exceptional results and continuous growth in my
              development career. */}
              With a recent degree in Management Information Systems and a
              passion for front-end development, I am driven by optimism and a
              commitment to excellence. As the owner of a PlayStation shop with
              over 6 years of experience in this feild, I have developed strong
              skills in customer service, sales, and marketing.learning the
              importance of user-friendly environments and strong relationships.
              I focus on crafting dynamic, high-performance websites using the
              latest technologies. Currently, I am enhancing my skills by
              <span>Front-end training in [ Webmasters Company ].</span>
              My goal is to bring creativity and technical expertise to every
              project. I believe in the power of technology to transform ideas
              into reality and am always eager to learn new skills and explore
              innovative solutions. Feel free to check out my portfolio to see
              some of my work!
            </motion.p>
            {/*  Description >> */}
          </motion.div>
          {/* << Cards */}
          <div className="card-container">
            <motion.div
              className="card education"
              initial={{ marginLeft: -10, opacity: 0 }}
              whileInView={{ marginLeft: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <img loading="lazy" src={Education} alt="education" />
              <div className="card-content">
                <p>
                  Graduated in 2023 with a Bachelor`s in Management Information
                  Systems
                </p>
              </div>
            </motion.div>
            {/*  */}
            <motion.div
              className="card time-zone"
              initial={{ marginLeft: 20, opacity: 0 }}
              whileInView={{ marginLeft: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <img loading="lazy" src={TimeZone} alt="time zone" />

              <div className="card-content">
                <p>
                  Flexible and adaptable to different time zones for seamless
                  collaboration.
                </p>
              </div>
            </motion.div>
            {/*  */}
            <motion.div
              className="card client"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}>
              <img loading="lazy" src={Client} alt="client" />

              <div className="card-content">
                <p>
                  Dedicated to fostering trust and open communication with
                  clients.
                </p>
              </div>
            </motion.div>
          </div>
          {/*  Cards >> */}
        </div>
      </div>
    </section>
  );
}
