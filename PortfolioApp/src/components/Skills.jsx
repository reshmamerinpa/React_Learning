import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard.jsx";
import skills from "../data/skills.js";
import { motion } from "framer-motion";
const Skills= () =>{
  return(
    <section id="skills" className="scroll-mt-24 py-24 bg-gray-100 dark:bg-[#071A2B] transition-colors duration-300 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="My Expertise" subtitle="Technologies & Skills"/>
      </div>
      {/* Skills grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* crds will go here */}
        
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: skill.id * 0.1,
            }}
            viewport={{ once: true }}
        >
          <SkillCard key={skill.id}
          icon={skill.icon} title={skill.title} description={skill.description} /> 
          </motion.div>
        ))} 
      </div>
    </section>
  )
}
export default Skills;