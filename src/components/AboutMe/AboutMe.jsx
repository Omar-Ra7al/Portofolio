import "./AboutMe.css";
import "../../styles/Global/Sections.css";

import { motion } from "framer-motion";
export default function AboutMe() {
  return (
    <section className="aboutMe-content">
      <div className="container">
        <section className="title">
          <p>About Me</p>
        </section>
        <div className="aboutMe-wrapper">
          <motion.p
            className="description"
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}>
            With a recent degree in Management Information Systems and a passion
            for front-end development, I am driven by optimism and a commitment
            to excellence. I focus on crafting dynamic, high-performance
            websites using the latest technologies. My goal is to bring
            creativity and technical expertise to every project, ensuring
            exceptional results and continuous growth in my development career.
          </motion.p>

          <div className="card-container">
            <motion.div
              initial={{ marginLeft: -50 }}
              whileInView={{ marginLeft: 0 }}
              className="card education">
              <div className="card-content">
                <p>
                  Graduated in 2023 with a Bachelor's in Management Information
                  Systems
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ marginLeft: 100 }}
              whileInView={{ marginLeft: 0 }}
              className="card time-zone">
              <div className="card-content">
                <p>
                  Flexible and adaptable to different time zones for seamless
                  collaboration.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="card client">
              <div className="card-content">
                <p>
                  Dedicated to fostering trust and open communication with
                  clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}