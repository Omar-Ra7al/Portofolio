import "./styles/Themes/Variables.css";
import "./App.css";
import "./styles/Themes/Global.css";

// Vendors
import SkillsParticles from "./vendors/particles/SkillsPractilece";
import ScrollCounter from "./vendors/scroll/ScrollWidth";

// React Hooks
import { useEffect, useState } from "react";

// Motion
import { motion } from "framer-motion";

// Component
import HomeJsx from "./components/Home/Home";
import Loader from "./vendors/Loader/Loader";
function App() {
  // << Start Loader
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(loaderTimeout);
  }, []);
  //  End Loader//>>

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="content">
          <ScrollCounter />

          <HomeJsx />

          <SkillsParticles>
            <motion.div
              initial={{ x: 0 }}
              whileInView={{
                x: 100,
              }}
              transition={{ type: "spring", stiffness: 300 }}></motion.div>
            <h1>skilllssss</h1>
          </SkillsParticles>
        </div>
      )}
    </>
  );
}

export default App;
