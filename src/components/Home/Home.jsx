import "./Home.css";

// Components
import NavBar from "../Navbar/Nav";
import Logo from "../Logo/Logo";
import CvBtn from "../Buttons/Download Cv/DownloadCv";

// Vendors
import LineParticles from "../../vendors/particles/LineParticles";
import TypingText from "../../vendors/typingText/TypingText";

// Librearey
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../ThemeContext/ThemeContext";

export default function HomeJsx() {
  const theme = useTheme();
  // const [theme, setTheme] = useState(true);
  // Use in vew to hide the commponent if it not showen
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="home" ref={ref}>
      {/* << Nav Bar >> */}
      <NavBar />
      {inView ? (
        // << Start Particlles
        <LineParticles color={theme ? "#fff" : "#000"}>
          {/* << Start Container */}
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {/* << Start Main Contetnt*/}
            <main className="main">
              {/* << Start Logo Container */}
              <motion.div
                className="logo"
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}>
                <Logo theme={theme} />
              </motion.div>
              {/* End Logo Container //>> */}
              {/* << Start Typing Test  */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="typing-text">
                <TypingText />
              </motion.div>
              {/* End Typing Test //>> */}
              {/* << Start Donwload Btn */}
              <motion.div
                className="download-cv"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}>
                <CvBtn />
              </motion.div>
              {/* End Donwload Btn //>> */}
            </main>
            {/* End Main Contetnt //>> */}
          </motion.div>
          {/* End Container // >> */}
        </LineParticles>
      ) : (
        // End Particlles // >>
        ""
      )}
    </div>
  );
}
