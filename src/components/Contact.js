import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4"
>
Contact Me
</motion.h2>
<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.3 }}
className="text-lg text-gray-400 max-w-3xl mx-auto mb-10"
>
Feel free to reach out to me via email at{" "}
<a
       href="mailto:tasfiq.asif.23@gmail.com"
       className="text-teal-400 underline hover:text-teal-300 transition duration-300"
     >
tasfiq.asif.23@gmail.com
</a>
</motion.p>
</section>
);
};

export default Contact;
