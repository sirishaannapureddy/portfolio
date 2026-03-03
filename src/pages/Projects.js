
import React from "react";
import "./Projects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import imageGallary from "../assets/imagegallary.png";
import imageGallary1 from "../assets/imagegallary1.png";
import imageGallary2 from "../assets/imagegallary2.png";
import imageGallary3 from "../assets/imagegallary3.png";

import randomquote from "../assets/random.png";
import randomquote1 from "../assets/random1.png";
import randomquote2 from "../assets/random2.png";

import chatbot1 from "../assets/chatbot1.png";
import chatbot2 from "../assets/chatbot2.png";


const PROJECTS = [
  {
    title: "Image Gallery",
    images: [
      imageGallary,
      imageGallary1,
      imageGallary2,
      imageGallary3,
    ],
    repo: "https://github.com/sirishaannapureddy/Image_gallary.git",
  },
  {
    title: "Random Quote Generator",
    images: [
      randomquote,
      randomquote1,
      randomquote2,
    ],
    repo: "https://github.com/sirishaannapureddy/random_quote.git",
  },
  {
    title: "Chat Assistant",
    images: [
      chatbot1,
      chatbot2,
    ],
    repo: "https://github.com/sirishaannapureddy/chatbot.git",
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        {/* <h1 className="projects-title">
           My{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #ff00aa, #8a2be2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              Projects
            </span>
        </h1> */}
                <h1 className="projects-title">
          My{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #000000, #ff69b4, #ff1493, #8a2be2)",
              WebkitBackgroundClip: "text",  
              WebkitTextFillColor: "transparent", 
              fontWeight: "bold",
              display: "inline-block",
              backgroundSize: "300% 300%",
              animation: "gradientMove 3s ease infinite",
            }}
          >
            Projects
          </span>
          </h1>
   
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div className="project-card" key={project.title}>

              <div className="project-browser">
                <div className="project-browser-bar">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>

                
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                >
                  {project.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`${project.title}-${index}`}
                        className="project-image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>

              <h3 className="project-card-title">
                {project.title}
              </h3>

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-source-btn"
              >
                View Source
              </a>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default Projects;