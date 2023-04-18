import React from "react";
import "../style/Project.css";

const Project = () => {
  const projects: {
    id: number;
    title: string;
    github: string;
    live: string;
    image: string;
  }[] = [
    {
      id: 1,
      title: "Soccer Store Ecommerce",
      github: "https://github.com/LidorLazar/WebEcommerceFInalProject",
      live: "https://soocerstore.netlify.app/",
      image: "soccerStore.png",
    },
    {
      id: 2,
      title: "Yarkona",
      github: "https://github.com/LidorLazar/Yarkona",
      live: "https://vmfc-yarkona.netlify.app/",
      image: "YarkonaProject.png",
    },
  ];

  return (
    <section className="cards" id="projects">
      <h2 className="title-project">My Projects</h2>
      <div className="cards-list">
        {projects.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} className="image" />
            <br />
            <div className="bth-links">
              <a
                className="bth"
                href={item.live}
                target="_blank"
                rel="live-web"
              >
                Live
              </a>
              <a
                className="bth"
                href={item.github}
                target="_blank"
                rel="github"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
