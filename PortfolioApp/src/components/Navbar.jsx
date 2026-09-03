import { useState, useContext ,useEffect} from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import navLinks from "../data/navLinks.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const[activeSection , setActiveSection] = useState("home");
  useEffect(()=>{
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
              setActiveSection(entry.target.id);
          }
        }); 
      },
      {
        threshold:0.6,
      }
    )
    sections.forEach((section)=>{
      observer.observe(section);
    })
    return()=>{
         sections.forEach((section)=>{
      observer.observe(section);
    });
    };
  },[])
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#071A2B]/80 backdrop-blur-md shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 cursor-pointer"
        >
          Reshma
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.path}
                className="text-gray-800 dark:text-white hover:text-cyan-400 duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme & Mobile Menu Buttons */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-800 dark:text-white" >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-2xl text-cyan-400 hover:rotate-180 transition-transform duration-500"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#071A2B] px-6 py-4 transition-colors duration-300">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`duration-300 transform hover:text-cyan-400 ${
                    activeSection === link.path.substring(1)
                      ? "text-cyan-500 font-semibold scale-105"
                      : "text-gray-800 dark:text-white"
                  }`}
                  >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;