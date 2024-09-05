import "./Skills.css";
import SkillsParticles from "../../vendors/particles/SkillsPractilece";
import { motion } from "framer-motion";
import { GiNinjaHeroicStance } from "react-icons/gi";

export default function SkillsSection() {
  return (
    <>
      <div className="skills-wrraper">
        <div className="skills-title">
          <div className="container">
            <p>Technical Skills</p>
            <GiNinjaHeroicStance />
          </div>
        </div>
        <SkillsParticles>
          <div className="container">
            <p className="skills-description">
              Explore the programming languages and technologies I specialize
              in. This section features animated icons representing my
              proficiency in various tools and languages, providing a dynamic
              visual of my technical expertise.
            </p>

            <motion.div
              initial={{ x: 0 }}
              whileInView={{
                x: 100,
              }}
              transition={{ type: "spring", stiffness: 300 }}></motion.div>
          </div>
        </SkillsParticles>
      </div>
    </>
  );
}
