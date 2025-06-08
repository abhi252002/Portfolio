import React from "react";
import abhi from "../assets/abhi.png";
function About() {
  return (
    <div id="about" className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src={abhi}
              alt="Abhishek Prajapati"
              className="w-72 h-80 rounded object-cover"
            />
          </div>

          {/* Right Side: Paragraph and Progress Bars */}
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-lg">
              I'm Abhishek Prajapati, a Front-End Developer and BCA student at
              MERI, New Delhi. I build responsive web and full-stack apps using
              React, Node.js, MongoDB, and APIs. Skilled in DSA, passionate
              about AI, SaaS, and hackathons — always learning and building
              impactful solutions.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="javascript" className="w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-9/12"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="react" className="w-2/12">
                  React
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-8/12"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="uiux" className="w-2/12">
                  Java
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-7/12"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="react" className="w-2/12">
                  DSA
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-8/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-between text-center">
          {/* Years Experience */}
          <div>
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 relative">
              1+
              <span className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-gray-400"></span>
            </h3>
            <p className="text-lg text-gray-400 mt-2">Years Experience</p>
          </div>

          {/* Projects Completed */}
          <div>
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 relative">
              3+
              <span className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-gray-400"></span>
            </h3>
            <p className="text-lg text-gray-400 mt-2">Projects Completed</p>
          </div>

          {/* Happy Clients */}
          <div>
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              1+
            </h3>
            <p className="text-lg text-gray-400 mt-2">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
