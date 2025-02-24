import ResumePDF from '../assets/AndrewChoiResumeFeb2025.pdf'
import ResumeImage from '../assets/AndrewChoiResumeFeb2025.jpg'

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Resume</h2>
        <div>
          <img src={ResumeImage}></img>
          <a 
            href={ResumePDF} 
            download="Andrew_Choi_Resume.pdf"
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
