import React, { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nriyiln",  // replace with your EmailJS service ID
        "template_mniaxhi", // replace with your EmailJS template ID
        form.current,
        "ceeED8EvCbj1zQ4kN"      // replace with your EmailJS user/public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          e.target.reset(); // clear the form
        },
        (error) => {
          setStatus("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side content (contact info) */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">Let's Talk</h3>
            <p className="mb-8 text-lg">I'm open to web development job roles and internship opportunities. Let's connect and build something great together!.</p>

            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className="text-green-400 mr-4 text-xl" />
                <a href="mailto:prajapatiabhi2002@gmail.com" className="hover:underline text-lg">prajapatiabhi2002@gmail.com</a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-green-400 mr-4 text-xl" />
                <span className="text-lg">+91 8076063012</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkedAlt className="text-green-400 mr-4 text-xl" />
                <span className="text-lg">Jeevan Park New Delhi 110059</span>
              </div>
            </div>
          </div>

          {/* Right side content (form) */}
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-lg">Your Name</label>
                <input
                  type="text"
                  name="user_name" // name must match template variable
                  id="name"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-lg">Email</label>
                <input
                  type="email"
                  name="user_email" // name must match template variable
                  id="email"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-lg">Message</label>
                <textarea
                  id="message"
                  name="message" // name must match template variable
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full transform transition duration-300 hover:scale-105"
              >
                Send
              </button>
              {status && <p className="mt-4 text-green-400">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
