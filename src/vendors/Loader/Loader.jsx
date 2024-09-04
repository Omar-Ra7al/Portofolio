import "./loader.css";
import { motion } from "framer-motion";
export default function Loader() {
  return (
    <motion.div
      className="over-lay"
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <div className="loader">
        <div className="load-inner load-one"></div>
        <div className="load-inner load-two"></div>
        <div className="load-inner load-three"></div>
        <span className="text">Loading...</span>
      </div>
    </motion.div>
  );
}
