import React from "react";
import "./Services.css";
import { MdDevices } from "react-icons/md";

function Services() {

  const services = [
    {
      title: "Full Stack Web Development",
      desc: "Building responsive and scalable web applications using React, JavaScript, Python, and Django.",
      icon: "</>"
    },
    {
      title: "Frontend Development",
      desc: "Creating modern, interactive, and user-friendly interfaces with React and modern UI practices.",
      icon: "⚛"
    },
    {
      title: "Backend Development",
      desc: "Developing secure backend systems, APIs, and database management using Python, Django, and MySQL.",
      icon: "🗄"
    },
    {
      title: "Responsive UI Design",
      desc: "Designing clean, modern, and visually appealing user interfaces for websites and web applications.",
      icon: <MdDevices />
    }
  ];

  return (
    <div className="services-container">

      <h1 className="about-title">
        My{" "}
        <span
          style={{
            background: "linear-gradient(45deg, #ff00aa, #8a2be2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Services
        </span>
      </h1>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Services;