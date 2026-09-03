import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#071A2B] py-12 transition-colors duration-300">
     <div className="max-w-7xl mx-auto px-6 py-12 ">

      <div className="text-center">
        <h2 className="text-3xl font-bold text-cyan-500 ">Reshma</h2>
       <p className="mt-3 text-gray-600 dark:text-gray-300">Frontend Developer | React Enthusiast</p>
      </div>

        <div className="flex justify-center gap-8 mt-8 ">
          <a href="https://github.com/reshmamerinpa" target="_blank" rel="noreferrer" className="text-3xl text-gray-500  dark:text-gray-300 hover:text-cyan-400 hover:-translate-y-2 duration-300"><FaGithub /></a>   
          <a href="https://www.linkedin.com/in/reshma-merin-pa/" target="_blank" rel="noreferrer" className="text-3xl text-gray-500 dark:text-gray-300 hover:text-cyan-400 hover:-translate-y-2 duration-300"><FaLinkedin /></a>
          <a href="mailto:merinreshma14@gmail.com" target="_blank" rel="noreferrer" className="text-3xl text-gray-500 dark:text-gray-300 hover:text-cyan-400 hover:-translate-y-2 duration-300"><FaEnvelope /></a>
        </div>  
      <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>  
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          @{new Date().getFullYear()} Reshma.All Rights Reserved
        </p>
        <a href="#home" className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition duration-300"> <FaArrowUp /> Back to Top</a>
      </div>
     </div>
    </footer>
  );
};

export default Footer;