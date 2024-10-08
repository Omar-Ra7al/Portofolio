import "./AboutMe.css";
import { FcAbout } from "react-icons/fc";
import { motion } from "framer-motion";
import CardComponent from "../Card/Card";
export default function AboutMe() {
  return (
    <section className="aboutMe-content">
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
          <div className="aboutMe-details">
            <CardComponent />

            {/* << Description */}
            <motion.p
              className="description"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}>
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
          </div>
          {/* << Cards */}
          <div className="card-container">
            <motion.div
              className="card education"
              initial={{ marginLeft: -50, opacity: 0 }}
              whileInView={{ marginLeft: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 5,
              }}>
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
              initial={{ marginLeft: 100, opacity: 0 }}
              whileInView={{ marginLeft: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 5,
              }}>
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
              transition={{ delay: 0.3, duration: 1 }}>
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
