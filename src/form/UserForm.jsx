import React, { useState, useEffect } from "react";
import "./UserForm.css";

import data from "../database/Data";

const UserForm = ({ onGenerateResume, onLiveUpdate }) => {
  const [formData, setFormData] = useState(data[0]);

  useEffect(() => {
    onLiveUpdate(formData);
  }, [formData, onLiveUpdate]);

  const handleChange = (section, index, key, event) => {
    const updatedData = [...formData[section]];
    if (key === "description" && Array.isArray(updatedData[index][key])) {
      updatedData[index][key] = event.target.value.split("\n");
    } else {
      updatedData[index][key] = event.target.value;
    }
    setFormData({ ...formData, [section]: updatedData });
  };

  const addField = (section) => {
    const emptyField =
      section === "experience"
        ? { title: "", company: "", duration: "", description: [""] }
        : section === "skills"
        ? { title: "", description: "" }
        : section === "projects"
        ? { title: "", description: [""] }
        : section === "certifications"
        ? { title: "", description: [""] }
        : { university: "", degree: "", duration: "", cgpa: "" };

    setFormData({ ...formData, [section]: [...formData[section], emptyField] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateResume(formData); // Submit final form data
  };

  const renderDynamicInputs = (section, index, key) => (
    <input
      type="text"
      value={formData[section][index][key]}
      onChange={(e) => handleChange(section, index, key, e)}
      placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
    />
  );

  return (
    <>
      <div className="user-form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onGenerateResume(formData);
          }}
          className="user-form"
        >
          <h1>Resume Builder</h1>

          <h3 className="form-h3">Header</h3>
          <input
            type="text"
            placeholder="Name"
            value={formData.header.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                header: { ...formData.header, name: e.target.value },
              })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.header.mail}
            onChange={(e) =>
              setFormData({
                ...formData,
                header: { ...formData.header, mail: e.target.value },
              })
            }
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.header.tel}
            onChange={(e) =>
              setFormData({
                ...formData,
                header: { ...formData.header, tel: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="LinkedIn"
            value={formData.header.linkedIn}
            onChange={(e) =>
              setFormData({
                ...formData,
                header: { ...formData.header, linkedIn: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="GitHub"
            value={formData.header.gitUp}
            onChange={(e) =>
              setFormData({
                ...formData,
                header: { ...formData.header, gitUp: e.target.value },
              })
            }
          />

          <h3 className="form-h3">Summary</h3>
          <textarea
            value={formData.summary}
            onChange={(e) =>
              setFormData({ ...formData, summary: e.target.value })
            }
            placeholder="Write your summary here..."
          />

          <h3 className="form-h3">Experience</h3>
          {formData.experience.map((_, index) => (
            <div key={index}>
              {renderDynamicInputs("experience", index, "title")}
              {renderDynamicInputs("experience", index, "company")}
              {renderDynamicInputs("experience", index, "duration")}
              <textarea
                placeholder="Description (Press Enter for a new line)"
                value={formData.experience[index].description.join("\n")}
                onChange={(e) =>
                  handleChange("experience", index, "description", e)
                }
              />
            </div>
          ))}
          <button type="button" onClick={() => addField("experience")}>
            Add Experience
          </button>

          <h3 className="form-h3">Skills</h3>
          {formData.skills.map((_, index) => (
            <div key={index}>
              {renderDynamicInputs("skills", index, "title")}
              <input
                type="text"
                value={formData.skills[index].description}
                onChange={(e) =>
                  handleChange("skills", index, "description", e)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const updatedData = [...formData.skills];
                    updatedData[index].description += ", ";
                    setFormData({ ...formData, skills: updatedData });
                  }
                }}
                placeholder="Write skills and separate them by commas"
              />
            </div>
          ))}
          <button type="button" onClick={() => addField("skills")}>
            Add Skill
          </button>

          <h3 className="form-h3">Projects</h3>
          {formData.projects.map((_, index) => (
            <div key={index}>
              {renderDynamicInputs("projects", index, "title")}
              <textarea
                placeholder="Description (Press Enter for a new line)"
                value={formData.projects[index].description.join("\n")}
                onChange={(e) =>
                  handleChange("projects", index, "description", e)
                }
              />
            </div>
          ))}
          <button type="button" onClick={() => addField("projects")}>
            Add Project
          </button>

          <h3 className="form-h3">Certifications</h3>
          {formData.certifications.map((_, index) => (
            <div key={index}>
              {renderDynamicInputs("certifications", index, "title")}
              <textarea
                placeholder="Write all certifications (Press Enter for a new line)"
                value={formData.certifications[index].description.join("\n")}
                onChange={(e) =>
                  handleChange("certifications", index, "description", e)
                }
              />
            </div>
          ))}
          <button type="button" onClick={() => addField("certifications")}>
            Add Certification
          </button>

          <h3 className="form-h3">Education</h3>
          {formData.education.map((_, index) => (
            <div key={index}>
              {renderDynamicInputs("education", index, "university")}
              {renderDynamicInputs("education", index, "degree")}
              {renderDynamicInputs("education", index, "duration")}
              {renderDynamicInputs("education", index, "cgpa")}
            </div>
          ))}
          <button type="button" onClick={() => addField("education")}>
            Add Education
          </button>

          <button type="submit">Generate Resume</button>
        </form>
      </div>
      <button className="btn" onClick={() => setFormData(data[0])}>
        Resume 1
      </button>
      <button className="btn" onClick={() => setFormData(data[1])}>
        Resume 2
      </button>
    </>
  );
};

export default UserForm;
