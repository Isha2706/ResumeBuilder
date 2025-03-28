import React from "react";

const Education = ({ educationData }) => {
  // educationData = [{ university: "", degree: "", duration: "", cgpa: "", }, {},],
  return (
    <section>
      <h3>Education</h3>
      {educationData.map((education, index) => (
        <div key={index}>
          <p className="title">
            <strong>{education.university}</strong>, {education.degree}
            <span className="rightSide">{education.duration}</span>
          </p>
          <ul>
            <li>CGPA: {education.cgpa}</li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Education;
