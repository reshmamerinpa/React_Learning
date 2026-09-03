import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard =({image,title,description,tech,github,live,category}) =>{
    return(
        <motion.div
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
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
            y: -10,
            transition: { duration: 0.25 }
        }} className="group overflow-hidden rounded-3xl bg-white dark:bg-[#102a43] shadow-lg
                hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300">
            {/* project image*/}
            <div className="relative overflow-hidden">
                <img src={image} alt={title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">
                        {title}
                    </h3>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500 text-white text-xs mb-4">
    {category}
</span>
            </div>
            {/* content */}
            <div className="p-6">
                {/* <h3 className="text-2xl font-bold dark:text-white mb-3">
                    {title}
                </h3> */}
                <p className="text-gray-600 dark:text-gray-300 leading-7 mb-5">
                    {description}
                </p>
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((item,index)=>{
                        <motion.span key={index} className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 text-sm">
                            {item}
                        </motion.span>
                    })}
                </div>
                {/* Buttons */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition "><FaGithub /></a>
                    <a href={live} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full border border-cyan-500 text-cyan-600 dark:text-white hover:bg-cyan-500 hover:text-white transition-all duration-300"><FaExternalLinkAlt /> </a>
                </div>
            </div>
        </motion.div>
    )
}
export default ProjectCard;