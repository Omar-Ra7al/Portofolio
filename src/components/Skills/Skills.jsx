import html5Logo from "../../assets/svgs/html-5.svg";
import css3Logo from "../../assets/svgs/css-3.svg";
import javascriptLogo from "../../assets/svgs/javascript-1.svg";
import nextjsLogo from "../../assets/svgs/nextjs-1.svg";
import reactLogo from "../../assets/svgs/react.svg";
import reduxLogo from "../../assets/svgs/redux.svg";
import viteLogo from "../../assets/svgs/vite.svg";
import bootstrapLogo from "../../assets/svgs/bootstrap-5.svg";
import tailwindcssLogo from "../../assets/svgs/tailwindcss.svg";
import vscLogo from "../../assets/svgs/Vsc.svg";
import typescriptLogo from "../../assets/svgs/typescript.svg";
import gitLogo from "../../assets/svgs/git.svg";
import gitHubLogo from "../../assets/svgs/github.svg";
import npmLogo from "../../assets/svgs/npm.svg";
import { GrSwift } from "react-icons/gr";
import { SiMediamarkt } from "react-icons/si";

import "../../styles/Global/Sections.css";
import "./Skills.css";
import SkillsParticles from "../../vendors/particles/SkillsPractilece";
import { motion } from "framer-motion";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the callback only once
    threshold: 0.2, // Trigger when 10% of the section is visible
  });

  return (
    <section ref={ref} className="skills-content">
      {inView ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container">
          <section className="title">
            <p>Technical Skills</p>
            <GiNinjaHeroicStance />
          </section>

          <SkillsParticles>
            <div className="skills-items">
              <p className="title">TECH STACK</p>
              <div className="tech-wrapper">
                <section className="languages">
                  <p className="tech-title">Languages</p>
                  <div className="icons languages">
                    <div className="img-wrapper">
                      <img src={html5Logo} alt="HTML5 Logo" />
                    </div>
                    <div className="img-wrapper">
                      <img src={css3Logo} alt="CSS3 Logo" />
                    </div>

                    <div className="img-wrapper">
                      <img
                        className="js"
                        src={javascriptLogo}
                        alt="JavaScript Logo"
                      />
                    </div>
                    <div className="img-wrapper">
                      <img
                        className="js"
                        src={typescriptLogo}
                        alt="JavaScript Logo"
                      />
                    </div>
                  </div>
                </section>
                <section className="frameworks">
                  <p className="tech-title">Frameworks</p>
                  <div className="icons frameworks">
                    <div className="img-wrapper">
                      <img src={bootstrapLogo} alt="HTML5 Logo" />
                    </div>
                    <div className="img-wrapper">
                      <img src={tailwindcssLogo} alt="CSS3 Logo" />
                    </div>
                    <div className="img-wrapper">
                      <img src={reactLogo} alt="JavaScript Logo" />
                    </div>

                    <div className="img-wrapper">
                      <img src={nextjsLogo} alt="JavaScript Logo" />
                    </div>
                    <div className="img-wrapper">
                      <img src={reduxLogo} alt="Visual Studio Code Logo" />
                    </div>
                  </div>
                </section>

                <section className="tools">
                  <p className="tech-title">Tools</p>
                  <div className="icons tools">
                    <div className="img-wrapper">
                      <img src={gitLogo} alt="Git Logo" />
                    </div>
                    <div className="img-wrapper">
                      <img src={gitHubLogo} alt="GitHub Logo" />
                    </div>
                    <div className="img-wrapper">
                      <img src={npmLogo} alt="npm Logo" />
                    </div>
                    <div className="img-wrapper">
                      <img src={viteLogo} alt="Visual Studio Code Logo" />
                    </div>
                    <div className="img-wrapper">
                      <img src={vscLogo} alt="Visual Studio Code Logo" />
                    </div>
                  </div>
                </section>

                <section className="techniques">
                  <p className="tech-title">Techniques</p>
                  <p>Responsive Design</p>
                  <p>Performance Optimization</p>
                  <div className="icons techniques">
                    <div className="img-wrapper">
                      <GrSwift style={{ fill: "black" }} />
                    </div>
                    <div className="img-wrapper">
                      <SiMediamarkt style={{ fill: "lightgreen" }} />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </SkillsParticles>
        </motion.div>
      ) : (
        ""
      )}
    </section>
  );
}
