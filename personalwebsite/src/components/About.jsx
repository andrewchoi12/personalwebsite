import SeniorPortrait from '../assets/SeniorPortrait2.jpg'

const About = () => {
    return (
      <section id="about" className="py-3">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-0">About Me</h2>
          <div className="flex flex-wrap mt-0">
            <div className="w-full md:w-1/2 p-20">
              <img src={SeniorPortrait} alt="Andrew Choi" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 p-10 flex items-center justify-center">
              <p className="text-gray-600 text-lg mt-6 mb-8">
                I'm a recent graduate of Boston College with a degree in computer science. Through internship work, classes, and projects I have gained a strong and well-rounded foundation in software engineering.
                <br /><br />
                I am driven by a passion to solve complex problems and thrive on challenging myself and learning as much as I can. I am excited to use these skills in a full-time software engineering role.
              </p>
            </div>
          </div>
          <div className="mt-0 text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="flex justify-center space-x-6">
            <a href="mailto:andrewchoi2462@gmail.com" className="text-gray-600 hover:text-gray-800 text-xl">
                <i className="fas fa-envelope"></i> andrewchoi2462@gmail.com
              </a>
              <a className="text-gray-600 hover:text-gray-800 text-xl">
                <i className="fas fa-phone-alt"></i> 610-999-3809
              </a>
              <a href="https://github.com/andrewchoi12" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-xl">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/andrew-choi-bc" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-xl">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About