import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-4"
      >
        <h1 className="text-2xl md:text-4xl">Hi, my name is</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-teal-400">Tasfiqul Asif.</h2>
        <h3 className="text-xl md:text-3xl">I build things for the web.</h3>
        <p className="text-lg md:text-xl max-w-lg mx-auto text-gray-400">
          I’m a MERN developer specializing in building exceptional digital experiences.
        </p>
        
         <Link
            className="cursor-pointer text-lg hover:text-teal-400"
            to="projects"
            smooth={true}
            duration={500}
          >
           <button className="mt-8 px-8 py-4 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition duration-300">
            Check out my work!
          </button>
          </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
