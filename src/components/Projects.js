import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiTailwindcss } from "react-icons/si";
import Matchmaker from '../assets/Matchmaker.png'
import Jobhunt from '../assets/jobhunt.png'
import artsio from '../assets/artsio.png'

const projects = [
  {
    title: "Project 1",
    description: "This project is a comprehensive matrimonial website designed to help users create, manage, and view biodatas.",
    imageUrl: Matchmaker,
    liveLink: "https://matchmaker-36ccf.web.app/",
    technologies: [<FaReact />, <SiMongodb />, <SiExpress />, <SiFirebase />, <SiTailwindcss />],
  },
  {
    title: "Project 2",
    description: "A platform for job seekers and employers to connect.User can create,manage,appply for job post",
    imageUrl: Jobhunt,
    liveLink: "https://jobhunt-c75ba.web.app/",
    technologies: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiTailwindcss />],
  },
  {
    title: "Project 3",
    description: "This website is a platform dedicated to the exploration and appreciation of various art and craft categories.",
    imageUrl: artsio,
    liveLink: "https://artsio-2a535.web.app/",
    technologies: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiTailwindcss />],
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="py-20 px-6 md:px-20 text-center max-w-7xl mx-auto ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex justify-center space-x-4 mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-2xl text-teal-400">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-gray-900 transition duration-300"
            >
              View Live
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
