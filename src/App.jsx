import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";

import UserForm from "./form/UserForm";
import data from "./database/Data";

function App() {
  const [selectedId, setSelectedId] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);

  const selectedData = data.find((item) => item.id === selectedId);

  const handleLiveUpdate = (updatedData) => {
    setFormData(updatedData);
  };

  const handleGenerateResume = (finalData) => {
    setFormData(finalData);
    setShowForm(false);
  };

  return (
    <>
      <div id="left-side">
        <div className="div-btn">
          <button className="btn" onClick={() => setShowForm(true)}>
            Generate your own
          </button>
          {showForm ? (
            <div className="userForm">
              <UserForm
                onGenerateResume={handleGenerateResume}
                onLiveUpdate={handleLiveUpdate}
              />
            </div>
          ) : (
            <>
              <button className="btn" onClick={() => setSelectedId(1)}>
                Resume 1
              </button>
              <button className="btn" onClick={() => setSelectedId(2)}>
                Resume 2
              </button>
            </>
          )}
        </div>
      </div>

      <div id="page">
        <div id="resume">
          <Header
            personalInfo={formData ? formData.header : selectedData.header}
          />
          <Summary
            summaryData={formData ? formData.summary : selectedData.summary}
          />
          <Experience
            experienceData={
              formData ? formData.experience : selectedData.experience
            }
          />
          <Skills
            skillData={formData ? formData.skills : selectedData.skills}
          />
          <Projects
            projectData={formData ? formData.projects : selectedData.projects}
          />
          <Certifications
            certificationData={
              formData ? formData.certifications : selectedData.certifications
            }
          />
          <Education
            educationData={
              formData ? formData.education : selectedData.education
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
