import "./styles/Themes/Variables.css";
import "./App.css";
import "./styles/Themes/Global.css";

// Vendors
import ScrollCounter from "./vendors/scroll/ScrollWidth";

// React Hooks
import { useEffect, useState } from "react";

// Motion

// Component
import HomeJsx from "./components/Home/Home";
import Loader from "./vendors/Loader/Loader";
import SkillsSection from "./components/Skills/Skills";
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
        <>
          <ScrollCounter />

          <HomeJsx />

          <SkillsSection />
        </>
      )}
    </>
  );
}

export default App;
