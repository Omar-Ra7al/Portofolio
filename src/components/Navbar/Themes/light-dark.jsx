import "./light-dark.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiNightSleep } from "react-icons/gi";
import { MdLightMode } from "react-icons/md";
import { useSetTheme } from "../../ThemeContext/ThemeContext";

export default function LighDark() {
  const [light, setLight] = useState("light");
  const setTheme = useSetTheme();
  function toggleTheme() {
    if (light === "light") {
      setLight("dark");
      setTheme(false);
      document.documentElement.classList.add("light-theme");
    } else {
      setTheme(true);
      setLight("light");
      document.documentElement.classList.remove("light-theme");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {light === "dark" ? (
        <motion.span
          key="light"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <GiNightSleep className="icon icon-dark" onClick={toggleTheme} />
        </motion.span>
      ) : (
        <motion.span
          key="dark"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <MdLightMode className="icon icon-light" onClick={toggleTheme} />
        </motion.span>
      )}
    </AnimatePresence>
  );
}
