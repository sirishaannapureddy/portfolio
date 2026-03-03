
import React, { useEffect, useState } from "react";
import "./Home.css";
import profile from "../assets/myimage.jpeg";

function Home() {
  const texts = [
    "Scalable Full-Stack Web Applications",
    "Responsive And User-Friendly Interfaces",
    "Modern, High-Performance Web Solutions"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      if (charIndex < texts[textIndex].length) {
        setDisplayText(displayText + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setTextIndex((textIndex + 1) % texts.length);
        }, 1500);
      }
    }, 80);

    return () => clearTimeout(typing);
  }, [charIndex, textIndex, displayText]);

  return (
    <section className="home">
      <div className="home-left">
        <span className="badge">● Available for work</span>

        <h1>
          Hi, I’m <span className="highlight">Sirisha Annapureddy</span>
        </h1>

        <h2>
          I build <span className="typing">{displayText}</span>
        </h2>

        <p>
          Full-Stack Developer building responsive, high-performance web 
          applications with intuitive user interfaces and scalable backend systems.
        </p>

        {/* <div className="buttons">
          <button className="primary-btn">View My Work →</button>
          <button className="secondary-btn">Let’s Talk</button>
        </div> */}
      </div>

      <div className="home-right">
        <div className="profile-wrapper">
          <div className="profile-container">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;


