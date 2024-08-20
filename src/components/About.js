import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiJavascript, SiMongodb } from "react-icons/si";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 px-6 md:px-20 text-center h-screen flex justify-center items-center">
    <div>
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 }
        }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4"
      >
        About Me
      </motion.h2>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 }
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-lg text-gray-400 max-w-3xl mx-auto"
      >
        I’m Tasfiqul Asif, a passionate MERN stack developer with a unique blend of corporate experience and a deep love for programming. After five years in the corporate world, I moved overseas and discovered my true calling in web development. Now, I'm on a mission to craft innovative and scalable web applications that make a difference.
      </motion.p>

      {/* New Educational Qualification Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 }
        }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-bold mb-4 mt-8"
      >
        Educational Qualification
      </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-l-4xl font-bold max-w-xl mx-auto text-gray-400"
        >
          I hold a Bachelor in Textile Technology from Ahsanullah University of Science and Technology, 
          and a Master of Software Engineering from Torrens University Australia.
        </motion.p>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 }
        }}
        transition={{ duration: 0.8, delay: 2 }}
        className="flex flex-wrap gap-3 h-16 justify-center space-x-6 text-4xl text-teal-400 my-6"
      >
        <FaReact title="React" />
        <SiJavascript title="JavaScript" />
        <FaNodeJs title="Node.js" />
        <SiExpress title="Express.js" />
        <SiMongodb title="MongoDB" />
        <FaPython title="Python" />
        <SiFirebase title="Firebase" />
      </motion.div>

      <motion.a
  href="https://docs.google.com/document/d/1WHen_pmwbG_uFEC4stXjljZo8Q_VyOyYxxKlZCIT8pA/edit?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-teal-400 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-teal-500 mt-7"
>
  Download My Resume
</motion.a>
    </div>
    </section>
  );
};

export default About;
