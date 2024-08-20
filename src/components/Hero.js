import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-center px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-4"
      >
        <h1 className="text-xl md:text-3xl lg:text-4xl">Hi, my name is</h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-teal-400">Tasfiqul Asif.</h2>
        <h3 className="text-lg md:text-2xl lg:text-3xl">I build things for the web.</h3>
        <p className="text-base md:text-lg lg:text-xl max-w-md md:max-w-lg mx-auto text-gray-400">
          I’m a MERN developer specializing in building exceptional digital experiences.
        </p>
        
        <Link
          className="cursor-pointer text-base md:text-lg lg:text-xl hover:text-teal-400"
          to="projects"
          smooth={true}
          duration={500}
        >
          <button className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition duration-300">
            Check out my work!
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
