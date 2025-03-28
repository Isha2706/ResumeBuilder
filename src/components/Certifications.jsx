import React from "react";

const Certifications = ({ certificationData }) => {
  // certificationData = [{title: "",  description: ["", "", ],}, {title: "",  description: ["", "",],},]
  return (
    <section>
      <h3>Certifications</h3>
      {certificationData.map((cert, index) => (
        <div key={index}>
          <p className="title">
            <strong>{cert.title}:</strong>
          </p>
          <table>
            <tbody>
              {cert.description.map((desc, i) => {
                if (i % 3 === 0) {
                  return (
                    <tr key={`row-${i / 3}`}>
                      <td>
                        <li>{desc}</li>
                      </td>
                      {cert.description[i + 1] && (
                        <td>
                          <li>{cert.description[i + 1]}</li>
                        </td>
                      )}
                      {cert.description[i + 2] && (
                        <td>
                          <li>{cert.description[i + 2]}</li>
                        </td>
                      )}
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          <br />
        </div>
      ))}
    </section>
  );
};

export default Certifications;
