import SectionTitle from "./SectionTitle";
import profile from "../assets/images/profile.png";
import resume from "../assets/resume/Resume_ReshmaMerin.pdf";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/fadeIn";
const About = () => {
  return (
    <motion.section
     id="about"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
      className="scroll-mt-24 py-24 bg-white dark:bg-[#081b29] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />
		<div className="grid md:grid-cols-2 gap-16 items-center">

			{/* Left */}
			<div>
				<div className="flex justify-center">
					<div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl">
						<img
						src={profile}
						alt="Profile"
						className="w-full h-full object-cover"
						/>
					</div>
					
				</div>
				<div className="grid grid-cols-2 gap-4 mt-8">
					<div className="bg-gray-100 dark:bg-[#102a43] rounded-xl p-5">
						<h4 className="font-bold text-cyan-500">
						Experience
						</h4>

						<p className="text-gray-600 dark:text-gray-300">
						4.5 Years
						</p>
					</div>

					<div className="bg-gray-100 dark:bg-[#102a43] rounded-xl p-5">
						<h4 className="font-bold text-cyan-500">
						Projects
						</h4>

						<p className="text-gray-600 dark:text-gray-300">
						10+
						</p>
					</div>
					<div className="bg-gray-100 dark:bg-[#102a43] rounded-xl p-5">
						<h4 className="font-bold text-cyan-500">
						Technologies
						</h4>

						<p className="text-gray-600 dark:text-gray-300">
						ReactJs,Javascript,HTML,CSS				</p>
					</div>
					<div className="bg-gray-100 dark:bg-[#102a43] rounded-xl p-5">
						<h4 className="font-bold text-cyan-500">
						Location
						</h4>

						<p className="text-gray-600 dark:text-gray-300">
						Kerala,India
						</p>
					</div>
					<a  href={resume} download className="inline-block mt-8 px-8 py-4 bg-cyan-500 text-white rounded-full hover:scale-105 duration-300">
					Download Resume
					</a>
				</div>
			</div>

			{/* Right */}
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}>
				<h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Frontend Developer</h3>
				 <p className="text-gray-600 dark:text-gray-300 leading-8">
					I'm a Frontend Developer with experience on
					building responsive, user-friendly, and accessible web
					applications. I enjoy creating clean interfaces using
					React, JavaScript, Tailwind CSS, HTML, and CSS while
					following modern development practices.
				</p>
			</motion.div>

			</div>
      </div>
    </motion.section>
  );
};

export default About;