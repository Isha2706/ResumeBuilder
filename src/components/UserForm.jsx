import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    header: { name: "", mail: "", tel: "", linkedIn: "", gitUp: "" },
    summary: "",
    experience: [{ title: "", company: "", duration: "", description: [""] }],
    skills: [{ title: "", description: "" }],
    projects: [{ title: "", description: [""] }],
    certifications: [{ title: "", description: [""] }],
    education: [{ university: "", degree: "", duration: "", cgpa: "" }],
  });

  // Handle input changes
  const handleChange = (section, index, key, e) => {
    const updatedData = [...formData[section]];
    updatedData[index][key] = e.target.value;
    setFormData({ ...formData, [section]: updatedData });
  };

  // Add new fields dynamically
  const addField = (section) => {
    const emptyField = section === "experience"
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

  // Render multiple input fields dynamically
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
      <h1>Resume Builder</h1>

      <form>
        <h3>Header</h3>
        <input
          type="text"
          placeholder="Name"
          value={formData.header.name}
          onChange={(e) =>
            setFormData({ ...formData, header: { ...formData.header, name: e.target.value } })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.header.mail}
          onChange={(e) =>
            setFormData({ ...formData, header: { ...formData.header, mail: e.target.value } })
          }
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formData.header.tel}
          onChange={(e) =>
            setFormData({ ...formData, header: { ...formData.header, tel: e.target.value } })
          }
        />
        <input
          type="text"
          placeholder="LinkedIn"
          value={formData.header.linkedIn}
          onChange={(e) =>
            setFormData({ ...formData, header: { ...formData.header, linkedIn: e.target.value } })
          }
        />
        <input
          type="text"
          placeholder="GitHub"
          value={formData.header.gitUp}
          onChange={(e) =>
            setFormData({ ...formData, header: { ...formData.header, gitUp: e.target.value } })
          }
        />

        <h3>Summary</h3>
        <textarea
          value={formData.summary}
          onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
          placeholder="Write your summary here..."
        />

        <h3>Experience</h3>
        {formData.experience.map((_, index) => (
          <div key={index}>
            {renderDynamicInputs("experience", index, "title")}
            {renderDynamicInputs("experience", index, "company")}
            {renderDynamicInputs("experience", index, "duration")}
            <textarea
              placeholder="Description"
              value={formData.experience[index].description.join(", ")}
              onChange={(e) =>
                handleChange("experience", index, "description", {
                  target: { value: e.target.value.split(", ") },
                })
              }
            />
          </div>
        ))}
        <button type="button" onClick={() => addField("experience")}>
          Add Experience
        </button>

        <h3>Skills</h3>
        {formData.skills.map((_, index) => (
          <div key={index}>
            {renderDynamicInputs("skills", index, "title")}
            {renderDynamicInputs("skills", index, "description")}
          </div>
        ))}
        <button type="button" onClick={() => addField("skills")}>
          Add Skill
        </button>

        <h3>Projects</h3>
        {formData.projects.map((_, index) => (
          <div key={index}>
            {renderDynamicInputs("projects", index, "title")}
            <textarea
              placeholder="Description"
              value={formData.projects[index].description.join(", ")}
              onChange={(e) =>
                handleChange("projects", index, "description", {
                  target: { value: e.target.value.split(", ") },
                })
              }
            />
          </div>
        ))}
        <button type="button" onClick={() => addField("projects")}>
          Add Project
        </button>

        <h3>Certifications</h3>
        {formData.certifications.map((_, index) => (
          <div key={index}>
            {renderDynamicInputs("certifications", index, "title")}
            <textarea
              placeholder="Description"
              value={formData.certifications[index].description.join(", ")}
              onChange={(e) =>
                handleChange("certifications", index, "description", {
                  target: { value: e.target.value.split(", ") },
                })
              }
            />
          </div>
        ))}
        <button type="button" onClick={() => addField("certifications")}>
          Add Certification
        </button>

        <h3>Education</h3>
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
    </>
  );
};

export default UserForm;
