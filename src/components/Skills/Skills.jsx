import "./Skills.css";
import SkillsParticles from "../../vendors/particles/SkillsPractilece";
import { motion } from "framer-motion";
import { GiNinjaHeroicStance } from "react-icons/gi";

export default function SkillsSection() {
  return (
    <>
      <div className="skills-title">
        <div className="title-wrraper">
          <p>Technical Skills</p>
          <GiNinjaHeroicStance />
        </div>
      </div>
      <SkillsParticles>
        <div className="container">
          <div className="indecators-parent">
            <div className="wrraper">
              <div className="indecator r"></div>
              <div className="languages">
                <span>Html5</span>
                <span>Css3</span>
                <span>JS</span>
                <span>BootStrap</span>
                <span>TailWind</span>
                <span>React Js</span>
                <span>Mui</span>
                <span>Next Js</span>
                <span>Redux</span>
                <span>Type Script</span>
              </div>
            </div>

            <div className="wrraper">
              <div className="indecator l"></div>
              <div className="frame-works">
                <span>Git</span>
                <span>GutHub</span>
                <span>Command Line</span>
                <span>Cemder</span>
                <span>Windows</span>
                <span>Luinx</span>
                <span>Mac</span>
              </div>
            </div>
          </div>
          <p className="skills-description">
            Explore the programming languages and technologies I specialize in.
            This section features animated icons representing my proficiency in
            various tools and languages, providing a dynamic visual of my
            technical expertise.
          </p>

          <motion.div
            initial={{ x: 0 }}
            whileInView={{
              x: 100,
            }}
            transition={{ type: "spring", stiffness: 300 }}></motion.div>
        </div>
      </SkillsParticles>
    </>
  );
}
