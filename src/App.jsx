import "./styles/Themes/Variables.css";
import "./styles/Themes/Global.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Vendors
import ScrollCounter from "./vendors/scroll/ScrollWidth";

// React Hooks
import { useEffect, useState } from "react";

// Motion

// Component
import HomeJsx from "./components/Home/Home";
import Loader from "./vendors/Loader/Loader";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
// Projects Provider
import ProjectsContextProvider from "./components/ProjectsContext/ProjectsProvide";
import ThemeContextProvider from "./components/ThemeContext/ThemeContext";

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
    <Router>
      <ProjectsContextProvider>
        <ThemeContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <div className="content">
                  {showLoader ? (
                    <Loader />
                  ) : (
                    <div>
                      <ScrollCounter />
                      <HomeJsx />
                      <AboutMe />
                      <Skills />
                      <Projects />
                    </div>
                  )}
                </div>
              }
            />

            <Route
              path="/projects/project/:projectId"
              element={<ProjectDetails />}
            />
          </Routes>
        </ThemeContextProvider>
      </ProjectsContextProvider>
    </Router>
  );
}

export default App;
