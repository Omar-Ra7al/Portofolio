import { useParams } from "react-router-dom";
import { useProjectsData } from "../ProjectsContext/ProjectsProvide";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import "./ProjectDetails.css";
import NavBar from "../Navbar/Nav";
export default function PojectDetails() {
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
          <p>{project.title}</p>
        </section>
        <motion.div
          key={project.id}
          className="card-details-wrapper"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}>
          {/*  */}
          <div className="project-card">
            {/*  */}
            <div className="img-details-wrapper">
              <img src={project.homeImageUrl} alt={project.title} />
            </div>
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
      </div>
    );
  });

  console.log(projectDetails);
  return (
    <section className="project-details">
      <NavBar />
      {projectsJsx}
    </section>
  );
}
