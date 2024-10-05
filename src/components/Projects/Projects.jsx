import { useState, useMemo } from "react";
import Loader from "../../vendors/Loader/Loader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useProjectsData } from "../ProjectsContext/ProjectsProvide";
// Css
import "./Projects.css";
// React icons
import { FaLaptopCode } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BsCardText } from "react-icons/bs";

import GitHub from "../../assets/imgs/GitHub.jpeg";

// Projects Data >>>>
export default function Projects() {
  const [category, setCategory] = useState("All");
  const [loader, setLoader] = useState(false);

  const projectsData = useProjectsData();

  const handellCategoryName = function (language) {
    setCategory(language);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  };

  // Projects JSX >>>>
  let projectsDataNumber = [];
  const projectsJsx = useMemo(() => {
    return projectsData.map((project) => {
      if (project.category === category || category === "All") {
        projectsDataNumber.push(project);
        return (
          <motion.div
            key={project.id}
            className="card-wrapper"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="indecator">
              <span>{project.date}</span>
            </div>
            <div className="project-card">
                <div className="img-wrapper">
                  <img src={project.homeImageUrl} alt={project.title} />
                </div>

              <div className="project-content">
                <div className="content">
                  <p className="title">{project.title}</p>
                  <p className="project-discription">{project.description}</p>
                </div>
                <div className="project-actions">
                  <button>
                    <Link to={`/projects/project/${project.id}`}>
                      Details
                      <BsCardText />
                    </Link>
                  </button>
                  <button>
                    <a href={project.links.demo} target="blank">
                      Live
                      <FiEye />
                    </a>
                  </button>
                  <button>
                    <a href={project.links.repo} target="blank">
                      Repo
                      <FaGithub />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      }
      return null; // Return null for projects that don't match
    });
  }, [projectsData, category]); // Recompute when projectsData or category changes

  return (
    <section className="projects">
      <div className="container">
        <section className="title">
          <p>Projects</p>
          <FaLaptopCode />
        </section>

        {/* << Start Projects Filter */}
        <div className="projects-filter">
          <button
            className={category == "All" ? "active" : ""}
            onClick={() => {
              handellCategoryName("All");
            }}>
            All
          </button>
          <button
            className={category === "Css" ? "active" : ""}
            onClick={() => {
              handellCategoryName("Css");
            }}>
            Css
          </button>
          <button
            className={category == "JavaScript" ? "active" : ""}
            onClick={() => {
              handellCategoryName("JavaScript");
            }}>
            JS
          </button>
          <button
            className={category == "React" ? "active" : ""}
            onClick={() => {
              handellCategoryName("React");
            }}>
            React
          </button>
        </div>
        {/* End Projects Filter //>>*/}

        {/* _____________________________________ */}
        <div className="projects-wrapper">
          {loader ? (
            <Loader />
          ) : (
            <>
              {projectsJsx}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={
                  projectsDataNumber.length % 2 == 0 ? { margin: "0 auto" } : ""
                }
                className="card-wrapper">
                <div className="indecator">
                  <span>Updated</span>
                </div>
                <div className="project-card">
                  <div className="img-wrapper">
                    <img src={GitHub} alt="" />
                  </div>
                  <div className="project-content">
                    <div
                      className="project-actions"
                      style={{ width: "100%", flexDirection: "column" }}>
                      <p className="title">For More Project Check My GitHub</p>
                      <button>
                        <a
                          href="https://github.com/Omar-Ra7al"
                          target="blank"
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}>
                          GitHub
                          <FaGithub />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* _____________________________________ */}
      </div>
    </section>
  );
}
