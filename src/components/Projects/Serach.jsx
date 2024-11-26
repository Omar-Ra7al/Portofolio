import "./Search.css";
// Hooks
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Loader from "../../vendors/Loader/Loader";

// Libraries
import { motion } from "framer-motion";

// Constants
import { allProjectsData } from "../ProjectsContext/ProjectsProvide";
// Icons
import { FaSearchengin } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

export default function Serach() {
  const [searchValue, setSearchValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [loader, setLoader] = useState(false);
  const refBox = useRef(null);

  const projectsJsx = useMemo(() => {
    //   Filter The Projects
    const filteredProjects = allProjectsData.filter((project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filteredProjects.length > 0) {
      if (searchValue.length > 0) {
        return filteredProjects.map((project, index) => {
          setTimeout(() => {
            setLoader(false);
          }, 500);
          return (
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              key={index}
              className="project-search">
              <div className="img-wrapper">
                <Link
                  className="link"
                  to={`/projects/project/${project.id}`}
                  aria-label="View project details">
                  <p>View</p> <FiEye />
                </Link>
                <img
                  loading="lazy"
                  src={project.homeImageUrl}
                  alt={project.title}
                />
              </div>

              <div className="project-content">
                <div className="content">
                  <p className="title">{project.title}</p>
                  <p className="project-discription">{project.description}</p>
                </div>
              </div>
            </motion.div>
          );
        });
      } else {
        setOpenSearch(false);
      }
    }
    setLoader(false);
    return <p className="no-result">No projects found.</p>;
  }, [searchValue]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click is outside the box
      if (refBox.current && !refBox.current.contains(e.target)) {
        setOpenSearch(false);
      }
    };

    // Add the event listener
    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on unmount or re-render
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [openSearch]);

  return (
    <div className="search">
      <div className="search-box">
        <input
          type="text"
          placeholder="Project Name"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value.toLowerCase(""));
            setOpenSearch(true);
            setLoader(true);
          }}
        />
        <FaSearchengin />
      </div>
      {openSearch ? (
        <motion.div
          ref={refBox}
          initial={{ y: -10, opacity: "0" }}
          whileInView={{ y: 10, opacity: 1 }}
          className="result">
          {loader ? <Loader /> : projectsJsx}
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}

/*
1- extract all names in array 
2- handel state for input 
3- filter array based on input value 
4- then return items from flitered array that == the same name in the projects 
*/
