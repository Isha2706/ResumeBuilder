import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import UserForm from "./components/UserForm";

import data from "./database/Data";


function App() {

  const [selectedId, setSelectedId] = useState(1);
  // Selected databased on `id`
  const selectedData = data.find((item) => item.id === selectedId);

  const handleInputChange = (e, section, index, key) => {
    const value = e.target.value;
    setFormData((prevData) => {
      const updatedSection = [...prevData[section]];
      if (typeof updatedSection[index] === "object" && key) {
        updatedSection[index][key] = value; // Update nested field (e.g., title in experience)
      } else {
        updatedSection[index] = value; // Update if it's a string
      }
      return { ...prevData, [section]: updatedSection };
    });
  };
  
  return (
    <>
    <div id="form">
      <UserForm />
    </div>
    <div id="page">
      <div id="btn">
        <button onClick={() => setSelectedId(1)}>Resume 1</button>
        <button onClick={() => setSelectedId(2)}>Resume 2</button>
      </div>
      <div id="resume">
      <Header personalInfo={selectedData.header} />
      <Summary summaryData={selectedData.summary} />
      <Experience experienceData={selectedData.experience}  />
      <Skills skillData={selectedData.skills} />
      <Projects projectData={selectedData.projects} />
      <Certifications certificationData={selectedData.certifications} />
      <Education educationData={selectedData.education}/>
      </div>
      
    </div>
    </>
    
  );
}

export default App;
