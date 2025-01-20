import { useState } from 'react'
import EagleTAsPicture from '../assets/EagleTAsPicture.jpg'
import SmartJournalPicture from '../assets/SmartJournalPicture.jpg'

const Projects = () => {
  const projects = [
    { 
      title: 'Smart Journal',
      description: 'A journal that tracks your emotions',
      image: SmartJournalPicture, 
      tech:'React, Django REST Framework, REST API, JWT, OpenAI, Docker, Kubernetes, K3s, Argo CD',
      link: 'https://github.com/andrewchoi12/Smart-Journal',
    },
    { 
      title: 'Eagle TAs',
      description: 'A platform that streamlines the teaching assistant application process', 
      image: EagleTAsPicture,
      tech:'Django, SQLite, HTML, CSS, Visual Studio',
      link:'https://github.com/CSCI3356Spring2023/DjangoUnchained'
    },
  ]

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    )
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Project Showcase</h2>
        <div className="relative">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={projects[currentProjectIndex].image || "/placeholder.svg"} 
              alt={projects[currentProjectIndex].title} 
              className="w-full h-100 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {projects[currentProjectIndex].title}
              </h3>
              <p className="text-2xl text-gray-600 mb-3">
                {projects[currentProjectIndex].description}
              </p>
              <p className="text-xl text-gray-500 font-light mb-1">
                {projects[currentProjectIndex].tech}
              </p>
              <a href={projects[currentProjectIndex].link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-xl">
                <i className="fab fa-github"></i> GitHub Link
              </a>
            </div>
          </div>
          
          <button 
            onClick={prevProject} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
            &lt;
          </button>
          <button 
            onClick={nextProject} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
