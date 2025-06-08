import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiGit, SiGithub } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-white text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-400 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300 text-3xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
    { name: "Git", icon: <SiGit className="text-red-500 text-3xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-white text-3xl" /> },
  ];

  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Skills / Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-2 flex justify-center">{skill.icon}</div>
              <p className="text-lg mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
