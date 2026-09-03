import profile from "../assets/images/profile.png";
import resume from "../assets/resume/Resume_ReshmaMerin.pdf";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";
const Hero = () => {
	const titles =[
		"React developer",
		"UI Designer",
		"Frontend Developer"
	];
	const [titleIndex,setTitleIndex] = useState(0);
    useEffect(() =>{
        const interval = setInterval(() => {
        setTitleIndex((prev)=>
        prev === titles.length-1 ? 0 : prev +1
        );
        },2000)
         return () => clearInterval(interval);
    },[])
  return (
    <section id="home" className="scroll-mt-24 min-h-screen pt-24 bg-gray-100 dark:bg-[#071A2B] text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-96px)] flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* Left Section */}
        <motion.div className="flex-1 text-center md:text-left" 
        initial={{ opacity: 0,x: -100}}
        animate={{opacity: 1, x: 0}}
         transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 font-medium mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Reshma
          </h1>

          <motion.h2
            key={titleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-4xl font-semibold dark:text-gray-300 text-gray-700 mb-8"
            >
            {titles[titleIndex]}
            </motion.h2>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-cyan-500 text-white rounded-full hover:scale-105 duration-300">
              Hire Me
            </button>

            <a href={resume} download className="px-6 py-4 border border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white duration-300">
              Download CV
            </a>
          </div>
          <div className="flex gap-6 mt-10 justify-center md:justify-start">
          <a href="https://github.com/reshmamerinpa" target="_blank" rel="noreferrer" className="text-3xl text-gray-500 dark:text-gray-300 hover:text-cyan-400 hover:-translate-y-2 duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/reshma-merin-pa/" target="_blank" rel="noreferrer" className="text-3xl text-gray-500 dark:text-gray-300 hover:text-cyan-400 hover:-translate-y-2 duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:merinreshma14@gmail.com" target="_blank" rel="noreferrer" className="text-3xl text-gray-500 dark:text-gray-300 hover:text-cyan-400 hover:-translate-y-2 duration-300">
            <FaEnvelope />
          </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
              <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">

			<div  className="absolute inset-10 bg-cyan-500 blur-3xl opacity-30 rounded-full"/>
            {/* Animated Ring */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin-slow shadow-[0_0_80px_rgba(6,182,212,0.35)]" />

            {/* Image Container */}
            <div className="absolute inset-2 rounded-full bg-[#061b2d] overflow-hidden border-4 border-white/20">
              <img src={profile} alt="Reshma" className="w-full h-full object-cover object-top" draggable="false"/>
              <div className="absolute -top-3 left-10 w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>

              <div className="absolute top-16 -right-2 w-3 h-3 rounded-full bg-purple-400 animate-ping"></div>

              <div className="absolute bottom-10 -left-4 w-4 h-4 rounded-full bg-blue-400 animate-bounce"></div>
            </div>
          </div>
        </motion.div>

      </div>
	  <div className="flex justify-center pb-8">
            <a
                href="#about"
                className="animate-bounce text-cyan-400 text-xl"
            >
                ↓ Scroll Down
            </a>
        </div>
    </section>
	
  );
};

export default Hero;