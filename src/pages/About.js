
import React from "react";
import "./About.css";
import profileImage from "../assets/myimage.jpeg";
import cvFile from "../assets/Sirisha_Annapureddy_CV.pdf";

import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiDjango, SiPython } from "react-icons/si";

const SKILLS_TECH = [
  { name: "Python", icon: <SiPython /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Django", icon: <SiDjango /> },
];

const SKILLS_SOFT = [
  { name: "Logical Thinking", icon: "💡" },
  { name: "Creativity", icon: "🎨" },
  { name: "Problem Solving", icon: "🧩" },
  { name: "Team Work", icon: "🤝" },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        {/* <h1 className="about-title">About <span className="me">Me</span></h1> */}
          <h1 className="about-title">
            About{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #ff00aa, #8a2be2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              Me
            </span>
          </h1>
        <div className="about-content">
          <div className="about-img-wrap">
            <div className="about-img">
              <div className="about-placeholder">
                 <img src={profileImage} alt="Profile" />
              </div>
            </div>
          </div>

          <div className="about-text">
            <h2 className="about-name">Sirisha Annapureddy</h2>
            <p>
              Hello! I'm Sirisha Annapureddy, Full Stack Developer skilled in React, 
              JavaScript, Python, and Django, with hands-on experience building secure
               and scalable web applications. Passionate about creating efficient solutions 
               to real-world problems.
            </p>
            <p>
              I enjoy building responsive web applications and exploring artificial intelligence.
              My goal is to create innovative solutions that make a real-world impact.
            </p>

            <a href={cvFile} download className="download-cv-btn">
              Download CV ⬇️
            </a>
          </div>
        </div>
      </section>


  <section className="skills-section">

  <h2 className="skills-title">My Technical Skills</h2>

  <div className="skills-grid">
    {SKILLS_TECH.map((s) => (
      <div key={s.name} className="skill-card">
        <div className="skill-icon">{s.icon}</div>
        <span className="skill-name">{s.name}</span>
      </div>
    ))}
  </div>

  {/* Soft Skills */}
  <h2 className="skills-title soft-title">My Soft Skills</h2>

  <div className="skills-grid">
    {SKILLS_SOFT.map((s) => (
      <div key={s.name} className="skill-card">
        <div className="skill-icon">{s.icon}</div>
        <span className="skill-name">{s.name}</span>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}

export default About;