import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 bg-white dark:bg-[#061421] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="My Projects"
            subtitle="Some Things I've Built"
          />
        </motion.div>

        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" 
				variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: 0.2,
					},
				},
			}}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}>

          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
			  hidden: {
					opacity: 0,
					y: 60,
				},
				visible: {
					opacity: 1,
					y: 0,
				},
			  }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: project.id * 0.15,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                live={project.live}
              />
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default Projects;