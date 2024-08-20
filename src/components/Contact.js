import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_USER_ID" // Replace with your EmailJS user ID (or public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true); // Set a message to show a success alert
          e.target.reset(); // Reset form fields after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="p-8 ">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto  p-6 rounded-lg shadow-md">
        <label htmlFor="name" className="block text-gray-200 mb-2 bg">Name:</label>
        <input 
          type="text" 
          name="user_name" 
          id="name" 
          required 
          className="w-full p-3 border border-gray-300 rounded mb-4 text-black"
        />

        <label htmlFor="email" className="block text-gray-200 mb-2">Email:</label>
        <input 
          type="email" 
          name="user_email" 
          id="email" 
          required 
          className="w-full p-3 border border-gray-300 rounded mb-4 text-black"
        />

        <label htmlFor="message" className="block text-gray-200 mb-2">Message:</label>
        <textarea 
          name="message" 
          id="message" 
          required 
          rows="4" 
          className="w-full p-3 border border-gray-300 rounded mb-4 text-black"
        ></textarea>

        <button 
          type="submit" 
          className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition duration-300"
        >
          Send
        </button>
      </form>
      {sent && <p className="text-green-500 text-center mt-4">Your message has been sent!</p>}
    </section>
  );
};

export default Contact;
