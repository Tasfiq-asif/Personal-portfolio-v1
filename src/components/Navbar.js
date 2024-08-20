import React, { useState } from "react";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
// Updated import path
 // Heroicons for the menu icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900 p-5 ">
      <div className="flex items-center justify-between max-w-7xl mx-auto ">
        <div className="text-white text-2xl font-bold">MyPortfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-8">
          <Link
            className="cursor-pointer text-lg hover:text-teal-400"
            to="hero"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer text-lg hover:text-teal-400"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="cursor-pointer text-lg hover:text-teal-400"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="cursor-pointer text-lg hover:text-teal-400"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <RxCross2 className="h-6 w-6" /> : <CiMenuFries className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <Link
          className="block px-4 py-2 text-lg text-white hover:text-teal-400"
          to="hero"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          className="block px-4 py-2 text-lg text-white hover:text-teal-400"
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          className="block px-4 py-2 text-lg text-white hover:text-teal-400"
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          className="block px-4 py-2 text-lg text-white hover:text-teal-400"
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
