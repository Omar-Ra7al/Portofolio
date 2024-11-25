import "./Videos.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { motion } from "framer-motion";
const Videos = () => {
  return (
    <section>
      <div className="container">
        <motion.section
          className="title"
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.3,
          }}>
          <p> Technical Tutorials</p>
          <MdOutlineSlowMotionVideo />
        </motion.section>
        <div className="vedios-warpper">
          <div className="vedio-frame">
            <p>Array Methodes</p>
            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/miSp3Jg9bLc?si=GL89Qu3bDeRpfdqO"
              title="Array Methodes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              allowFullScreen={true}></iframe>
          </div>
          <div className="vedio-frame">
            <p>Redux & Redux-Toolkit</p>

            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/5Cs0PeasxOY"
              title="Array Methodes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              allowFullScreen={true}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
