import React from "react";

const Experience = ({ experienceData }) => {
  // {title: "", company: "", duration: "", description:[],}

  return (
    <section>
      <h3>Experience</h3>

      {experienceData.map((data, index) => (
        <div key={index}>
          <p className="title">
            <strong>{data.title}</strong>
            <span className="rightSide">{data.duration}</span>
          </p>
          <i>{data.company}</i>

          <ul>
            {data.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
