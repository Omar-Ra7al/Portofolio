// Css >>
import "./ProjectDetails.css";

// Component >>
import { useProjectsData } from "../ProjectsContext/ProjectsProvide";
import Swiper from "../../vendors/Swiper/Swiper";

// React >>
import { useEffect } from "react";
// React Router >>
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
// React Icon >>
import { FaGithub } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

// Framer Motion
import { motion } from "framer-motion";

export default function PojectDetails() {
  // Start Page from top >> prevent react router un expected behavior
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the path changes
  }, [pathname]);

  const { projectId } = useParams();
  const projectsData = useProjectsData();
  const projectDetails = projectsData.filter((project) => {
    return project.id == projectId;
  });

  const projectsJsx = projectDetails.map((project) => {
    // Hndle Stars >>
    let starsArr = [];
    for (let i = 0; i < project.rate; i++) {
      starsArr.push(<FaStar key={i} style={{ color: "goldenrod" }} />);
    }
    while (starsArr.length < 5) {
      starsArr.push(<FaStar />);
    }
    // >>
    return (
      <div key={project.id} className="container">
        <section className="title">
          <p>
            {project.id}/ {project.title}
          </p>
        </section>
        <motion.div
          key={project.id}
          className="card-details-wrapper"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}>
          {/*  */}
          <div className="project-card active">
            {/*  */}
            <Swiper autoSlide={true} slideTime={5000}>
              <div className="img-details-wrapper slide">
                <img src={project.homeImageUrl} alt={project.title} />
              </div>
              {project.imgs.map((img) => {
                return (
                  <div key={img} className="img-details-wrapper slide">
                    <img src={img} alt="" />{" "}
                  </div>
                );
              })}
            </Swiper>
            {/*  */}
            <div className="project-content">
              <div className="content">
                <div className="details">
                  <p className="title">
                    {project.title} / {project.category}
                  </p>
                  <p className="project-discription">
                    {project.descriptionLong}
                  </p>
                  <p className="project-date">
                    Ceration Date : <span>{project.date}</span>
                  </p>
                </div>

                <div className="feature">
                  <p className="feature-title">Languages :</p>
                  <div className="languages">
                    {project.languages.map((lang) => {
                      return <span key={lang}>{lang}</span>;
                    })}
                  </div>
                </div>
                <div className="feature">
                  <p className="feature-title">Tools :</p>
                  <div className="languages">
                    {project.tools.map((tool) => {
                      return <span key={tool}>{tool}</span>;
                    })}
                  </div>
                  {/*  */}
                </div>
                <div className="feature">
                  <p className="feature-title">Features :</p>
                  <div className="languages">
                    {project.features.map((feature) => {
                      return <span key={feature}>{feature}</span>;
                    })}
                  </div>
                </div>
                <div className="stars-container">
                  <p>Rate:</p>
                  {starsArr.map((star, index) => {
                    return <span key={index}>{star}</span>;
                  })}
                </div>
              </div>
              <div className="project-actions">
                <button>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live demo of the project">
                    Live
                    <FiEye />
                  </a>
                </button>
                <button>
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project repository on GitHub">
                    Repo
                    <FaGithub />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  });

  console.log(projectDetails);
  return <section className="project-details">{projectsJsx}</section>;
}
