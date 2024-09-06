import "./styles/Themes/Variables.css";
import "./styles/Themes/Global.css";
import "./App.css";

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
      <div className="content">
        {showLoader ? (
          <Loader />
        ) : (
          <>
            <ScrollCounter />

            <HomeJsx />

            <SkillsSection />
          </>
        )}
      </div>
    </>
  );
}

export default App;
