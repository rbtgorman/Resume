import React from 'react';

function Education() {
  const educationList = [
    {
      degree: "Master of Science in Business Analytics",
      institution: "Rutgers University - Camden",
      year: "September 2023 - Present",
      details: "An MS in Business Analytics degree at Rutgers University, Camden helps students hone the skills to apply modern data science and machine learning capabilities at work to solve real-world business problems."
    },
    {
      degree: "Bachelor of Science in Computer Science / Business Management",
      institution: "Rutgers University - Camden",
      year: "2016 - 2021",
      details: 
      "Graduated with a degree in Computer Science and Business Management (HR Concentration) with a GPA of 3.810."
      +
      "Heavily involved with groups and organizations on campus such as ACM (Association of Computing and Machinery) and LASO (Latin American Student Organization).",
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Education</h2>
      {educationList.map((edu, index) => (
        <div key={index} className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
            <h4 className="text-xl text-gray-600 mb-2">{edu.institution}</h4>
            <p className="text-sm text-gray-500 mb-4">{edu.year}</p>
            <p className="text-gray-700">{edu.details}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Education;