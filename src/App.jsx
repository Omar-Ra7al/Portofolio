import "./styles/Themes/Variables.css";
import "./styles/Themes/Global.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// React Hooks
import { useEffect, useState, lazy } from "react";

// Vendors
const ScrollCounter = lazy(() => import("./vendors/scroll/ScrollWidth"));

// Component
import HomeJsx from "./components/Home/Home";
import Loader from "./vendors/Loader/Loader";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Nav";
// Projects Provider
import ProjectsContextProvider from "./components/ProjectsContext/ProjectsProvide";
import ThemeContextProvider from "./components/ThemeContext/ThemeContext";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactMe from "./components/ContactMe/ContactMe";

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
          {showLoader ? (
            <Loader />
          ) : (
            <>
              <NavBar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="content">
                      <div>
                        <ScrollCounter />
                        <HomeJsx />
                        <AboutMe />
                        <Skills />
                        <Projects />
                        <Testimonials />
                        <ContactMe />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/projects/project/:projectId"
                  element={<ProjectDetails />}
                />
              </Routes>
              <Footer />
            </>
          )}
        </ThemeContextProvider>
      </ProjectsContextProvider>
    </Router>
  );
}

export default App;
