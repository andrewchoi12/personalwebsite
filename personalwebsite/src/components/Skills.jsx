import { useState } from "react";

const Skills = () => {
  const sections = [
    {
      title: "Languages",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "C",
        "HTML",
        "CSS",
        "Swift",
        "Typescript",
      ],
    },
    {
      title: "Frameworks + Technologies",
      skills: [
        "React",
        "Django REST Framework",
        "Git",
        "Figma",
        "Rest API",
        "OpenAI",
        "JWT",
        "CoreML",
        "Bootstrap",
        "TestNG",
        "pytest",
        "Agile Methodologies",
      ],
    },
    {
      title: "DevOps",
      skills: [
        "Kubernetes",
        "K3s",
        "Docker",
        "Rancher",
        "ArgoCD",
        "Git",
        "Dynamics365",
        "AWS",
      ],
    },
  ];

  const [openSections, setOpenSections] = useState([]);

  const toggleAccordion = (index) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="skills" className="mt-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Skills
        </h2>
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md text-center hover:bg-blue-600 transition-colors"
            >
              {section.title}
            </button>
            {openSections.includes(index) && (
              <div className="bg-white shadow-md p-2 rounded-md mt-2 transition-all duration-300">
                <div className="flex flex-wrap justify-center">
                  {section.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-100 rounded-lg shadow-sm p-3 m-2 hover:bg-gray-200 transition-colors"
                    >
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
