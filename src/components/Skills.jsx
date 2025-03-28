import React from "react";

const Skills = ({ skillData }) => {
  // skillData = [{title: "",  description: "",}, {title: "",  description: "",},]
  return (
    <section>
      <h3>Skills</h3>
      <table>
        <tbody>
          {skillData.map((skill, index) => (
            <tr key={index}>
              <th>{skill.title}:</th>
              <td>{skill.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Skills;
