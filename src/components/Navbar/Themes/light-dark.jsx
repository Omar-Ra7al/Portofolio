import "./light-dark.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiNightSleep } from "react-icons/gi";
import { MdLightMode } from "react-icons/md";

export default function LighDark({ setLight }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      setLight(false);
      document.documentElement.classList.add("light-theme");
    } else {
      setLight(true);
      setTheme("light");
      document.documentElement.classList.remove("light-theme");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {theme === "dark" ? (
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
