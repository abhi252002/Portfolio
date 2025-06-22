import React from 'react'
import bgRemover from "/src/assets/bg_remover.png";
import amazon from "/src/assets/amazon.png"
import shifra from "/src/assets/shifra.png"
import textToImage from "/src/assets/textToImage.png"
import quizApp from "/src/assets/quizApp.png"
import photogr from "/src/assets/photogr.png"

import abhi from "/src/assets/abhi1.png"
function Projects() {
  const projects = [
  
    {
      id: 1,
      name: "Bg Remover",
      technologies: "Full Stack",
      Image: bgRemover,
      github: "https://github.com/abhi252002/Bg-remover",
      live: "https://bg-remover-52q9.vercel.app/"
    },
    {
      id: 2,
      name: "Amazon Landing Page",
      technologies: "Front end",
      Image: amazon,
      github: "https://github.com/abhi252002/Amazon-landing-page",
      live: " "
    },
    {
      id: 3,
      name: "Shifra 2.0 Ai Assistant",
      technologies: "Front end",
      Image: shifra,
      github: "https://github.com/abhi252002/Shifra-2.0-Ai-Assistant"
    },
    {
      id: 4,
      name: "Text to image generator",
      technologies: "Front end",
      Image: textToImage,
      github: "https://github.com/abhi252002/Text-to-Image-Generator-Ai"
    },
    {
      id: 5,
      name: "Quiz App",
      technologies: "Front end",
      Image: quizApp ,
      github: "https://github.com/abhi252002/Quiz-app-react"
    },
    {
      id: 6,
      name: "Photography web",
      technologies: "Front end",
      Image: photogr ,
      github: "https://github.com/abhi252002/Photography-Web"
    }
  ]
  return (
    <div className="bg-black text-white py-20" id="projects">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project=>(
          <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 space-x-3'>
            <img src={project.Image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="mt-2 text-gray-400 mb-4">{project.technologies}</p>
            <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full " target='_blank' rel="noopener noreferred" >GitHub</a>
            <a href={project.live} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target='_blank' rel="noopener noreferred">Live Preview</a>
          </div>
        ))}

      </div>
      </div>
      </div>
  )
}

export default Projects
