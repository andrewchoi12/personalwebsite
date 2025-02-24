import SeniorPortrait from '../assets/SeniorPortrait2.jpg'

const About = () => {
    return (
      <section id="about" className="py-3">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap">
            <div className="w-full md:w-1/2 py-4 md:p-20">
              <div className="max-w-[200px] md:max-w-full mx-auto">
                <img src={SeniorPortrait} alt="Andrew Choi" className="rounded-lg shadow-lg max-w-full h-auto" />
              </div>
            </div>
            <div className="w-full md:w-1/2 py-4 md:p-10 flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                I'm a recent graduate of Boston College with a degree in computer science. Through internship work, classes, and projects I have gained a strong and well-rounded foundation in software engineering.
                <br /><br />
                I am driven by a passion to solve complex problems and thrive on challenging myself and learning as much as I can. I am excited to use these skills in a full-time software engineering role.
              </p>
            </div>
          </div>
          <div className="mt-4 text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="flex flex-col md:flex-row justify-center md:space-x-6 space-y-4 md:space-y-0">
              <a href="mailto:andrewchoi2462@gmail.com" className="text-gray-600 hover:text-gray-800 text-lg md:text-xl">
                <i className="fas fa-envelope"></i> andrewchoi2462@gmail.com
              </a>
              <a className="text-gray-600 hover:text-gray-800 text-lg md:text-xl">
                <i className="fas fa-phone-alt"></i> 610-999-3809
              </a>
              <a href="https://github.com/andrewchoi12" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-lg md:text-xl">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/andrew-choi-bc" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-lg md:text-xl">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About