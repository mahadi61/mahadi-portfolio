import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full bg-[#0C134F] z-10 max-w-6xl fixed top-0 py-5 ">
      <div className="">
        <h1 className="text-[#ccd6f6] font-bold  text-3xl">Mahadi Hasan</h1>
      </div>

      <div className={` flex items-center gap-4`}>
        <ul
          className={`lg:flex ${
            isMenuOpen
              ? "flex flex-col absolute top-14 left-0 z-10 bg-blue-700 w-56 rounded-2xl py-4  text-center"
              : "hidden"
          }  text-white gap-4 `}
        >
          <li className="mr-3">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              className=" hover:text-[#39f4ed] hover:underline"
            >
              Home
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              className=" hover:text-[#39f4ed] hover:underline"
            >
              About
            </Link>
          </li>

          <li className="mr-3">
            <Link
              className=" hover:text-[#39f4ed] hover:underline"
              to="skills"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Skills
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className=" hover:text-[#39f4ed] hover:underline"
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className=" hover:text-[#39f4ed] hover:underline"
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          to="contact"
          className="text-white border-2 px-5 py-2 hover:bg-[#39f4ed] hover:text-black  duration-300 border-[#39f4ed] font-semibold hidden md:block"
        >
          Hire Now
        </Link>
      </div>
      <div className="lg:hidden">
        <button
          className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[#ccd6f6]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <FaBars className="text-[#ccd6f6]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
