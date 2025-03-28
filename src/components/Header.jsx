import React from "react";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Header = ({ personalInfo }) => {
  const info = personalInfo;
  // info = { name: "", mail: "", tel: "", linkedIn: "", gitUp: "", }

  return (
    <header>
      <h1 id="name">{info.name}</h1>
      <p className="para">
        <a href={`mailto:${info.mail}`}>
          <FaEnvelope /> {info.mail}
        </a>{" "}
        |{" "}
        <a href={`tel:${info.tel}`}>
          <FaPhoneAlt /> {info.tel}
        </a>{" "}
        |{" "}
        <a
          href={`https://www.${info.linkedIn}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> {info.linkedIn}
        </a>{" "}
        |{" "}
        <a
          href={`https://www.${info.gitUp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> {info.gitUp}
        </a>
      </p>
    </header>
  );
};

export default Header;
